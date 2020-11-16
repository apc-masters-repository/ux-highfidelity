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

// import {
// } from 'react-native'

import bg from '../../assets/landing-bg.png'

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
                height: '100%'
            }
        }

        const cupLogo = 'https://i.ibb.co/s1HgDyz/LFP-03.png';
        const beanLogo = 'https://i.ibb.co/JxCcCFk/LFP-04.png';
        const storeLogo = 'https://i.ibb.co/LRrtM5D/LFP-05.png';

        const alertClicked = () => {
            alert('You clicked the third ListGroupItem');
        }

        const items = []

        for (var i = 0; i < 4; i++) {
            items.push(
                <tr>
                    <td>
                        <Col style={style.cardCont}>
                            <Button style={style.card}
                                onClick={() => {
                                    this.props.navigation.navigate('Checkout')
                                }}
                            >
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
                                
                            <Image src={{uri: cupLogo}} style={{width:44 , height: 44}}/>
                        </Button>
                    </Col>
                    <Col style={style.btnCol}>
                        <Button style={styles.landing.digestBtn}
                            onClick={() => {
                                this.props.navigation.navigate('Personalize')
                            }}
                        >
                            <Image src={{uri: beanLogo}} style={{width: 44, height: 44}}/>
                        </Button>
                    </Col>
                    <Col style={style.btnCol}>
                        <Button style={styles.landing.digestBtn}
                            onClick={() => {
                                this.props.navigation.navigate('ShopListing')
                            }}
                        >
                            <Image src={{uri: storeLogo}} style={{width: 44, height: 44}}/>
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
