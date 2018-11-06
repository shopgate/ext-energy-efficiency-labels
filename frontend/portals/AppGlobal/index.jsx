import { css } from 'glamor';

// HOTFIX for a product list mode.
css.global('[data-test-id="productList"] > [data-test-id="listItem"] .ext-shopgate-energy-efficiency-label', {
  position: 'absolute',
  bottom: '1em',
  right: '0',
});

export default () => null;