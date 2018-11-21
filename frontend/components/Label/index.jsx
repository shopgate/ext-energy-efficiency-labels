import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import Link from '@shopgate/pwa-common/components/Router/components/Link';
import styles from './style';

/**
 * Energy efficiency label
 * @param {Object} props Props
 * @return {JSX}
 */
const Label = ({ location, energyInfo, show }) => {
  if (!show || !energyInfo.class || location === 'productList') {
    return null;
  }

  const index = energyInfo.class.indexOf('+');
  const text = index >= 0 ? energyInfo.class.substr(0, index) : energyInfo.class;
  const plus = index >= 0 ? energyInfo.class.substr(index) : '';

  const content = (
    <Fragment>
      {text}<sub className={styles.sup}>{plus}</sub>
    </Fragment>
  );

  if (energyInfo.link) {
    return (
      <Link href={energyInfo.link} className={`${styles.arrow} ${styles.getColor(energyInfo.class)} ext-shopgate-energy-efficiency-label`}>
        {content}
      </Link>
    );
  }

  return (
    <div className={`${styles.arrow} ${styles.getColor(energyInfo.class)} ext-shopgate-energy-efficiency-label`}>
      {content}
    </div>
  );
};

Label.propTypes = {
  energyInfo: PropTypes.shape({
    class: PropTypes.string,
    link: PropTypes.string,
  }),
  location: PropTypes.string,
  show: PropTypes.bool,
};

Label.defaultProps = {
  energyInfo: {},
  location: '',
  show: true,
};

export default Label;
