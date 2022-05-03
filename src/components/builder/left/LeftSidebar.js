/* eslint-disable no-lone-blocks */
import React, { Fragment, memo, useState } from 'react';
import { Element } from 'react-scroll';
import StepWizard from 'react-step-wizard';
import swal from 'sweetalert2';
import sections from '../../../data/leftSections';
/* import LeftNavbar from './LeftNavbar'; */
import styles from './LeftSidebar.module.css';
import Awards from './sections/Awards';
import Certifications from './sections/Certifications';
import Education from './sections/Education';
import Hobbies from './sections/Hobbies';
import Languages from './sections/Languages';
import Objective from './sections/Objective';
import Profile from './sections/Profile';
import Projects from './sections/Projects';
import References from './sections/References';
import Skills from './sections/Skills';
import Social from './sections/Social';
import Work from './sections/Work';

const getComponent = (id) => {
  switch (id) {
    case 'profile':
      return Profile;
    case 'social':
      return Social;
    case 'objective':
      return Objective;
    case 'work':
      return Work;
    case 'education':
      return Education;
    case 'projects':
      return Projects;
    case 'awards':
      return Awards;
    case 'certifications':
      return Certifications;
    case 'skills':
      return Skills;
    case 'hobbies':
      return Hobbies;
    case 'languages':
      return Languages;
    case 'references':
      return References;
    default:
      throw new Error();
  }
};

const handleFinish = () => {
  swal
    .fire({
      title: 'Saved successfully',
      text: 'All data are submitted',
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#33a8f2',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Blockchain resume',
      allowOutsideClick: false,
      showCloseButton: true,
    })
    .then((result) => {
      if (result.isConfirmed) {
        document.getElementById('btn__sidebar_blockchain').click();
      }
    });
};

const SidebarSection = ({ id, event }) => {
  const Component = getComponent(id);

  return (
    <Fragment key={id}>
      <Element name={id}>
        <Component id={id} event={event} />
      </Element>
      <hr />
    </Fragment>
  );
};

const LeftSidebar = () => {
  const [state, updateState] = useState({
    form: {},
    transitions: {},
    buttons: true,
  });

  const setInstance = (SW) =>
    updateState({
      ...state,
      SW,
    });

  const { SW, buttons } = state;

  return (
    <div className="flex">
      {/* {buttons && SW && <LeftNavbar SW={SW} />} */}

      <div
        id="LeftSidebar"
        className={`${styles.container} col-lg-10 col-md-10 ml-auto`}
      >
        <StepWizard instance={setInstance}>
          {sections.map(SidebarSection)}
        </StepWizard>
        {buttons && SW && <InstanceButton SW={SW} />}
      </div>
    </div>
  );
};

export default memo(LeftSidebar);

const InstanceButton = ({ SW }) => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="row fix-btn">
      <div className="col-6">
        {activeStep === 1 ? (
          ''
        ) : (
          <button
            className="btn__next float-left"
            onClick={() => {
              activeStep >= 1 ? setActiveStep(activeStep - 1) : null;
              activeStep >= 1 ? SW.goToStep(activeStep - 1) : null;
            }}
          >
            Previous
          </button>
        )}
      </div>
      <div className="col-6">
        {activeStep !== 12 ? (
          <button
            className="btn__next float-right"
            onClick={() => {
              activeStep <= 12 ? setActiveStep(activeStep + 1) : null;
              activeStep <= 12 ? SW.goToStep(activeStep + 1) : null;
            }}
          >
            Next
          </button>
        ) : (
          <button className="btn__next float-right" onClick={handleFinish}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};
