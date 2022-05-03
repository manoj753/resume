/* eslint-disable jsx-a11y/control-has-associated-label */
import cx from 'classnames';
import React, { memo, useEffect, useState, useContext } from 'react';
import { navigate } from 'gatsby';
import swal from 'sweetalert2';
import { useDispatch, useSelector } from '../../../../contexts/ResumeContext';
import fontOptions from '../../../../data/fontOptions';
import { handleKeyUp, scaler } from '../../../../utils';
import Heading from '../../../shared/Heading';
import DatabaseContext from '../../../../contexts/DatabaseContext';
import fontSizeOptions from '../../../../data/fontSizeOptions';

import styles from './Fonts.module.css';

const Fonts = ({ id }) => {
  const dispatch = useDispatch();
  const font = useSelector('metadata.font');
  const fontSize = useSelector('metadata.fontSize');
  const { getUserType } = useContext(DatabaseContext);
  const [scale, setScale] = useState(fontSize || 7);

  const steps = 20;
  const min = 0;
  const max = min + steps - 1;

  const handleClick = async (value) => {
    const userType = await getUserType();
    if (typeof userType !== 'undefined' && userType > 1) {
      dispatch({
        type: 'on_input',
        payload: {
          path: 'metadata.font',
          value,
        },
      });
    } else {
      swal
        .fire({
          title: 'Upgrade your account !',
          text:
            'To use this feature and Premium templates and more features please upgrade your account.',
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
  };

  useEffect(() => {
    for (const [key, sizeDefault] of Object.entries(fontSizeOptions)) {
      document.documentElement.style.setProperty(
        key,
        `${scaler(scale) * sizeDefault}rem`,
      );
    }
  }, [scale]);

  const onChange = (event) => {
    const { value } = event.target;

    setScale(value);

    dispatch({
      type: 'on_input',
      payload: {
        path: 'metadata.fontSize',
        value,
      },
    });
  };

  return (
    <div
      id="sidebar_fonts"
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
                {fontOptions.map((x) => (
                  <div
                    key={x}
                    tabIndex="0"
                    role="button"
                    style={{ fontFamily: x }}
                    className={cx(styles.font, {
                      [styles.selected]: font === x,
                    })}
                    onKeyUp={(e) => handleKeyUp(e, () => handleClick(x))}
                    onClick={() => handleClick(x)}
                  >
                    {x}
                  </div>
                ))}
              </div>

              <hr />

              <h2 className="text-4xl focus:outline-none">Font Size</h2>

              <input
                step={1}
                min={min}
                max={max}
                type="range"
                onChange={onChange}
                defaultValue={scale}
                className="rounded-lg overflow-hidden appearance-none bg-gray-400 h-4 w-full"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Fonts);
