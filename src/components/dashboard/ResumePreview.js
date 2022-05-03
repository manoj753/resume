/* import { Menu, MenuItem } from '@material-ui/core'; */
import { graphql, useStaticQuery, navigate } from 'gatsby';
import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
/* import { MdMoreHoriz, MdOpenInNew } from 'react-icons/md'; */
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import GatsbyImage from 'gatsby-image';
import swal from 'sweetalert2';
import DatabaseContext from '../../contexts/DatabaseContext';
import ModalContext from '../../contexts/ModalContext';
/* import styles from './ResumePreview.module.css'; */

const ResumePreview = ({ resume }) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const { emitter, events } = useContext(ModalContext);
  const { duplicateResume, deleteResume } = useContext(DatabaseContext);

  const handleOpen = (e) => {
    e.preventDefault();
    navigate(`/app/builder/${resume.id}`);
  };

  /* const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  }; */

  const handleDuplicate = (e) => {
    e.preventDefault();
    swal.queue([
      {
        title: 'Are you sure ?',
        confirmButtonText: 'Yes, Make a copy',
        text:
          'All data of this resume will be copied but a new QR code will be assigned to this new resume',
        showCancelButton: false,
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
        showCloseButton: true,
        showClass: {
          popup: 'animate__animated animate__fadeIn animate__faster',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOut animate__faster',
        },
        focusConfirm: false,
        preConfirm: () => {
          return duplicateResume(resume)
            .then(() => {
              setAnchorEl(null);
            })
            .catch(() => {
              swal.insertQueueStep({
                icon: 'error',
                title: 'Error while duplicating, please try again later.',
              });
            });
        },
      },
    ]);
  };

  const handleRename = (e) => {
    e.preventDefault();
    emitter.emit(events.CREATE_RESUME_MODAL, resume);
    setAnchorEl(null);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    swal
      .fire({
        title: 'Are you sure ?',
        text: "You won't be able to revert this !",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#33a8f2',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete !',
        allowOutsideClick: false,
        showCloseButton: true,
        showClass: {
          popup: 'animate__animated animate__fadeIn animate__faster',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOut animate__faster',
        },
        focusConfirm: false,
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteResume(resume.id);
          toast(t('dashboard.toasts.deleted', { name: resume.name }));
          setAnchorEl(null);
        }
      });
  };

  const handleDownload = (e) => {
    e.preventDefault();
    emitter.emit(events.EXPORT_MODAL, resume.id);
  };

  const previews = useStaticQuery(graphql`
    query {
      onyx: file(relativePath: { eq: "templates/onyx.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pikachu: file(relativePath: { eq: "templates/pikachu.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gengar: file(relativePath: { eq: "templates/gengar.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      castform: file(relativePath: { eq: "templates/castform.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glalie: file(relativePath: { eq: "templates/glalie.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      celebi: file(relativePath: { eq: "templates/celebi.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="col-md-4 col-sm-6 mb-3 resume__section">
      <div className="row resumes_section_row">
        <div
          className="col-lg-6 col-md-12 col-sm-6 col-xs-12 resumes_section_col"
          style={{ boxShadow: '0px 0px 9px 0px #0000006e' }}
        >
          {/* <img src={resume.preview} alt={resume.name} className="img-fluid" /> */}
          <GatsbyImage
            alt={resume.name}
            loading="eager"
            className="img-fluid"
            fluid={previews[resume.metadata.template].childImageSharp.fluid}
          />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-6 col-xs-12 resumes_section_col">
          <div>
            <label>
              <span className="res1">{resume.name}</span>
            </label>
            {resume.updatedAt && (
              <label>
                {t('dashboard.lastUpdated', {
                  timestamp: dayjs(resume.updatedAt)
                    .locale(i18n.language.substr(0, 2))
                    .fromNow(),
                })}
              </label>
            )}
            <br />
            <div className="controls" anchorEl={anchorEl}>
              <label>
                <a href onClick={handleOpen}>
                  <i className="fa fa-edit" />
                  <span>Edit</span>
                </a>
              </label>
              <br />
              <label>
                <a href onClick={handleRename}>
                  <i className="fa fa-pencil-square-o" />
                  <span>Rename</span>
                </a>
              </label>
              <br />
              <label>
                <a href onClick={handleDuplicate}>
                  <i className="fa fa-copy" />
                  <span>Make a copy</span>
                </a>
              </label>
              <br />
              <label>
                <a href onClick={handleDownload}>
                  <i className="fa fa-file" />
                  <span>Download</span>
                </a>
              </label>
              <br />
              {/* <label>
                <a href="#!">
                  <i className="fa fa-upload" />
                  <span>Upload to Blockchain</span>
                </a>
              </label> */}
              <label>
                <a href onClick={handleDelete}>
                  <i className="fa fa-trash" />
                  <span>Delete</span>
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.backdrop}>
        <img src={resume.preview} alt={resume.name} />
      </div>
      <div className={styles.page}>
        <MdOpenInNew
          color="#fff"
          size="48"
          className="cursor-pointer"
          onClick={handleOpen}
        />
        <MdMoreHoriz
          color="#fff"
          size="48"
          className="cursor-pointer"
          aria-haspopup="true"
          onClick={handleMenuClick}
        />
        <Menu
          keepMounted
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleDuplicate}>
            {t('dashboard.buttons.duplicate')}
          </MenuItem>
          <MenuItem onClick={handleRename}>
            {t('dashboard.buttons.rename')}
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <span className="text-red-600 font-medium">
              {t('shared.buttons.delete')}
            </span>
          </MenuItem>
        </Menu>
      </div>
      <div className={styles.meta}>
        <span>{resume.name}</span>
        {resume.updatedAt && (
          <span>
            {t('dashboard.lastUpdated', {
              timestamp: dayjs(resume.updatedAt)
                .locale(i18n.language.substr(0, 2))
                .fromNow(),
            })}
          </span>
        )}
      </div> */}
    </div>
  );
};

export default ResumePreview;
