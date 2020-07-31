import React from 'react';
import {
  StyleSheet,
  View,
  Text,Image,LayoutAnimation,StatusBar
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

export default class LoginComponent extends React.Component {
    static navigationOption = {
        header: null
    } 

    state = {
        email: "",
        password: "",
        errorMessage: null
    }


    handleLogin = () => {
        const {email, password} = this.state;

        auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => this.setState({errorMessage: error.message}));
    }

    render(){
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
            <StatusBar barStyle="light-content"></StatusBar>
                <Text style={styles.greeting}>{''}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <view>
                        <text>17001528 - S.L.M Samarapura</text>
                    </view>
                    <View>
                        <Text style={styles.inputTitle}>Email</Text>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        ></TextInput>
                    </View>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput 
                        style={styles.input} 
                        secureTextEntry autoCapitalize="none"
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                        ></TextInput>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity
                 style={{ alignSelf: "center", marginTop: 32}}
                 onPress={() => this.props.navigation.navigate("Register")}>
                    <Text style={{color: "#414959", fontSize: 13}}>
                        Go to SocialApp? <Text style={{ fontWeight: "500",color: "#E9446A"}}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
        
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        fontSize: 15,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#483D8B",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});