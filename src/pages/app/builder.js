import { navigate } from 'gatsby';
import React, { memo, useContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Artboard from '../../components/builder/center/Artboard';
import LeftSidebar from '../../components/builder/left/LeftSidebar';
import RightSidebar from '../../components/builder/right/RightSidebar';
import LoadingScreen from '../../components/router/LoadingScreen';
import DatabaseContext from '../../contexts/DatabaseContext';
import { useDispatch } from '../../contexts/ResumeContext';
import Button from '../../components/shared/Button';
import TopNavbar from '../../components/dashboard/TopNavbar';
/* import styles from './builder.module.css'; */

import '../../../static/css/personal.css';
import '../../../static/css/global_css.css';
import '../../../static/css/builder.css';

const Builder = ({ id }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const { getResume } = useContext(DatabaseContext);

  const handleLoadDemoData = () => {
    dispatch({ type: 'load_demo_data' });
  };

  useEffect(() => {
    (async () => {
      const resume = await getResume(id);

      if (!resume) {
        navigate('/app/dashboard');
        toast.error(t('builder.toasts.doesNotExist'));
        return null;
      }

      if (resume.createdAt === resume.updatedAt) {
        toast.dark(() => (
          <div className="py-2">
            <p className="leading-loose">{t('builder.toasts.loadDemoData')}</p>

            <Button className="mt-4" onClick={handleLoadDemoData}>
              {t('builder.actions.loadDemoData.button')}
            </Button>
          </div>
        ));
      }

      dispatch({ type: 'set_data', payload: resume });
      return setLoading(false);
    })();
  }, [id]);

  return useMemo(() => {
    if (loading) {
      return <LoadingScreen />;
    }

    return (
      <div>
        <TopNavbar />
        <RightSidebar />
        <section>
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-12 left__form"
                style={{ padding: '0' }}
              >
                <LeftSidebar />
              </div>
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-12"
                style={{
                  overflow: 'auto',
                  height: '93vh',
                  background: '#212121',
                }}
              >
                <Artboard />
              </div>
            </div>
          </div>
        </section>

        <div className="side__bar side__option1">
          <span className="option">
            <button
              id="btn__sidebar_blockchain"
              data-toggle="modal"
              data-target="#sidebar_blockchain"
              className="btn"
              type="button"
              style={{ padding: 'unset' }}
            >
              {' '}
              <i className="fa fa-qrcode" /> <small>Secure</small>
            </button>
          </span>
        </div>
        <div className="side__bar side__option2">
          <span className="option">
            <button
              data-toggle="modal"
              data-target="#sidebar_templates"
              className="btn"
              type="button"
              style={{ padding: 'unset' }}
            >
              {' '}
              <i className="fa fa-clone" /> <small>Templates</small>
            </button>
          </span>
        </div>
        <div className="side__bar side__option3">
          <span className="option">
            <button
              data-toggle="modal"
              data-target="#sidebar_color"
              className="btn"
              type="button"
              style={{ padding: 'unset' }}
            >
              {' '}
              <i className="fa fa-adjust" /> <small>Color</small>
            </button>
          </span>
        </div>
        <div className="side__bar side__option4">
          <span className="option">
            <button
              data-toggle="modal"
              data-target="#sidebar_fonts"
              className="btn"
              type="button"
              style={{ padding: 'unset' }}
            >
              {' '}
              <i className="fa fa-font" /> <small>Fonts</small>
            </button>
          </span>
        </div>
        <div className="side__bar side__option5">
          <span className="option">
            <button
              data-toggle="modal"
              data-target="#sidebar_layout"
              className="btn"
              type="button"
              style={{ padding: 'unset' }}
            >
              {' '}
              <i className="fa fa-sliders" /> <small>Layout</small>
            </button>
          </span>
        </div>
        <div className="side__bar side__option6">
          <span className="option">
            <button
              data-toggle="modal"
              data-target="#sidebar_actions"
              className="btn"
              type="button"
              style={{ padding: 'unset' }}
            >
              {' '}
              <i className="fa fa-th-large" /> <small>Actions</small>
            </button>
          </span>
        </div>
      </div>
    );
  }, [loading]);
};

export default memo(Builder);
