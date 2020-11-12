import React from 'react'

import {
    Table,
    Container,
    Col,
    Row,
    Button,
    Form
} from 'react-bootstrap'

export default class ShopListing extends React.Component {
    render() {
        const style = { 
            btn: {
                width: '100%', height: '100%', borderRadius:25 
            },
            btnCol: {
                width: 100, height: 100, margin: 5 
            },
            cardCont: {
                padding: 0, height: 150
            },
            card: {
                borderRadius:10,
                width: '100%',
                height: '100%'
            }
        }

        const items = []

        for (var i = 0; i < 6; i++) {
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
            <Container style={{overflow: 'scroll'}}>
                <Table responsive >
                <thead>
                    <tr>
                        <td>
                            <Form.Control type="email" placeholder="Search..." style={{ borderRadius:25 }}/>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
                </Table>
            </Container>
        )
    }
}