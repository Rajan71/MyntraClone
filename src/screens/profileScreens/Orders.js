import React, { useRef, useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';
import { Header } from '../../components';



const Orders = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: Color.White, flex: 1 }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='ORDERS'
                    icon1='handbag' />
                <View style={{
                    flex: 1, borderTopColor: Color.Gray, borderTopWidth: 1,
                    alignItems: 'center', justifyContent: 'center'
                }}>
                    <Image source={require('../../assests/images/common/order.png')}
                        style={{ width: Vw * 0.6, height: Vh * 0.3, marginBottom: 20 }}
                        resizeMode='stretch' />
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>You haven't place any order yet</Text>
                    <Text style={{ color: Color.Gray, marginTop: 20 }}>Order section is empty. After placing order,</Text>
                    <Text style={{ color: Color.Gray, marginTop: 5 }}>You can Track them from here!</Text>
                    <TouchableOpacity style={{
                        width: Vw * 0.9, height: Vh * 0.05, backgroundColor: '#FF3E6D',
                        alignItems: 'center', justifyContent: 'center', marginTop: 30
                    }}>
                        <Text style={{ color: Color.White, fontWeight: 'bold' }}>
                            START SHOPPING
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

export default Orders;