import { connect } from 'react-redux';
import { getCurrentEnergyInfo } from '../selectors';
import { showOnPdp } from '../../config';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => ({
  energyInfo: getCurrentEnergyInfo(state, props),
  show: showOnPdp,
});

export default connect(mapStateToProps);
