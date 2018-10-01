const mapping = {
  'A+++': '#009549',
  'A++': '#008342',
  'A+': '#439e44',
  A: '#c4c539',
  B: '#c4c539',
  C: '#ffb737',
  D: '#f36226',
  E: '#e9002a',
};

/**
 * Returns the hex color code for a given energy efficiency class
 * @param {string} label Energy class
 * @return {string|null}
 */
const getColorForLabel = label => mapping[label] || null;

export default getColorForLabel;
