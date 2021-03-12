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

const mapping2021 = {
  A: '#00973F',
  B: '#53AF31',
  C: '#C6D300',
  D: '#FEEE00',
  E: '#FAB900',
  F: '#EC680B',
  G: '#E20815',
};

/**
 * Returns the hex color code for a given energy efficiency class
 * @param {string} label Energy class
 * @return {string|null}
 */
export const getColorForLabel = label => mapping[label] || null;

/**
 * Returns the hex color code for a given energy efficiency class version March-2021
 * @param {string} label Energy class
 * @return {string|null}
 */
export const getColorForLabel2021 = label => mapping2021[label] || null;
