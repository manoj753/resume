import firebase from 'gatsby-plugin-firebase';
import { FaQrcode } from 'react-icons/fa';
import React, { memo, useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import StorageContext from '../../../../contexts/StorageContext';
import { useSelector } from '../../../../contexts/ResumeContext';
import Button from '../../../shared/Button';
import Input from '../../../shared/Input';
import styles from './Templates.module.css';

const Blockchain = ({ id }) => {
  const { t } = useTranslation();
  const state = useSelector();
  const [isLoadingSave, setLoadingSave] = useState(false);
  const { uploadPhotograph } = useContext(StorageContext);

  const savefile = async () => {
    setLoadingSave(true);
    try {
      const printResume = firebase.functions().httpsCallable('printResume');
      const { data } = await printResume({
        id: state.id,
        type: 'single',
      });
      uploadPhotograph(data, false);
    } catch (error) {
      toast(error);
    } finally {
      setLoadingSave(false);
    }
  };

  const getSharableUrl = () => {
    const { uniqueId } = state.profile;
    return `https://veridocglobal.com/verify/testnet/document/${uniqueId}`;
  };

  const handleOpenLink = () => {
    if (typeof window !== `undefined`) {
      window && window.open(getSharableUrl());
    }
  };

  const getFileStatus = () => {
    let display;
    const { filehash } = state.profile;
    if (filehash === '' || filehash === 'undefined')
      display = { display: 'none' };
    else display = { display: 'block' };
    return display;
  };

  return (
    <div
      id="sidebar_blockchain"
      className="modal fixed-right"
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-aside" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <section>
              <h2 className="text-4xl focus:outline-none">Blockchain</h2>

              <div className={styles.container}>
                <h5>Upload on Blockchain</h5>

                <p className="leading-loose">
                  You can upload your resume on Blockchain which will protect
                  your document, Powered by Veridoc Global
                </p>

                <div className="mt-4 flex">
                  <Button
                    icon={FaQrcode}
                    isLoading={isLoadingSave}
                    onClick={() => savefile()}
                  >
                    Upload on Blockchain
                  </Button>
                </div>
              </div>

              <hr style={getFileStatus()} />

              <h2
                className="text-4xl focus:outline-none"
                style={getFileStatus()}
              >
                Blockchain Link
              </h2>

              <div className={styles.container} style={getFileStatus()}>
                <h5>Open Blockchained resume</h5>

                <p className="leading-loose">
                  {t('builder.actions.share.text')}
                </p>

                <div>
                  <Input
                    type="action"
                    value={getSharableUrl()}
                    onClick={handleOpenLink}
                  />
                </div>
              </div>

              <hr className={{ id }} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Blockchain);
