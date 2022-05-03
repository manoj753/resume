import firebase from 'gatsby-plugin-firebase';
import { debounce } from 'lodash';
import ShortUniqueId from 'short-unique-id';
import React, { createContext, memo, useContext, useState } from 'react';
import swal from 'sweetalert2';
import { navigate } from 'gatsby';
import UserContext from './UserContext';
import initialState from '../data/initialState.json';
import { getQrImage } from '../utils';

const DEBOUNCE_WAIT_TIME = 2000; /* it was 4000 */

const defaultState = {
  isUpdating: false,
  getUserType: async () => {},
  createResume: async () => {},
  duplicateResume: async () => {},
  deleteResume: () => {},
  getResume: async () => {},
  getResumes: async () => {},
  getSiteData: async () => {},
  updateResume: async () => {},
  debouncedUpdateResume: async () => {},
};

const DatabaseContext = createContext(defaultState);

const DatabaseProvider = ({ children }) => {
  const dictionary = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  const uuid = new ShortUniqueId({ dictionary });

  const [isUpdating, setUpdating] = useState(false);
  const { user } = useContext(UserContext);

  const getResumeCount = async () => {
    const userRef = firebase
      .database()
      .ref('resumes')
      .orderByChild('user')
      .equalTo(user.uid);
    const snapshot = await userRef.once('value');
    return snapshot.numChildren();
  };

  const getUserType = async () => {
    const userRef = firebase.database().ref(`users/${user.uid}`);
    const snapshot = await userRef.once('value');
    const data = snapshot.val();
    return data.userType;
  };

  const getResume = async (id) => {
    try {
      const snapshot = await firebase
        .database()
        .ref(`resumes/${id}`)
        .once('value');
      return snapshot.val();
    } catch (error) {
      return null;
    }
  };

  const getSiteData = async (id) => {
    const userRef = firebase
      .database()
      .ref('resumes')
      .orderByChild('user')
      .equalTo(`${id}`)
      .limitToFirst(1);
    const snapshot = await userRef.once('value');
    return snapshot.val();
  };

  const createResume = async ({ name }) => {
    const userType = await getUserType();
    const resumeCount = await getResumeCount();

    if (typeof userType === 'undefined' || userType === 1) {
      if (resumeCount > 0) {
        swal
          .fire({
            title: 'Upgrade your account !',
            text:
              'You can create max 1 resume on Free version. To create more resume and use more features please upgrade your account.',
            icon: 'error',
            confirmButtonText: '<i class="fa fa-level-up"></i> Upgrade',
            allowOutsideClick: false,
            showCloseButton: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              navigate('/pricing');
            }
          });
        return false;
      }
    } else if (userType === 2) {
      if (resumeCount >= 3) {
        swal
          .fire({
            title: 'Upgrade your account !',
            text:
              'You can create max 3 resumes on Premium version. To create more resume and use more features please upgrade your account to Executive edition.',
            icon: 'error',
            confirmButtonText: '<i class="fa fa-level-up"></i> Upgrade',
            allowOutsideClick: false,
            showCloseButton: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              navigate('/pricing');
            }
          });
        return false;
      }
    }

    const id = uuid();
    const preview = '';
    const createdAt = firebase.database.ServerValue.TIMESTAMP;
    const qrdata = await getQrImage();

    let firstName;
    let lastName;

    if (!user.isAnonymous) {
      [firstName, lastName] = user.displayName.split(' ');
    }

    const resume = {
      ...initialState,
      id,
      name,
      user: user.uid,
      preview,
      profile: {
        ...initialState.profile,
        firstName: firstName || '',
        lastName: lastName || '',
        qrimage: qrdata.qrimage,
        uniqueId: qrdata.uniqueId,
      },
      createdAt,
      updatedAt: createdAt,
    };

    firebase.database().ref(`resumes/${id}`).set(resume);
  };

  const duplicateResume = async (originalResume) => {
    const userType = await getUserType();
    const resumeCount = await getResumeCount();

    if (typeof userType === 'undefined' || userType === 1) {
      if (resumeCount > 0) {
        swal
          .fire({
            title: 'Upgrade your account !',
            text:
              'You can create max 1 resume on Free version. To create more resume and use more features please upgrade your account.',
            icon: 'error',
            confirmButtonText: '<i class="fa fa-level-up"></i> Upgrade',
            allowOutsideClick: false,
            showCloseButton: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              navigate('/pricing');
            }
          });
        return false;
      }
    } else if (userType === 2) {
      if (resumeCount >= 3) {
        swal
          .fire({
            title: 'Upgrade your account !',
            text:
              'You can create max 3 resumes on Premium version. To create more resume and use more features please upgrade your account to Executive edition.',
            icon: 'error',
            confirmButtonText: '<i class="fa fa-level-up"></i> Upgrade',
            allowOutsideClick: false,
            showCloseButton: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              navigate('/pricing');
            }
          });
        return false;
      }
    }

    const id = uuid();
    const preview = '';
    const qrdata = await getQrImage();
    const createdAt = firebase.database.ServerValue.TIMESTAMP;

    const resume = {
      ...originalResume,
      id,
      name: `${originalResume.name} Copy`,
      preview,
      profile: {
        ...originalResume.profile,
        qrimage: qrdata.qrimage,
        uniqueId: qrdata.uniqueId,
      },
      createdAt,
      updatedAt: createdAt,
    };

    firebase.database().ref(`resumes/${id}`).set(resume);
  };

  const updateResume = async (resume) => {
    setUpdating(true);

    await firebase
      .database()
      .ref(`resumes/${resume.id}`)
      .update({
        ...resume,
        updatedAt: firebase.database.ServerValue.TIMESTAMP,
      });

    setUpdating(false);
  };

  const debouncedUpdateResume = debounce(updateResume, DEBOUNCE_WAIT_TIME);

  const deleteResume = async (id) => {
    await firebase.database().ref(`/resumes/${id}`).remove();
  };

  return (
    <DatabaseContext.Provider
      value={{
        isUpdating,
        getUserType,
        getResume,
        getSiteData,
        createResume,
        duplicateResume,
        updateResume,
        deleteResume,
        debouncedUpdateResume,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
};

export default DatabaseContext;

const memoizedProvider = memo(DatabaseProvider);

export { memoizedProvider as DatabaseProvider };
