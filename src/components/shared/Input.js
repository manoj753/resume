/* eslint-disable no-console */
import cx from 'classnames';
import { isFunction } from 'lodash';
import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Editor } from '@tinymce/tinymce-react';
import { FaAngleDown } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from '../../contexts/ResumeContext';
import { handleKeyUp } from '../../utils';
import styles from './Input.module.css';

const Input = ({
  name,
  path,
  label,
  error,
  value,
  onBlur,
  options,
  touched,
  onClick,
  onChange,
  className = '',
  isRequired,
  placeholder,
  type = 'text',
  disabled = false,
  isModal = false,
}) => {
  const { t } = useTranslation();
  const [uuid, setUuid] = useState(null);
  const stateValue = useSelector(path, '');
  const dispatch = useDispatch();

  useEffect(() => {
    setUuid(uuidv4());
  }, []);

  value = path ? stateValue : value;
  onChange = isFunction(onChange)
    ? onChange
    : (e) => {
        dispatch({
          type: 'on_input',
          payload: {
            path,
            value: e.target.value,
          },
        });
      };

  const onEditorChange = (content, editor) => {
    if (!isModal) {
      dispatch({
        type: 'on_input',
        payload: {
          path,
          value: content,
        },
      });
    }
  };

  return (
    <div className={`form-group col-12 ${className}`}>
      {/* <label htmlFor={uuid} className={styles.labelWidth}> */}
      <label>
        {label}{' '}
        {isRequired && (
          <span className="opacity-75 font-normal lowercase">
            ({t('shared.forms.required')})
          </span>
        )}
      </label>

      {(type === 'text' || type === 'date') && (
        <input
          id={uuid}
          name={name}
          type={type}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          className="form-control"
          readOnly={disabled}
        />
      )}

      {type === 'photo' && (
        <input
          id={uuid}
          name={name}
          type={type}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          className="d-none"
          readOnly={disabled}
        />
      )}

      {/* <div className="relative grid items-center">      
      </div> */}

      {type === 'textarea' && !isModal && (
        <div className="flex flex-col">
          <Editor
            id={uuid}
            name={name}
            apiKey="bxddwgfwq64w45dpxic7yr0zol5p1a15ddqp0umlyahbwg3j"
            initialValue={value}
            className={name}
            init={{
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                // eslint-disable-next-line no-multi-str
                'undo redo | fontsizeselect | formatselect | bold underline italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help',
              fontsize_formats: '8pt 10pt 12pt 14pt 18pt 24pt 36pt',
            }}
            onEditorChange={onEditorChange}
          />
        </div>
      )}

      {type === 'textarea' && isModal && (
        <div className="flex flex-col">
          <textarea
            id={uuid}
            rows="4"
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={placeholder}
          />
        </div>
      )}

      {type === 'dropdown' && (
        <div className="relative grid items-center">
          <select
            id={uuid}
            name={name}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
          >
            {options.map((x) => (
              <option key={x} value={x}>
                {x}
              </option>
            ))}
          </select>

          <FaAngleDown
            size="16px"
            className="absolute right-0 opacity-50 hover:opacity-75 mx-4"
          />
        </div>
      )}

      {type === 'color' && (
        <div className="relative grid items-center">
          <div className={styles.circle} style={{ backgroundColor: value }} />

          <input
            id={uuid}
            name={name}
            type="color"
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            style={{ width: '100%', height: '30px' }}
          />
        </div>
      )}

      {type === 'action' && (
        <div className={cx('relative grid items-center', styles.readOnly)}>
          <input readOnly id={uuid} name={name} type="text" value={value} />

          <div
            tabIndex="0"
            role="button"
            onClick={onClick}
            onKeyUp={(e) => handleKeyUp(e, onClick)}
          >
            <MdOpenInNew size="16px" />
          </div>
        </div>
      )}

      {error && touched && <p>{error}</p>}
      {/* </label> */}
    </div>
  );
};

export default memo(Input);
