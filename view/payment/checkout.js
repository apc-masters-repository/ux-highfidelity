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

import coffee1 from '../../assets/coffee-1.jpg'
import coffee2 from '../../assets/coffee-2.jpg'
import coffee3 from '../../assets/coffee-3.jpg'
import coffee4 from '../../assets/coffee-4.jpg'
import coffee5 from '../../assets/coffee-5.jpg'
import coffee6 from '../../assets/coffee-6.jpg'
import coffee7 from '../../assets/coffee-7.jpg'
import coffee8 from '../../assets/coffee-8.jpg'
import coffee9 from '../../assets/coffee-9.jpg'

import Coffee from '../../model/coffee'

export default class Checkout extends React.Component {
    render() {
        const style = { 
            btn: {
                width: '100%', height: '100%', borderRadius:25, backgroundColor:"#7C561E",
                borderColor:"#7C561E",
            },
            btnCol: {
                width: 100, height: 100, margin: 5 
            },
            cardCont: {
                padding: 0, height: 80, marginBottom: 5, backgroundColor:"#7C561E",
                borderColor:"#7C561E",
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
        
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee1, 'P150.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee2, 'P250.00'))
        // coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee3, 'P70.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee4, 'P50.00'))
        // coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee5, 'P210.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee6, 'P120.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee7, 'P170.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee8, 'P190.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee9, 'P130.00'))

        for (var i = 0; i < 2; i++) {
            let currCoffee = coffees[i];
            items.push(
                <tr>
                    <td>
                        <Col style={style.cardCont}>
                            <Button style={style.card}
                                onClick={() => {
                                    this.props.navigation.navigate('Checkout')
                                }}>
                                <Col>
                                    <Row>
                                        <Col style={{height: 100}}>
                                            <Image src={currCoffee.img} style={{width: 64, height: 64}}/>
                                        </Col>
                                        <Col>
                                            <Row>
                                                <h5>{currCoffee.name}</h5>
                                            </Row>
                                            <Row>
                                                {currCoffee.desc}
                                            </Row>
                                        </Col>
                                        <Col>
                                            {currCoffee.price}
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
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Row >
                            VAT 20%
                        </Row>

                        <Row>
                            Service Charge 12%
                        </Row>

                        <Row >
                            Total of 100$
                        </Row>
                    </Col>
                </Row>
                    
                <Row style={{
  justifyContent: 'flex-end',
  marginBottom: 36}}>
                    <Button style={{width: '100%', borderRadius: 25, backgroundColor:"#7C561E",
        borderColor:"#7C561E",}}
                        onClick={() => {
                            this.props.navigation.navigate('Payment')
                        }}
                    >
                        Select Payment Methods
                    </Button>
                </Row>
            </Container>
        )
    }
}