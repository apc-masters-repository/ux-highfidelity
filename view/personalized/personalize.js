import React from 'react'

import { Row, Col, Container } from 'react-bootstrap'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class Personalize extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('CoffeeListing')
                        }}
                    >
                        <Row>
                            <h3>Customized Coffees</h3>
                        </Row>
                        <Row>
                            Customized coffees from our expert baristas!
                        </Row>
                    </TouchableOpacity>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('CoffeeCreator')
                        }}
                    >
                        <Row>
                            <h3>Personalize your own Cofee</h3>
                        </Row>
                        <Row>
                            You know what you like? Personalize your own coffee here!
                        </Row>
                    </TouchableOpacity>
                    </Col>
                </Row>
            </Container>
        )
    }
}