import React, {Component} from 'react';
import {Scene, Reducer, Router, Actions as routes} from 'react-native-router-flux';
import { connect } from 'react-redux';

import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import ProfilePage from './containers/ProfilePage';
import Loader from './common/Loader';

const reducerCreate = params => (state, action) => Reducer(params)(state, action);

const Routes = ({loading, needSignIn}) => (
    loading ?
        <Loader/> :
        <Router createReducer={reducerCreate}>
            <Scene key="loginPage" initial={needSignIn} component={LoginPage} hideNavBar={true} title="Login" type="reset"/>

            <Scene key="homePage" initial={!needSignIn} component={HomePage} title="Home" type="replace"/>
            <Scene key="profilePage" component={ProfilePage} title="Profile"/>
        </Router>
);

function mapStateToProps(state) {
    return {
        loading: !state.storage.storageLoaded,
        needSignIn: !state.auth.token
    }
}

export default connect(mapStateToProps)(Routes);