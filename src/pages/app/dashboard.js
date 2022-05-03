import firebase from 'gatsby-plugin-firebase';
import React, { useEffect, useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ContentLoader from 'react-content-loader';
import ModalContext from '../../contexts/ModalContext';
/* import CreateResume from '../../components/dashboard/CreateResume'; */
import ResumePreview from '../../components/dashboard/ResumePreview';
import TopNavbar from '../../components/dashboard/TopNavbar';
import LoadingScreen from '../../components/router/LoadingScreen';

import '../../../static/css/dashboard.css';
import '../../../static/css/choose-resume.css';

const Dashboard = ({ user }) => {
  const { t } = useTranslation();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showContentLoader, setContentLoader] = useState(true);

  const { emitter, events } = useContext(ModalContext);
  const handleClick = () => emitter.emit(events.CREATE_RESUME_MODAL);

  useEffect(() => {
    const resumesRef = 'resumes';
    const socketRef = '/.info/connected';

    firebase
      .database()
      .ref(socketRef)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          setLoading(false);
          firebase.database().ref(socketRef).off();
        }
      });

    firebase
      .database()
      .ref(resumesRef)
      .orderByChild('user')
      .equalTo(user.uid)
      .on('value', (snapshot) => {
        if (snapshot.val()) {
          setContentLoader(false);
          const resumesArr = [];
          const data = snapshot.val();
          Object.keys(data).forEach((key) => resumesArr.push(data[key]));
          setResumes(resumesArr);
        }
      });

    firebase
      .database()
      .ref(resumesRef)
      .orderByChild('user')
      .equalTo(user.uid)
      .on('child_removed', (snapshot) => {
        if (snapshot.val()) {
          setResumes(resumes.filter((x) => x.id === snapshot.val().id));
        }
      });

    return () => {
      firebase.database().ref(resumesRef).off();
    };
  }, [user]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Helmet>
        <title>
          {t('dashboard.title')} | {t('shared.appName')}
        </title>
        <link
          rel="canonical"
          href={`${t('shared.projectURL')}/app/dashboard`}
        />
      </Helmet>

      <TopNavbar />

      <section className="display_section">
        <div className="container">
          <label>
            <h4>
              <strong>My Resumes</strong>
            </h4>
          </label>
          <div className="float-right">
            <button className="btn light_blue_bg" onClick={handleClick}>
              Create a new
            </button>
          </div>
          <div className="text_content">
            <p>Find all of your saved resumes, and manage them from here</p>
          </div>
          <div className="row resumes_section">
            {/* <div className="col-md-4 col-sm-6 mb-3 resume__section">
                <CreateResume />
              </div> */}
            <div
              className={`${
                showContentLoader
                  ? 'col-md-4 col-sm-6 mb-3 resume__section'
                  : 'd-none'
              }`}
            >
              <ContentLoader
                speed={1}
                width={350}
                height={230}
                viewBox="0 0 350 230"
                backgroundColor="#cbafaf"
                foregroundColor="#ecebeb"
              >
                <rect x="191" y="22" rx="5" ry="5" width="152" height="14" />
                <rect x="191" y="50" rx="5" ry="5" width="149" height="7" />
                <circle cx="203" cy="81" r="11" />
                <rect x="220" y="78" rx="5" ry="5" width="87" height="10" />
                <rect x="-2" y="8" rx="0" ry="0" width="168" height="231" />
                <circle cx="203" cy="112" r="11" />
                <rect x="220" y="111" rx="5" ry="5" width="87" height="10" />
                <circle cx="204" cy="145" r="11" />
                <rect x="221" y="143" rx="5" ry="5" width="87" height="10" />
              </ContentLoader>
            </div>
            {resumes.map((x) => (
              <ResumePreview key={x.id} resume={x} />
            ))}
          </div>
          {/* <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="card c-bs">
                <img
                  className="card-img-top p-3"
                  src="https://www.gstatic.com/identity/boq/accountsettingsmobile/privacycheckup_scene_active_632x224_4c2211174f155c3df4f49a90e510335b.png"
                  alt="Recruiter"
                />
                <div className="card-body">
                  <h5>Would you like a recruiter to contact you ?</h5>
                </div>
                <hr />
                <div className="card-body p-0-125">
                  <div className="row">
                    <div className="col-6">
                      <h5>Visibility</h5>
                    </div>
                    <div className="col-6 text-right">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="switch-slider" />
                      </label>
                    </div>
                  </div>
                </div>
                <hr className="m-1" />
                <div className="card-body">
                  <p className="card-text">
                    You can manage from here if job recruiters can get your
                    contact informations or not.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card c-bs">
                <img
                  className="card-img-top p-3"
                  src="https://www.gstatic.com/identity/boq/accountsettingsmobile/contacts_card_scene_316x112_30b26c263ec7d6c2839b403059092259.png"
                  alt="JobBoards"
                />
                <div className="card-body">
                  <h5>Would you like your resume posted to job boards ?</h5>
                </div>
                <hr />
                <div className="card-body p-0-125">
                  <div className="row">
                    <div className="col-6">
                      <h5>Visibility</h5>
                    </div>
                    <div className="col-6 text-right">
                      <label className="switch">
                        <input type="checkbox" />
                        <span className="switch-slider" />
                      </label>
                    </div>
                  </div>
                </div>
                <hr className="m-1" />
                <div className="card-body">
                  <p className="card-text">
                    You can manage from here if your resume can be seen in job
                    recruiter portals or not.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* <div className="container mt-12 px-12 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <CreateResume />

          {resumes.map((x) => (
            <ResumePreview key={x.id} resume={x} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
