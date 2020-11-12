import React from 'react'

import {
    Table,
    Container,
    Col,
    Row,
    Button,
    Form
} from 'react-bootstrap'

export default class Payment extends React.Component {
    render() {
        const style = { 
            btn: {
                width: '100%', height: '100%', borderRadius:25 
            },
            btnCol: {
                width: 100, height: 100, margin: 5 
            },
            cardCont: {
                padding: 0, height: 80, marginBottom: 5
            },
            card: {
                borderRadius:10,
                width: '100%',
                height: '100%'
            }
        }

        const items = []

        for (var i = 0; i < 3; i++) {
            items.push(
                
                <Row style={style.cardCont}>
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
                        </Row>
                        
            )
        }

        return (
            <Container fluid style={{ padding: 20 }}>
                <Row>
                    <h3>Payment Confirmation</h3>
                </Row>
                <Col>
                    {items}
                </Col>
                
                    
                <Row style={{alignSelf: "flex-end"}}>
                    <Button style={{width: '100%', borderRadius: 25}}
                        onClick={() => {
                            this.props.navigation.navigate('Landing')
                        }}>
                        Proceed
                    </Button>
                </Row>
            </Container>
        )
    }
}