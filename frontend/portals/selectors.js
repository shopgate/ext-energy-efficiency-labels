import { createSelector } from 'reselect';
import {
  getProductPropertiesUnfiltered,
  getProduct,
} from '@shopgate/pwa-common-commerce/product/selectors/product';
import { getCartItemById } from '@shopgate/pwa-common-commerce/cart/selectors';
import { ENERGY_CLASS_PROPERTY, ENERGY_LINK_PROPERTY } from '../constants';

/**
 * Returns the energy info from given product properties
 * @param {Array} properties Product properties
 * @return {Object}
 */
const getEnergyInfo = (properties = []) => {
  const energyInfo = {};

  if (!properties) {
    return energyInfo;
  }

  properties.forEach((prop) => {
    if (prop.label === ENERGY_CLASS_PROPERTY) {
      energyInfo.class = prop.value.trim();
    }

    if (prop.label === ENERGY_LINK_PROPERTY) {
      energyInfo.link = prop.value.trim();
    }
  });

  return energyInfo;
};

export const getEnergyInfoByProductId = createSelector(
  getProduct,
  (product) => {
    const energyInfo = {};
    if (!product) {
      return energyInfo;
    }

    return getEnergyInfo(product.additionalProperties);
  }
);

export const getEnergyInfoByCartItemId = createSelector(
  getCartItemById,
  (carItem) => {
    const energyInfo = {};
    const { product } = carItem || {};

    if (!product) {
      return energyInfo;
    }

    return getEnergyInfo(product.additionalProperties);
  }
);

export const getCurrentEnergyInfo = createSelector(
  getProductPropertiesUnfiltered,
  properties => getEnergyInfo(properties)
);

