import { connect } from 'react-redux';
import { getEnergyInfoByCartItemId } from '../selectors';
import { showInCart } from '../../config';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The current component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, { cartItemId }) => ({
  energyInfo: getEnergyInfoByCartItemId(state, { cartItemId }),
  show: showInCart,
});

export default connect(mapStateToProps);
