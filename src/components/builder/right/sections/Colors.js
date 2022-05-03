/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from '../../../../contexts/ResumeContext';
import colorOptions from '../../../../data/colorOptions';
import { handleKeyUp } from '../../../../utils';
import Heading from '../../../shared/Heading';
import Input from '../../../shared/Input';
import styles from './Colors.module.css';

const Colors = ({ id }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleClick = (value) => {
    dispatch({
      type: 'on_input',
      payload: {
        path: 'metadata.colors.primary',
        value,
      },
    });
  };

  return (
    <div
      id="sidebar_color"
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

              <div className="mb-6 grid grid-cols-8 gap-x-2 gap-y-6">
                {colorOptions.map((color) => (
                  <div
                    key={color}
                    tabIndex="0"
                    role="button"
                    className={styles.circle}
                    style={{ backgroundColor: color }}
                    onKeyUp={(e) => handleKeyUp(e, () => handleClick(color))}
                    onClick={() => handleClick(color)}
                  />
                ))}
              </div>

              <Input
                type="color"
                name="primary"
                label="Heading & theme color" /* {t('builder.colors.primary')} */
                placeholder="#FF4081"
                path="metadata.colors.primary"
              />

              <Input
                type="color"
                name="text"
                label={t('builder.colors.text')}
                placeholder="#444444"
                path="metadata.colors.text"
              />

              <Input
                type="color"
                name="background"
                label={t('builder.colors.background')}
                placeholder="#FFFFFF"
                path="metadata.colors.background"
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Colors);
