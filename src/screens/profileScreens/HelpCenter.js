import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';

import { Header } from '../../components';

import In from "react-native-vector-icons/AntDesign";


const Block = ({ title }) => {
    return (
        <View style={{
            width: Vw, height: Vh * 0.06, borderBottomWidth: 1, borderBottomColor: Color.Gray,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

        }}>
            <Text style={{ color: Color.Gray, paddingLeft: 15, fontSize: 12 }}>{title}</Text>
            <In name="right" size={15} style={{ paddingRight: 15 }} />
        </View>
    )
}

const HelpCenter = (props) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: Color.gray1 }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='HELP CENTER'
                    icon1='handbag' />
                <ScrollView>
                    <View style={{
                        width: Vw, height: Vh * 0.2, backgroundColor: Color.White,
                        marginTop: 1, flexDirection: 'row', alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 15 }}>
                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Help Center</Text>
                            <Text style={{ fontSize: 14, color: Color.Gray, marginTop: 20 }}>Please get in touch and we will be</Text>
                            <Text style={{ fontSize: 14, color: Color.Gray, marginTop: 5 }}>happy to help you</Text>
                        </View>
                        <Image source={require('../../assests/images/common/order.png')}
                            style={{ height: Vh * 0.15, width: Vw * 0.3, marginRight: 10 }}
                            resizeMode='stretch' />

                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.12, backgroundColor: Color.White,
                        marginTop: 10, alignItems: 'center',

                    }}>
                        <View style={{
                            width: Vw, height: Vh * 0.05, borderBottomWidth: 1, borderBottomColor: Color.Gray,
                            alignItems: 'flex-start', justifyContent: 'center'
                        }}>
                            <Text style={{ fontWeight: 'bold', paddingLeft: 15, fontSize: 12 }}>NEED HELP WITH RECENT PURCHASES?</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center', height: Vh * 0.07 }}>
                            <Text style={{ color: Color.Gray, fontSize: 12 }}>There are no orders to show</Text>
                        </View>
                    </View>
                    <View style={{
                        width: Vw, backgroundColor: Color.White,
                        alignItems: 'center', marginTop: 15
                    }}>
                        <View style={{
                            width: Vw, height: Vh * 0.05, borderBottomWidth: 1, borderBottomColor: Color.Gray,
                            alignItems: 'flex-start', justifyContent: 'center'
                        }}>
                            <Text style={{ fontWeight: 'bold', paddingLeft: 15, fontSize: 12 }}>MORE QUERIES RELATED TO YOUR EXPERIENCE</Text>
                        </View>
                        <Block title='Payment/Refund' />
                        <Block title='Offers, Discounts, Coupons' />
                        <Block title='Manage Your Account' />
                        <Block title='Other' />


                    </View>
                    <View style={{
                        width: Vw, height: '20%', backgroundColor: Color.White,
                        marginTop: 10, alignItems: 'center', justifyContent: 'center'

                    }}>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center', width: Vw, }}>

                            <Text style={{ fontWeight: 'bold', paddingLeft: 15, fontSize: 18 }}>Recent Quries</Text>
                            <Text style={{ color: Color.Gray, fontSize: 12, paddingLeft: 15, marginTop: 10 }}>There are no recent quries raised in Last</Text>
                            <Text style={{ color: Color.Gray, fontSize: 12, paddingLeft: 15, marginTop: 5 }}>30 Days.</Text>
                        </View>


                        <TouchableOpacity style={{
                            width: Vw * 0.9, height: Vh * 0.05, borderColor: Color.Gray, borderWidth: 1,
                            alignItems: 'center', justifyContent: 'center', marginTop: 15
                        }}
                            onPress={() => props.navigation.navigate('BottomTab')}>
                            <Text style={{ fontWeight: 'bold' }}>
                                START SHOPPING
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, marginTop: 10 }}>
                        <Text style={{ color: Color.Gray, fontSize: 11 }}>Want to reach us the old way?</Text>
                        <Text style={{ color: 'blue', fontSize: 11, marginTop: 10 }}>POSTAL ADDRESS</Text>
                    </View>
                </ScrollView>
                <View style={{ flex: 1, backgroundColor: Color.White }}>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default HelpCenter;