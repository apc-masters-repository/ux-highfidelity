import React from 'react'

import {
    Table,
    Container,
    Col,
    Row,
    Button,
    Form,
    Image
} from 'react-bootstrap'

import coffee1 from '../../assets/visa.png'
import coffee2 from '../../assets/mc.png'

import Coffee from '../../model/coffee'

export default class Checkout extends React.Component {
    render() {
        const style = { 
            btn: {
                width: '100%', height: '100%', borderRadius:25, backgroundColor:"#7C561E",
                borderColor:"#7C561E",
            },
            btnCol: {
                width: '100%', height: 100, margin: 5 
            },
            cardCont: {
                padding: 0, height: 80, marginBottom: 5, backgroundColor:"#7C561E",
                borderColor:"#7C561E"
            },
            card: {
                borderRadius:10,
                width: '100%',
                height: '100%',
                backgroundColor:"#7C561E",
                borderColor:"#7C561E"
            }
        }

        const items = []
        const coffees = []
        
        coffees.push(new Coffee('************1242', 'John Doe', coffee1, ''))
        coffees.push(new Coffee('************8741', 'J. Doe', coffee2, ''))
        
        for (var i = 0; i < 2; i++) {
            let currCoffee = coffees[i];
            items.push(
                <tr style={{width: '100%'}}>
                    <td>
                        <Col style={style.cardCont}>
                            <Button style={style.card}>
                                <Col>
                                    <Row >
                                        <Col>
                                            <Image src={currCoffee.img} style={{width: 100, height: 64}}/>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <h5>{currCoffee.name}</h5>
                                            </Row>
                                            <Row>
                                                {currCoffee.desc}
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Button>
                        </Col>
                    </td>
                </tr>
            )
        }

        return (
            <Container fluid style={{ padding: 20 }}>
                <Row>
                    <h3>Checkout</h3>
                </Row>
                <Row>

                    <Col>
                        {items}
                    </Col>
                </Row>
                    
                <Row style={{
  justifyContent: 'flex-end',
  marginBottom: 36}}>
                    <Button style={{width: '100%', borderRadius: 25, backgroundColor:"#7C561E",
        borderColor:"#7C561E",}}
                        onClick={() => {
                            this.props.navigation.navigate('Landing')
                        }}
                    >
                        Proceed
                    </Button>
                </Row>
            </Container>
        )
    }
}