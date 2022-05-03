import React, { memo, useContext, useState } from 'react';
import { FaFileExport } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ModalContext from '../../../../contexts/ModalContext';
import { useDispatch, useSelector } from '../../../../contexts/ResumeContext';
import Button from '../../../shared/Button';
import Heading from '../../../shared/Heading';
import Input from '../../../shared/Input';
import styles from './Actions.module.css';

const Actions = ({ id }) => {
  const { t } = useTranslation();

  const [loadDemoText, setLoadDemoText] = useState(
    t('builder.actions.loadDemoData.button'),
  );
  const [resetText, setResetText] = useState(
    t('builder.actions.resetEverything.button'),
  );

  const state = useSelector();
  const dispatch = useDispatch();
  const { emitter, events } = useContext(ModalContext);

  const handleExport = () => emitter.emit(events.EXPORT_MODAL);

  const getSharableUrl = () => {
    const shareId = state.id;
    return `${t('shared.projectURL')}/r/${shareId}`;
  };

  const handleOpenLink = () => {
    if (typeof window !== `undefined`) {
      window && window.open(getSharableUrl());
    }
  };

  const handleLoadDemo = () => {
    if (loadDemoText === t('builder.actions.loadDemoData.button')) {
      setLoadDemoText(t('shared.buttons.confirmation'));
      return;
    }

    dispatch({ type: 'load_demo_data' });
    setLoadDemoText(t('builder.actions.loadDemoData.button'));
  };

  const handleReset = () => {
    if (resetText === t('builder.actions.resetEverything.button')) {
      setResetText(t('shared.buttons.confirmation'));
      return;
    }

    setResetText(t('builder.actions.resetEverything.button'));
    dispatch({ type: 'reset_data' });
  };

  return (
    <div
      id="sidebar_actions"
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
              <Heading id={id} />

              <div className={styles.container}>
                <h5>{t('builder.actions.export.heading')}</h5>

                <p className="leading-loose">
                  {t('builder.actions.export.text')}
                </p>

                <div className="mt-4 flex">
                  <Button icon={FaFileExport} onClick={handleExport}>
                    {t('builder.actions.export.button')}
                  </Button>
                </div>
              </div>

              <div className={styles.container}>
                <h5>{t('builder.actions.share.heading')}</h5>

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

              <div className={styles.container}>
                <h5>{t('builder.actions.loadDemoData.button')}</h5>

                <p className="leading-loose">
                  {t('builder.actions.loadDemoData.text')}
                </p>

                <div className="mt-4 flex">
                  <Button onClick={handleLoadDemo}>{loadDemoText}</Button>
                </div>
              </div>

              <div className={styles.container}>
                <h5>{t('builder.actions.resetEverything.button')}</h5>

                <p className="leading-loose">
                  {t('builder.actions.resetEverything.text')}
                </p>

                <div className="mt-4 flex">
                  <Button onClick={handleReset}>{resetText}</Button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Actions);
