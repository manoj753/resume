import { navigate } from '@reach/router';
import React, { memo, useContext, useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import LoadingScreen from '../../components/router/LoadingScreen';
import DatabaseContext from '../../contexts/DatabaseContext';
import Castform from '../../templates/Castform';
import Gengar from '../../templates/Gengar';
import Glalie from '../../templates/Glalie';
import Onyx from '../../templates/Onyx';
import Pikachu from '../../templates/Pikachu';
import styles from './view.module.css';
import Celebi from '../../templates/Celebi';
import fontSizeOptions from '../../data/fontSizeOptions';
import { scaler } from '../../utils';

const ResumeViewer = ({ id }) => {
  const { t, i18n } = useTranslation();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);
  const { getResume } = useContext(DatabaseContext);

  useEffect(() => {
    (async () => {
      const data = await getResume(id);

      if (!data) {
        navigate('/');
        toast.error(
          `The resume you were looking for does not exist or maybe removed.`,
        );
        return null;
      }

      setResume(data);
      i18n.changeLanguage(data.metadata.language || 'en');

      for (const [key, sizeDefault] of Object.entries(fontSizeOptions)) {
        document.documentElement.style.setProperty(
          key,
          `${scaler(data.metadata.fontSize) * sizeDefault}rem`,
        );
      }

      return setLoading(false);
    })();
  }, [id]);

  return useMemo(() => {
    if (loading) {
      return <LoadingScreen />;
    }

    return (
      <div className={styles.container}>
        <Helmet>
          <title>
            {resume.name} | {t('shared.appName')}
          </title>
          <link rel="canonical" href={`${t('shared.projectURL')}/r/${id}`} />
          <style type="text/css">
            {`
                @media print { 
                  @page { margin: auto 0; }
                  body { margin:0; padding:0; } 
                  #page { width:100%; position:relative;} h1,h2,h3,span,p,li,h6,h5,h4,a { page-break-inside:avoid;page-break-after:auto; } 
                }
            `}
          </style>
        </Helmet>

        <div
          className={styles.page}
          style={{
            backgroundColor: resume.metadata.colors.background,
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'left',
          }}
        >
          {resume.metadata.template === 'onyx' && <Onyx data={resume} />}
          {resume.metadata.template === 'pikachu' && <Pikachu data={resume} />}
          {resume.metadata.template === 'gengar' && <Gengar data={resume} />}
          {resume.metadata.template === 'castform' && (
            <Castform data={resume} />
          )}
          {resume.metadata.template === 'glalie' && <Glalie data={resume} />}
          {resume.metadata.template === 'celebi' && <Celebi data={resume} />}
        </div>

        {/* <p className={styles.footer}>
          Built with <Link to="/">Verified Resume</Link>
        </p> */}
      </div>
    );
  });
};

export default memo(ResumeViewer);
