/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
import firebase from 'gatsby-plugin-firebase';
import React, { createContext, memo, useContext, useRef } from 'react';
import { toast } from 'react-toastify';
import { isFileImage, submitdocumentapi } from '../utils';
import { useDispatch, useSelector } from './ResumeContext';
import UserContext from './UserContext';

const defaultState = {
  uploadPhotograph: async () => {},
};

const StorageContext = createContext(defaultState);

const StorageProvider = ({ children }) => {
  const toastId = useRef(null);

  const { user } = useContext(UserContext);

  const id = useSelector('id');
  const uniqueId = useSelector('profile.uniqueId');
  const dispatch = useDispatch();

  const uploadPhotograph = async (file, isimage) => {
    let uploadTask;
    if (isimage) {
      if (!file) {
        return null;
      }

      if (!isFileImage(file)) {
        toast.error(
          "You tried to upload a file that was not an image. That won't look good on your resume. Please try again.",
        );
        return null;
      }

      if (file.size > 2097152) {
        toast.error(
          "Your image seems to be bigger than 2 MB. That's way too much. Maybe consider reducing it's size?",
        );
        return null;
      }

      uploadTask = firebase
        .storage()
        .ref(`/users/${user.uid}/photographs/${id}`)
        .put(file);
    } else {
      const metadata = {
        contentType: 'application/pdf;charset=utf-8',
      };

      uploadTask = firebase
        .storage()
        .ref(`/users/${user.uid}/pdf/${id}.pdf`)
        .putString(file, 'base64', metadata);
    }

    let progress = 0;
    toastId.current = toast('Checking file...', {
      progress,
    });

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        toast.update(toastId.current, {
          render: isimage ? 'Uploading...' : 'Generating PDF file...',
          progress,
          hideProgressBar: false,
        });
      },
      (error) => toast.error(error),
      async () => {
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        dispatch({
          type: 'on_input',
          payload: {
            path: isimage ? 'profile.photograph' : 'profile.pdfpath',
            value: isimage
              ? downloadURL
              : `https://storage.googleapis.com/veriresume-11902.appspot.com/users/${user.uid}/pdf/${id}.pdf`,
          },
        });

        toast.update(toastId.current, {
          render: isimage
            ? 'File uploaded successfully'
            : 'File is ready to be uploaded',
          progress,
          hideProgressBar: true,
        });

        if (!isimage) {
          toast.update(toastId.current, {
            render: 'Uploading on blockchain...',
          });
          const apidata = await submitdocumentapi(
            uniqueId,
            `https://storage.googleapis.com/veriresume-11902.appspot.com/users/${user.uid}/pdf/${id}.pdf`,
          );
          dispatch({
            type: 'update_qrfile',
            payload: {
              apidata,
            },
          });

          toast.update(toastId.current, {
            render: 'File uploaded on blockchain',
          });
        }
      },
    );
  };

  return (
    <StorageContext.Provider
      value={{
        uploadPhotograph,
      }}
    >
      {children}
    </StorageContext.Provider>
  );
};

export default StorageContext;

const memoizedProvider = memo(StorageProvider);

export { memoizedProvider as StorageProvider };
