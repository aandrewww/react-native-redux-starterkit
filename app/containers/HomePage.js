import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {Actions as routes} from 'react-native-router-flux';
import * as actions from '../actions/counter';

function mapStateToProps(state) {
    return {
        counter: state.counter,
        openProfile: routes.profilePage
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);