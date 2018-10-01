import { css } from 'glamor';
import getColorForClass from '../../helpers/colorMapping';

const arrow = css({
  position: 'relative',
  width: 34,
  height: 18,
  lineHeight: '18px',
  padding: '0 1px',
  margin: '6px 0 0 auto',
  fontSize: 16,
  fontWeight: 600,
  color: '#FFF',
  textAlign: 'center',
  ':before': {
    content: ' ',
    position: 'absolute',
    display: 'block',
    borderTop: '6.5px solid transparent',
    borderBottom: '6.5px solid transparent',
    borderRight: 'solid currentColor',
    borderWidth: '9px',
    borderLeft: 'none',
    left: 'auto',
    right: '100%',
  },
});

const sup = css({
  top: '-.25em',
  fontSize: '75%',
  lineHeight: 0,
  position: 'relative',
  verticalAlign: 'baseline',
});

/**
 * Returns the color styling for the given energy class
 * @param {string} energyClass Energy class
 * @return {string}
 */
const getColor = (energyClass) => {
  const color = getColorForClass(energyClass);

  return css({
    backgroundColor: color,
    ':before': {
      borderRightColor: color,
    },
  }).toString();
};

export default {
  arrow,
  getColor,
  sup,
};
