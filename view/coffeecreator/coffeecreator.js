import React from 'react';

import {
    Container,
    Row,
    Col,
    Button,
    ListGroup,
    Table
} from 'react-bootstrap'

import { styles } from '../style'

export default class CoffeeCreator extends React.Component {
    

    render() {
        const style = { 
            btn: {
                width: '100%', height: '100%', borderRadius:25 
            },

            blendBtn: {
                borderRadius:10,
                width: '100%'
            },
            btnCol: {
                width: 100, height: 100, margin: 5 
            },
            cardCont: {
                padding: 0, height: 100
            },
            card: {
                borderRadius:10,
                width: '100%',
                height: '100%'
            }
        }

        

        const items = []

        for (var i = 0; i < 4; i++) {
            items.push(
                <tr>
                    <td>
                        <Col style={style.cardCont}>
                            <Button style={style.card}>
                                <Row>
                                    <Col style={{margin: 10}}>
                                        <Row>
                                            <h5>This is a sample Title</h5>
                                        </Row>
                                        <Row>
                                            This is a sample Description
                                        </Row>
                                    </Col>
                                </Row>
                            </Button>
                        </Col>
                    </td>
                </tr>
            )
        }
          
        return (
            <Container fluid style={{ padding: 20, overflow: 'scroll'}}>
                <Row><Col><h3>Unnamed Blend</h3></Col></Row>
                
                <Row>
                    <Col>
                        <Row>
                            <h4>Coffee Base</h4>
                        </Row>
                        <Row>
                        <Col style={style.cardCont}>
                            <Button style={style.card}>
                                <Row>
                                    <Col style={{margin: 10}}>
                                        <Row>
                                            <h5>This is a sample Title</h5>
                                        </Row>
                                        <Row>
                                            This is a sample Description
                                        </Row>
                                    </Col>
                                </Row>
                            </Button>
                        </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Row>
                            <h4>Blends</h4>
                        </Row>
                        <Row>
                        <Col style={style.cardCont}>
                            <Button style={style.blendBtn}>
                                <Row>
                                    <Col style={{margin: 10}}>
                                        <Row>
                                            <h5>+</h5>
                                        </Row>
                                    </Col>
                                </Row>
                            </Button>
                        </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Row>
                            <h4>Grind</h4>
                        </Row>
                        <Row noGutters >
                            <Col style={style.btnCol}>
                                <Button style={style.btn}>Coffee</Button>
                            </Col>
                            <Col style={style.btnCol}>
                                <Button style={style.btn}>Personalized Coffee</Button>
                            </Col>
                            <Col style={style.btnCol}>
                                <Button style={style.btn}>Shop</Button>
                            </Col>
                        </Row>
                        <Row noGutters >
                            <Col style={style.btnCol}>
                                <Button style={style.btn}>Coffee</Button>
                            </Col>
                            <Col style={style.btnCol}>
                                <Button style={style.btn}>Personalized Coffee</Button>
                            </Col>
                            <Col style={style.btnCol}>
                                <Button style={style.btn}>Shop</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
                <Row style={{alignSelf: "flex-end"}}>
                    <Button style={{width: '100%', borderRadius: 25}}
                        onClick={() => {
                            this.props.navigation.navigate('Checkout')
                        }}
                    >
                        Checkout
                    </Button>
                </Row>
            </Container>
        )
    }
}
