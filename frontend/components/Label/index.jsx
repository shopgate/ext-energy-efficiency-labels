import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from '@shopgate/pwa-common/components/Link';
import styles from './style';
import { getColorForLabel2021 } from '../../helpers/colorMapping';
import { energyProductinfoLinkLabel2021 } from '../../config';

/**
 * Energy efficiency label
 * @param {Object} props Props
 * @return {JSX}
 */
const Label = ({ location, energyInfo, show }) => {
  if (!show || location === 'productList') {
    return null;
  }

  const labels = [];

  /*
  * New energy classes since March 2021
  * @see https://www.deutschland-machts-effizient.de/KAENEF/Redaktion/DE/Standardartikel/Dossier/A-label-uebersicht.html
  */
  if (energyInfo.class2021) {
    const text = energyInfo.class2021;

    const content = (
      <Fragment>
        <div>{text}</div>
        <div className={styles.sup2021(getColorForLabel2021(energyInfo.class2021))}>A&uarr;G</div>
      </Fragment>
    );

    if (energyInfo.link2021) {
      labels.push(
        <Link
          href={energyInfo.link2021}
          className={`${styles.arrow2021} ${styles.getColor2021(energyInfo.class2021)} ext-shopgate-energy-efficiency-label`}
        >
          {content}
        </Link>
      );
    } else {
      labels.push(
        <div
          className={`${styles.arrow2021} ${styles.getColor2021(energyInfo.class2021)} ext-shopgate-energy-efficiency-label`}
        >
          {content}
        </div>
      );
    }
  }

  if (energyInfo.linkProductInfo2021 && energyProductinfoLinkLabel2021) {
    labels.push(
      <Link
        href={energyInfo.linkProductInfo2021}
        className={styles.productInfoLink}
      >
        {energyProductinfoLinkLabel2021}
      </Link>
    );
  }

  /*
   * Old energy classes before March 2021
   * @see https://www.deutschland-machts-effizient.de/KAENEF/Redaktion/DE/Standardartikel/Dossier/A-label-uebersicht.html
   */
  if (energyInfo.class) {
    const index = energyInfo.class.indexOf('+');
    const text = index >= 0 ? energyInfo.class.substr(0, index) : energyInfo.class;
    const plus = index >= 0 ? energyInfo.class.substr(index) : '';

    const content = (
      <Fragment>
        {text}
        <sub className={styles.sup}>{plus}</sub>
      </Fragment>
    );

    if (energyInfo.link) {
      labels.push(
        <Link
          href={energyInfo.link}
          className={`${styles.arrow} ${styles.getColor(energyInfo.class)} ext-shopgate-energy-efficiency-label`}
        >
          {content}
        </Link>
      );
    } else {
      labels.push(
        <div
          className={`${styles.arrow} ${styles.getColor(energyInfo.class)} ext-shopgate-energy-efficiency-label`}
        >
          {content}
        </div>
      );
    }
  }

  return labels;
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
