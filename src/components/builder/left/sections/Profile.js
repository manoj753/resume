import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Heading from '../../../shared/Heading';
import Input from '../../../shared/Input';
import PhotoUpload from '../../../shared/PhotoUpload';

const Profile = ({ id }) => {
  const { t } = useTranslation();

  const disableInput = (e) => {
    e.preventDefault();
    return false;
  };

  return (
    <section>
      <Heading id={id} />

      <div className="form-row">
        <Input
          name="heading"
          label={t('builder.sections.heading')}
          path={`${id}.heading`}
          className="col-lg-6"
        />
        <PhotoUpload />
      </div>
      <div className="form-row">
        <Input
          name="firstName"
          label={t('builder.profile.firstName')}
          path="profile.firstName"
          className="col-lg-6"
        />
        <Input
          name="lastName"
          label={t('builder.profile.lastName')}
          path="profile.lastName"
          className="col-lg-6"
        />
      </div>

      <div className="form-row">
        <Input
          name="subtitle"
          label={t('shared.forms.subtitle')}
          path="profile.subtitle"
        />
      </div>

      <hr />
      <div className="form-row">
        <Input
          name="addressLine1"
          label={t('builder.profile.address.line1')}
          path="profile.address.line1"
        />
      </div>
      <div className="form-row">
        <Input
          name="addressLine2"
          label={t('builder.profile.address.line2')}
          path="profile.address.line2"
        />
      </div>
      <div className="form-row">
        <Input
          name="city"
          label={t('builder.profile.address.city')}
          path="profile.address.city"
          className="col-lg-6"
        />
        <Input
          name="pincode"
          label={t('builder.profile.address.pincode')}
          path="profile.address.pincode"
          className="col-lg-6"
        />
      </div>

      <div className="form-row">
        <Input
          name="state"
          label={t('builder.profile.address.state')}
          path="profile.address.state"
          className="col-lg-6"
        />
        <Input
          name="country"
          label={t('builder.profile.address.country')}
          path="profile.address.country"
          className="col-lg-6"
        />
      </div>

      <hr />

      <div className="form-row">
        <Input
          name="phone"
          label={t('shared.forms.phone')}
          path="profile.phone"
          className="col-lg-6"
        />
        <Input
          name="website"
          label={t('shared.forms.website')}
          path="profile.website"
          className="col-lg-6"
        />
      </div>
      <div className="form-row">
        <Input
          name="email"
          label={t('shared.forms.email')}
          path="profile.email"
          onChange={disableInput}
          disabled
        />
      </div>
    </section>
  );
};

export default memo(Profile);
