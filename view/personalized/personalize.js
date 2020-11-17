import React from 'react'

import { Row, Col, Container, Image} from 'react-bootstrap'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


import bg from '../../assets/personalized-bg-04.png'


export default class Personalize extends React.Component {
    render() {
        return (
            <Container>
                <Row style={{height: '30%', width: '100%'}}>
                    <Image src={bg} style={{ width: '100%', height: 'auto' }} fluid/>
                </Row>
                <Row>
                    <Col>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('CoffeeListing')
                        }}>
                        <Row style={{color: 'white'}}>
                            <h3>Customized Coffees</h3>
                        </Row>
                        <Row style={{color: 'white'}}>
                            Customized coffees from our expert baristas!
                        </Row>
                    </TouchableOpacity>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('CoffeeCreator')
                            }} >
                            <Row style={{color: 'white'}}>
                                <h3 color='white'>Personalize your own Cofee</h3>
                            </Row>
                            <Row style={{color: 'white'}}>
                                You know what you like? Personalize your own coffee here!
                            </Row>
                        </TouchableOpacity>
                    </Col>
                </Row>
            </Container>
        )
    }
}