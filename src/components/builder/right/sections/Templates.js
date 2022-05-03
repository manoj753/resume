import cx from 'classnames';
import { graphql, useStaticQuery, navigate } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import React, { memo, useContext } from 'react';
import swal from 'sweetalert2';
import { useDispatch, useSelector } from '../../../../contexts/ResumeContext';
import templateOptions from '../../../../data/templateOptions';
import { handleKeyUp } from '../../../../utils';
import Heading from '../../../shared/Heading';
import styles from './Templates.module.css';
import DatabaseContext from '../../../../contexts/DatabaseContext';

const Templates = ({ id }) => {
  const dispatch = useDispatch();
  const template = useSelector('metadata.template');
  const { getUserType } = useContext(DatabaseContext);

  const previews = useStaticQuery(graphql`
    query {
      onyx: file(relativePath: { eq: "templates/onyx.png" }) {
        childImageSharp {
          fluid(maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      pikachu: file(relativePath: { eq: "templates/pikachu.png" }) {
        childImageSharp {
          fluid(maxHeight: 400, quality: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gengar: file(relativePath: { eq: "templates/gengar.png" }) {
        childImageSharp {
          fluid(maxHeight: 400, quality: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      castform: file(relativePath: { eq: "templates/castform.png" }) {
        childImageSharp {
          fluid(maxHeight: 400, quality: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      glalie: file(relativePath: { eq: "templates/glalie.png" }) {
        childImageSharp {
          fluid(maxHeight: 400, quality: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      celebi: file(relativePath: { eq: "templates/celebi.png" }) {
        childImageSharp {
          fluid(maxHeight: 400, quality: 99) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  /* const handleQR = async () => {
    const qrdata = await getQrImage();
    dispatch({
      type: 'add_qr',
      payload: {
        qrdata,
      },
    });
  }; */

  const handleClick = async (value) => {
    if (value === 'onyx' || value === 'pikachu') {
      dispatch({
        type: 'on_input',
        payload: {
          path: 'metadata.template',
          value,
        },
      });
    } else {
      const userType = await getUserType();
      if (typeof userType !== 'undefined' && userType > 1) {
        dispatch({
          type: 'on_input',
          payload: {
            path: 'metadata.template',
            value,
          },
        });
      } else {
        swal
          .fire({
            title: 'Upgrade your account !',
            text:
              'To use Premium templates and use more features please upgrade your account.',
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
      }
    }
  };

  return (
    <div
      id="sidebar_templates"
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

              <div className="grid grid-cols-2 gap-8">
                {templateOptions.map((x) => (
                  <div
                    key={x.id}
                    tabIndex="0"
                    role="button"
                    onKeyUp={(e) => handleKeyUp(e, () => handleClick(x.id))}
                    onClick={() => handleClick(x.id)}
                    className={cx(styles.template, {
                      [styles.selected]: template === x.id,
                    })}
                  >
                    <GatsbyImage
                      alt={x.name}
                      loading="eager"
                      className="w-full"
                      style={{
                        height: '230px',
                        boxShadow: '0 0 10px #00000057',
                      }}
                      fluid={previews[x.id].childImageSharp.fluid}
                    />
                    <span>{x.name}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Templates);
