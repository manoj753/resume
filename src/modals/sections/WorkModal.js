import { Formik } from 'formik';
import React, { memo } from 'react';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import Input from '../../components/shared/Input';
import ModalEvents from '../../constants/ModalEvents';
import { getFieldProps } from '../../utils';
import DataModal from '../DataModal';
import { Scrollbars } from 'react-custom-scrollbars';

const initialValues = {
  company: '',
  position: '',
  website: '',
  startDate: '',
  endDate: '',
  summary: '',
};

const WorkModal = () => {
  const { t } = useTranslation();

  const schema = Yup.object().shape({
    company: Yup.string().required(t('shared.forms.validation.required')),
    position: Yup.string().required(t('shared.forms.validation.required')),
    website: Yup.string().url(t('shared.forms.validation.url')),
    startDate: Yup.date(),
    endDate: Yup.date().when(
      'startDate',
      (startDate, yupSchema) =>
        startDate &&
        yupSchema.min(startDate, t('shared.forms.validation.dateRange')),
    ),
    summary: Yup.string().min(
      10,
      t('shared.forms.validation.min', { number: 10 }),
    ),
  });

  return (
    <Formik
      validateOnBlur
      initialValues={initialValues}
      validationSchema={schema}
    >
      {(formik) => (
        <DataModal
          path="work.items"
          name={t('builder.sections.work')}
          event={ModalEvents.WORK_MODAL}
        >
          <Scrollbars style={{ width: 500, height: 300 }}>
          <div className="grid grid-cols-2 gap-8">
            <Input
              label={t('builder.work.company')}
              className="col-span-2"
              placeholder="Caravan Products"
              {...getFieldProps(formik, schema, 'company')}
            />

            <Input
              label={t('shared.forms.position')}
              placeholder="National Products Manager"
              {...getFieldProps(formik, schema, 'position')}
            />

            <Input
              label={t('shared.forms.website')}
              placeholder="https://"
              {...getFieldProps(formik, schema, 'website')}
            />

            <Input
              type="date"
              label={t('shared.forms.startDate')}
              placeholder="6th August 2021"
              {...getFieldProps(formik, schema, 'startDate')}
            />

            <Input
              type="date"
              label={t('shared.forms.endDate')}
              placeholder="6th October 2021"
              {...getFieldProps(formik, schema, 'endDate')}
            />

            <Input
              type="textarea"
              label={t('shared.forms.summary')}
              className="col-span-2"
              isModal
              {...getFieldProps(formik, schema, 'summary')}
            />
          </div>
          </Scrollbars>
        </DataModal>
      )}
    </Formik>
  );
};

export default memo(WorkModal);
