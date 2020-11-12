import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native'

import { styles } from '../style'

export default class Landing extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <View style={styles.landing.header}>
                <Text style={styles.landing.headerTitle1}>
                    Welcome Kyle!
                </Text>
                <Text style={styles.landing.headerTitle2}>
                    What would you like to do?
                </Text>
            </View>
            <View style={styles.landing.digest}>
                <TouchableOpacity 
                    style={styles.landing.digestBtn}
                    onPress={() => {
                        this.props.navigation.navigate('Login')
                    }}
                    >
                    <Text style={styles.loginText}>Sign Out</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.landing.digestBtn}
                    onPress={() => {
                        this.props.navigation.navigate('Login')
                    }}
                    >
                    <Text style={styles.loginText}>Sign Out</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.landing.digestBtn}
                    onPress={() => {
                        this.props.navigation.navigate('Login')
                    }}
                    >
                    <Text style={styles.loginText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.landing.footer.container}>
                <ScrollView
                    contentContainerStyle={{flexGrow: 1, justifyContent : 'center'}}
                    showsVerticalScrollIndicator={false}>
                        <View style={styles.landing.digestCards}>
                            <Text>Hello There</Text>
                        </View>
                </ScrollView>
            </View>
        </View>
        )}
}
