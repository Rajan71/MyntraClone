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


const ReferEarn = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: Color.White, flex: 1 }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='REFER & EARN'
                    icon1='handbag' />
                <View style={{
                    alignItems: 'center', borderTopColor: Color.gray1,
                    height: Vh * 0.5, width: Vw, borderTopWidth: 1
                }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: Color.Black, }}>
                        Invite your friends to shop on Myntra
                    </Text>
                    <ImageBackground source={require('../../assests/images/common/men.jpg')}
                        style={{
                            height: Vh * 0.4, width: Vw * 0.85, alignItems: 'center', justifyContent: 'center',
                            marginTop: 10
                        }}>
                        <Text style={{ color: Color.White, fontSize: 15 }}>Refer a friend & get</Text>
                        <Text style={{ color: Color.White, fontSize: 24, fontWeight: 'bold' }}>200 Myncash Odd</Text>
                        <Text style={{ color: Color.White, fontSize: 15 }}>on your next purchase!</Text>
                        <Text style={{ color: Color.White, position: 'absolute', bottom: 20 }}>1 Myncash=1 off on your next order</Text>
                    </ImageBackground>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ color: Color.Black, fontSize: 14 }}>When your friend sign up using the referral code.</Text>
                    <Text style={{ color: Color.Black, fontSize: 14, marginTop: 5 }}>get <Text style={{ fontWeight: 'bold' }}>100. </Text>
                        <Text>You get <Text style={{ fontWeight: 'bold' }}>200</Text ></Text></Text>
                    <Text style={{ marginTop: 10 }}>_____</Text>
                    <Text style={{ marginTop: 15 }}>Send invite with referrel code and look good together</Text>
                    <View style={{
                        height: Vh * 0.05, width: Vw * 0.85, marginTop: 20, borderWidth: 1, borderStyle: 'dashed', borderColor: 'red',
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Text style={{ fontWeight: 'bold' }}>d4ehz7</Text>
                    </View>
                    <TouchableOpacity style={{
                        height: Vh * 0.05, width: Vw * 0.85, marginTop: 20,
                        justifyContent: 'center', alignItems: 'center', backgroundColor: '#FF3E6D'
                    }}>
                        <Text style={{ fontWeight: 'bold', color: Color.White }}>SEND INVITE</Text>

                    </TouchableOpacity>
                    <Text style={{ color: '#FF3E6D', marginTop: 20, fontWeight: 'bold', }}>Your Referrels</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ReferEarn;