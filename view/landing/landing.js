import React from 'react';

import {
    Container,
    Row,
    Col,
    Button,
    ListGroup,
    Table,
    Image
} from 'react-bootstrap'

import Coffee from '../../model/coffee'

// import {
// } from 'react-native'

import bg from '../../assets/landing-bg.png'

import coffee1 from '../../assets/coffee-1.jpg'
import coffee2 from '../../assets/coffee-2.jpg'
import coffee3 from '../../assets/coffee-3.jpg'
import coffee4 from '../../assets/coffee-4.jpg'
import coffee5 from '../../assets/coffee-5.jpg'
import coffee6 from '../../assets/coffee-6.jpg'
import coffee7 from '../../assets/coffee-7.jpg'
import coffee8 from '../../assets/coffee-8.jpg'
import coffee9 from '../../assets/coffee-9.jpg'

import btn1 from '../../assets/LFP-03.png'
import btn2 from '../../assets/LFP-04.png'
import btn3 from '../../assets/LFP-05.png'

import { styles } from '../style'

export default class Landing extends React.Component {
    

    render() {
        const style = { 
            btn: {
                width: '100%', height: '100%', borderRadius:25 
            },
            btnCol: {
                width: 100, height: 100
            },
            cardCont: {
                padding: 0, height: 100
            },
            card: {
                borderRadius:10,
                width: '100%',
                height: '100%',
                shadowColor: '#000',
                shadowOffset: { width: 2, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 2,
                elevation: 5,
                marginLeft: 5,
                marginRight: 5,
                marginTop: 10,
                backgroundColor: "#7C561E",
                borderColor: "#7C561E"
            }
        }

        let coffees = []

        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee1, 'P150.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee2, 'P250.00'))
        // coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee3, 'P70.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee4, 'P50.00'))
        // coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee5, 'P210.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee6, 'P120.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee7, 'P170.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee8, 'P190.00'))
        coffees.push(new Coffee('Espresso', 'Heavily pressed coffee and super duper strong', coffee9, 'P130.00'))

        const alertClicked = () => {
            alert('You clicked the third ListGroupItem');
        }

        const items = []

        for (var i = 0; i < 4; i++) {
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
            <Container fluid style={{ padding: 20, overflow: 'scroll'}}>
                <Row><Col><h3>Welcome Kyle!</h3></Col></Row>
                <Row><Col>Any cravings for coffee?</Col></Row>

                <Row style={{height: '30%'}}>
                    <Image src={bg} style={{ width: '100%', height: 'auto' }} fluid/>
                </Row>
                <Row>
                    {/* <Image src={bg} style={{ width: '100%', height: 'auto' }} fluid/> */}
                    <Col style={{alignSelf: "flex-end"}}>
                        <h4 style={{textAlign: 'end', margin: 10}}>
                            Fresh Coffee on Demand! {/*'>'*/}
                        </h4>
                    </Col>
                </Row>

                <Row noGutters >
                    <Col style={style.btnCol}>
                        <Button style={styles.landing.digestBtn}
                            onClick={() => {
                                this.props.navigation.navigate('CoffeeListing')
                            }}>
                                
                            <Image src={btn1} style={{width:44 , height: 44}}/>
                        </Button>
                    </Col>
                    <Col style={style.btnCol}>
                        <Button style={styles.landing.digestBtn}
                            onClick={() => {
                                this.props.navigation.navigate('Personalize')
                            }}
                        >
                            <Image src={btn2} style={{width: 44, height: 44}}/>
                        </Button>
                    </Col>
                    <Col style={style.btnCol}>
                        <Button style={styles.landing.digestBtn}
                            onClick={() => {
                                this.props.navigation.navigate('ShopListing')
                            }}
                        >
                            <Image src={btn3} style={{width: 44, height: 44}}/>
                        </Button>
                    </Col>
                </Row>
                
                <Row >
                    <Table responsive >
                            
                        {items}
                    
                    </Table>
                </Row>
            </Container>
        )
    }
}
