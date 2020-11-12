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

export default class Checkout extends React.Component {
    

    render() {
        const style = { 
            btn: {
                width: '100%', height: '100%', borderRadius:25 
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

        const alertClicked = () => {
            alert('You clicked the third ListGroupItem');
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
                <Row><Col><h3>Welcome Kyle!</h3></Col></Row>
                <Row><Col>Any cravings for coffee?</Col></Row>

                <Row style={{height: '30%'}}>
                    <Col style={{alignSelf: "flex-end"}}>
                        <h4 style={{textAlign: 'end', margin: 10}}>
                            Explore {'>'}
                        </h4>
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
                        <Button style={style.btn}
                            onClick={() => {
                                this.props.navigation.navigate('ShopListing')
                            }}
                        >Shop</Button>
                    </Col>
                </Row>
                
                <Row >
                    <Table responsive >
                    <tbody>
                        {items}
                    </tbody>
                    </Table>
                </Row>
            </Container>
        )
    }
}
