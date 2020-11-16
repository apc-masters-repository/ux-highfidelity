import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import { styles } from '../style'
import logo from '../../assets/logo.png'; 

export default class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    render() {
        return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://www.pngkey.com/png/full/22-225874_coffee-logo-png-vector-cafe.png'}}
                style={{ width: 128,
                    height: 128}}
            />
            <Text style={styles.logo}>
            Coffefe
            </Text>
    
            <View style={styles.inputView}>
            <TextInput  
                style={styles.inputText}
                placeholder="Email..." 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({email:text})}/>
            </View>
    
            <View style={styles.inputView}>
            <TextInput  
                style={styles.inputText}
                placeholder="Password..." 
                placeholderTextColor="#003f5c"
                secureTextEntry="true"
                onChangeText={text => this.setState({password:text})}/>
            </View>

            <TouchableOpacity style={styles.loginBtn}
                onPress={() => {
                    this.props.navigation.navigate('Landing')
                }}>
            <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.signUpText}>Signup</Text>
            </TouchableOpacity>
      </View>
        );
    }
}

