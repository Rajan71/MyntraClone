import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';
import { Header } from '../../components';




const MyntraMove = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: Color.White, flex: 1 }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft' />

                <View style={{
                    justifyContent: 'center', flexDirection: 'row', alignItems: 'center',
                    borderTopWidth: 1, borderTopColor: Color.Gray
                }}>
                    <Image source={require('../../assests/images/common/MyntraLogo.png')}
                        style={{ height: 25, width: 25, marginTop: 10 }} />
                    <Text style={{
                        fontSize: 14, fontWeight: 'bold', color: Color.Black,
                        paddingLeft: 3, marginTop: 10
                    }}>Myntra</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{
                        fontSize: 25, fontWeight: 'bold', color: Color.yellow,
                    }}>Move</Text>
                </View>
                <View style={{ height: Vh * 0.4, width: Vw, alignItems: 'center', marginTop: 50 }}>
                    <Text>Now's the time to</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: Color.Black, marginTop: 10 }}>Walk more, Earn more</Text>
                    <Image source={require('../../assests/images/common/running.jpg')}
                        style={{ height: Vh * 0.34, width: Vw, }}
                        resizeMode='stretch' />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{
                        fontSize: 14, fontWeight: 'bold', color: Color.Black
                    }}>Walk and Earn Stars, Goodies from Brands</Text>
                    <Text style={{
                        fontSize: 14, fontWeight: 'bold', color: Color.Black, marginTop: 5
                    }}>you love and Exclusive Perks</Text>
                </View>
                <View style={{
                    alignItems: 'center', width: Vw,
                    height: Vh * 0.12, position: 'absolute', bottom: 0
                }}>
                    <TouchableOpacity style={{
                        alignItems: 'center', justifyContent: 'center',
                        height: Vh * 0.05, width: Vw * 0.9, backgroundColor: '#FF3E6D',
                    }}>
                        <Text style={{ fontSize: 16, color: Color.White }}>JOIN NOW</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 14, color: Color.Black, marginTop: 5 }}>By joining you agree to the <Text style={{ color: '#FF3E6D' }}>
                        Terms and Conditions</Text></Text>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default MyntraMove;