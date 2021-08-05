import React, { useState } from 'react';
import {
    View, Text, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';

import { List, Header } from '../../components';
import { Avatar } from 'react-native-elements';
import Icon from "react-native-vector-icons/FontAwesome5";

const colors = [
    { src: require('../../assests/images/common/men.jpg'), id: 9, desc: 'Get 1000/- on select styles' },
    { src: require('../../assests/images/common/kids.jpg'), id: 10, desc: 'Get Nike voucher worth 500/-' },
    { src: require('../../assests/images/common/home.jpg'), id: 11, desc: `Book your My style squad 1:1 \nstyling session today` },
    { src: require('../../assests/images/common/gadgets.jpg'), id: 12, desc: 'Get Levis voucher worth 500/-' },
    { src: require('../../assests/images/common/jwel.jpg'), id: 13, desc: 'Get 50% off (upto 200/-) on your first order' },
];

const MyntraInsider = (props) => {
    const Block = (props) => {
        return (
            <View style={props.style}>
                <Icon name='crown' size={25} color={Color.gray1} style={{ paddingLeft: 10 }} />
                <View style={{
                    alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                    width: Vw * 0.85
                }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 20 }}>
                        <Text style={{ color: Color.White, fontSize: 25, fontWeight: 'bold' }}>{props.price}</Text>
                        <Text style={{ color: Color.gray1, fontSize: 14, marginTop: 5 }}>{props.title}</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 20 }}>
                        <Text style={{ color: Color.White, fontSize: 18, fontWeight: 'bold' }}>{props.goal}</Text>
                        <Text style={{ color: Color.gray1, fontSize: 14, marginTop: 5 }}>{props.desc}</Text>
                    </View>
                </View>

            </View >
        )
    }

    const Block2 = (props) => {
        return (
            <View style={{
                height: Vh * 0.09, width: Vw * 0.9, alignItems: 'center',

                flexDirection: 'row', alignSelf: 'center', borderBottomColor: Color.gray1,
                borderBottomWidth: 1
            }}>
                <Avatar
                    rounded
                    size={50}
                    source={props.src}
                />
                <Text style={{
                    fontSize: 18, color: Color.gray1, paddingLeft: 20
                }}>{props.desc}</Text>
            </View>
        )
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{
                width: Vw, justifyContent: 'center', alignItems: 'flex-start', marginTop: 20,
                paddingLeft: 10
            }}>
                <Image source={item.src}
                    style={{ height: Vh * 0.25, width: Vw * 0.8 }} />
                <View style={{
                    backgroundColor: Color.White, width: Vw * 0.8, height: Vh * 0.09,
                    alignItems: 'center', justifyContent: 'center'
                }}>
                    <Text>{item.desc}</Text>
                </View>
            </View>

        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: Color.Black }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='MYNTRA INS...RA SAVINGS'
                />
                <ScrollView>
                    <View style={{ width: Vw, height: Vh * 0.4, alignItems: 'center', justifyContent: 'center' }}>
                        <ImageBackground source={require('../../assests/images/common/blackwomen.jpg')}
                            style={{ width: Vw, height: Vh * 0.4, }} />
                    </View>
                    <View style={{ width: Vw, height: Vh * 0.16, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: Color.yellow, paddingLeft: 10 }}>Become an INSIDER!</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: Color.gray1, marginTop: 10, paddingLeft: 10 }}>Join the Insider programme and earn Insider
                            Points with every purchase and much more. Login in now!</Text>

                    </View>
                    <View style={{ width: Vw, height: Vh * 0.22, alignItems: 'flex-start' }} >
                        <View style={{ width: Vw, height: Vh * 0.08, alignItems: 'flex-start', paddingLeft: 10 }}>
                            <Text style={{ color: Color.White, fontSize: 18, fontWeight: 'bold' }}>New Goal Criteria</Text>
                            <Block price='0'
                                title='Youve Spent'
                                goal='7000'
                                desc='Goal'
                                style={{
                                    height: Vh * 0.09, width: Vw, alignItems: 'center',
                                    borderBottomWidth: 1, borderBottomColor: Color.Gray, backgroundColor: '#282D3F',
                                    marginTop: 5, flexDirection: 'row'
                                }}
                            />
                            <Block price='0/5'
                                title='Your Orders'
                                goal='5'
                                desc='Goal'
                                style={{
                                    height: Vh * 0.09, width: Vw, alignItems: 'center',
                                    backgroundColor: '#282D3F',
                                    marginTop: 10, flexDirection: 'row'
                                }}
                            />

                        </View>

                    </View>
                    <Text style={{ fontSize: 12, color: Color.gray1, marginTop: 10, paddingLeft: 10 }}>Note: Recent purchases will only reflect in the goal once the return window is over</Text>
                    <View style={{ width: Vw, height: Vh * 0.06, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: Color.yellow, paddingLeft: 10 }}>Benifits of joining the program</Text>
                    </View>
                    <Block2
                        src={require('../../assests/images/common/men.jpg')}
                        desc={'Early Access to The Sales'} />
                    <Block2
                        src={require('../../assests/images/common/men.jpg')}
                        desc={'Insider Exclusive Rewards & Benifits'} />
                    <Block2
                        src={require('../../assests/images/common/men.jpg')}
                        desc={'Priority Customer Support'} />

                    <View style={{ width: Vw, height: Vh * 0.13, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: Color.yellow, paddingLeft: 10 }}>How does it work</Text>
                        <Text style={{ fontSize: 12, color: Color.gray1, marginTop: 5, paddingLeft: 10 }}>Earn Insider Points with every Purchase</Text>
                        <Text style={{ fontSize: 12, color: Color.gray1, paddingLeft: 10 }}>You get 10 Insider Points for every 100 spent</Text>
                    </View>
                    <View style={{ width: Vw, height: Vh * 0.4, alignItems: 'flex-start', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: Color.yellow, paddingLeft: 10 }}>Rewards</Text>
                        <Text style={{ fontSize: 12, color: Color.gray1, marginTop: 10, paddingLeft: 10 }}>Use your Insider Points to get exciting rewards</Text>
                        <List
                            horizontal={true}
                            data={colors}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ margin: -30 }}>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center', height: Vh * 0.12,

                    }}>
                        <View style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assests/images/common/MyntraLogo.png')}
                                style={{ height: 50, width: 50 }} />
                            <Text style={{ fontSize: 22, fontWeight: 'bold', color: Color.yellow }}>Insider</Text>
                        </View>
                        <Text style={{ color: Color.White }}> Fashion Advice | <Text>VIP Access | <Text>Extra Savings </Text></Text></Text>

                    </View>

                </ScrollView>
                <View style={{
                    alignItems: 'center', marginTop: 10, height: Vh * 0.12,
                    backgroundColor: '#282D3F'
                }}>
                    <TouchableOpacity style={{
                        height: Vh * 0.05, width: Vw * 0.9, backgroundColor: '#FF3E6D',
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text style={{ fontSize: 16, color: Color.White }}>LOG IN</Text>
                    </TouchableOpacity>
                    <Text style={{ color: Color.gray1, fontSize: 12, marginTop: 10 }}>By enrolling you agree to</Text>
                    <Text style={{ color: '#FF3E6D', fontSize: 14, marginTop: 10 }}>Insider Terms & Conditions</Text>
                </View>
            </View >
        </SafeAreaView>
    )
}

export default MyntraInsider;