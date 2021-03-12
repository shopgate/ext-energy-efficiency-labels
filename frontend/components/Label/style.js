import { css } from 'glamor';
import { getColorForLabel, getColorForLabel2021 } from '../../helpers/colorMapping';

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
const arrow2021 = css({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  width: 34,
  height: 36,
  lineHeight: '36px',
  padding: '0 1px',
  margin: '12px 0 0 auto',
  fontSize: '1.25rem',
  fontWeight: 600,
  color: '#FFF',
  textAlign: 'center',
  ':before': {
    content: ' ',
    position: 'absolute',
    display: 'block',
    borderTop: '13px solid transparent',
    borderBottom: '13px solid transparent',
    borderRight: 'solid',
    borderWidth: '18px',
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

const sup2021 = color => css({
  textOrientation: 'upright',
  writingMode: 'tb',
  fontSize: 10,
  background: '#f9f9f9',
  color: 'black',
  width: 15,
  lineHeight: '15px',
  marginRight: -1,
  border: `1px solid ${color}`,
  borderLeft: 'none',
});

const colorCss = color => css({
  backgroundColor: color,
  ':before': {
    borderRightColor: `${color} !important`,
  },
}).toString();

/**
 * Returns the color styling for the given energy class
 * @param {string} energyClass Energy class
 * @return {string}
 */
const getColor = energyClass => colorCss(getColorForLabel(energyClass));

/**
 * Returns the color styling for the given energy class (vMarch 2021)
 * @param {string} energyClass Energy class
 * @return {string}
 */
const getColor2021 = energyClass => colorCss(getColorForLabel2021(energyClass));

export default {
  arrow,
  arrow2021,
  getColor,
  getColor2021,
  sup,
  sup2021,
};
