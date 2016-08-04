import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Login from '../components/Login';
import * as actions from '../actions/auth';

function mapStateToProps(state) {
    return {
        loading: state.auth.loading,
        errorStatus: state.auth.errorStatus
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({login: actions.login}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);