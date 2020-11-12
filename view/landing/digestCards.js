import React from 'react'

import {
    View
} from 'react-native'

import { styles } from '../style'

export default class DigestCard extends React.Component {
    render() {
        return(
            <View style={styles.landing.digestCards}>
                <Text>Hello There</Text>
            </View>
        )
    }
}