import { connect } from 'react-redux';
import { getEnergyInfoByProductId } from '../selectors';
import { showInList } from '../../config';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, { product }) => ({
  energyInfo: getEnergyInfoByProductId(state, { productId: product.id }),
  show: showInList,
});

export default connect(mapStateToProps);
