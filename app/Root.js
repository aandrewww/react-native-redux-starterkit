import React, {Component} from 'react'; // delete line
import {View, Text} from 'react-native'; // delete line
import { Provider } from 'react-redux';
import store from './store';

import Routes from './Routes';

const Root = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

export default Root;