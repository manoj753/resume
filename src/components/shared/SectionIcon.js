import { Tooltip } from '@material-ui/core';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';
import styles from './SectionIcon.module.css';

const SectionIcon = ({
  section,
  containerId,
  tooltipPlacement,
  clickEvent,
}) => {
  const { t } = useTranslation();
  const { id, icon: Icon } = section;

  return (
    <Tooltip
      title={t(`builder.sections.${id}`)}
      placement={tooltipPlacement}
      arrow
    >
      <Link
        spy
        to={id}
        activeClass="text-primary-900"
        className={styles.icon}
        onClick={clickEvent}
      >
        <Icon size="18px" />
      </Link>
    </Tooltip>
  );
};

export default memo(SectionIcon);
