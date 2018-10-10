import { connect } from 'react-redux';
import { getEnergyInfoByProductId } from '../selectors';
import { showInList } from '../../config';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The current component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, { productId }) => ({
  energyInfo: getEnergyInfoByProductId(state, { productId }),
  show: showInList,
});

export default connect(mapStateToProps);
