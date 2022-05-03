import { Tooltip } from '@material-ui/core';
import React, { memo, useContext, useRef } from 'react';
import { MdFileUpload } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import StorageContext from '../../contexts/StorageContext';
import { handleKeyUp } from '../../utils';
import Input from './Input';
import styles from './PhotoUpload.module.css';

const PhotoUpload = () => {
  const fileInputRef = useRef(null);
  const { t } = useTranslation();
  const { uploadPhotograph } = useContext(StorageContext);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    uploadPhotograph(file, true);
  };

  return (
    <div className="form-group col-12 col-lg-6">
      <div className="flex items-center">
        <Tooltip
          title={t('builder.tooltips.uploadPhotograph')}
          placement="right-start"
        >
          <div
            role="button"
            tabIndex="0"
            className={styles.circle}
            onClick={handleIconClick}
            onKeyUp={(e) => handleKeyUp(e, handleIconClick)}
          >
            <MdFileUpload size="22px" />
            <input
              name="file"
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageUpload}
            />
          </div>
        </Tooltip>

        <Input
          name="photograph"
          label={t('builder.profile.photograph')}
          className="col-md-4 col-lg-4"
          path="profile.photograph"
          type="photo"
        />
      </div>
    </div>
  );
};

export default memo(PhotoUpload);
