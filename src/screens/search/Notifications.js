import React, { useState } from 'react';
import {
    View, Text, SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';
import { Header } from '../../components';

const Notifications = (props) => {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#F7F7F7' }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='NOTIFICATIONS'
                    icon2='hearto'
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text style={{ color: Color.Black, fontWeight: 'bold', fontSize: 16 }}>NO NOTIFICATIONS</Text>
                    <Text style={{ color: Color.Black, fontSize: 14 }}>We will notify you once there is something for you</Text>
                    <View style={{ height: Vw * 0.1, width: Vw * 0.6, backgroundColor: 'pink', marginTop: 10 }}>

                    </View>
                    <View style={{ height: Vw * 0.1, width: Vw * 0.6, backgroundColor: 'yellow', marginTop: 10 }}>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default Notifications;