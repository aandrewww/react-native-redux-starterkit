import React, {Component, PropTypes} from 'react';
import {StyleSheet, View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Button from '../common/Button';
import Loader from '../common/Loader';
import styles from '../common/commonStyles';

class Login extends Component {
    static propTypes = {
        errorStatus: PropTypes.string.isRequired,
        login: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.state = {username: ''};
    }

    render() {
        const {errorStatus, loading} = this.props;
        
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/bg.jpg')} style={styles.bg}>
                    <View style={styles.content}>
                        <TextInput
                            style={styles.input}
                            value={this.state.username}
                            autoCorrect={false}
                            placeholder="username"
                            maxLength={140}
                            onSubmitEditing={() => this.onSubmit()}
                            onChangeText={(username) => this.setState({username: username})}
                        />

                        <Button onPress={() => this.onSubmit()}>
                            Login
                        </Button>

                        {errorStatus ? <Text style={styles.errorText}>{errorStatus}</Text> : undefined}

                        {loading ? <Loader/> : undefined}
                    </View>
                </Image>
            </View>
        );
    }

    onSubmit() {
        this.props.login(this.state.username);
        this.setState({username: ''});
    }
}

export default Login;