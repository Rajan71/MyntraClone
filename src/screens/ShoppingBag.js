import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../helper';
import { StripBox } from './Profile';
import { Avatar } from 'react-native-elements';
import { List, Header } from '../components';

const typeData = [
    { title: 'MEN', id: 1 },
    { title: 'WOMEN', id: 2 },
    { title: 'KIDS', id: 3 },
    { title: 'PERSONAL CARE', id: 4 },
    { title: 'HOME', id: 5 },
    { title: 'HOME PAGE', id: 6 },
]

const ShoppingBag = (props) => {
    const renderItem = ({ item }) => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', paddingLeft: 10 }}>
                <TouchableOpacity style={{
                    height: Vw * 0.08, borderColor: Color.Black,
                    borderWidth: 1, borderRadius: 20, alignItems: 'center', justifyContent: 'center'
                }}>
                    <Text style={{ fontSize: 12, fontWeight: 'bold', margin: 10 }}>{item.title}</Text>

                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: Color.gray1 }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='SHOPPING BAG' />
                <View style={{
                    width: Vw, height: Vh * 0.35, justifyContent: 'center',
                    alignItems: 'center', backgroundColor: Color.White, marginTop: 2
                }}>
                    <Image source={require('../assests/images/common/cart.jpg')}
                        style={{ height: Vh * 0.25, width: Vw * 0.3 }} />

                    <View style={{ marginTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Hey, it feels so light!</Text>
                        <Text style={{ fontSize: 12, marginTop: 10 }}>There is nothing in your bag. Lets add some items.</Text>
                    </View>

                </View>
                <View style={{ marginTop: 15 }}>
                    <StripBox
                        icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../assests/images/common/men.jpg')}
                        />}
                        title={'Tshirts'}
                        desc={'Roadster'} />
                    <StripBox
                        icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../assests/images/common/men.jpg')}
                        />}
                        title={'Tshirts'}
                        desc={'HRX'} />
                    <StripBox
                        icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../assests/images/common/men.jpg')}
                        />}
                        title={'Kurtas'}
                        desc={'anouk'} />
                    <StripBox
                        icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../assests/images/common/men.jpg')}
                        />}
                        title={'Kurtas'}
                        desc={'W'} />
                </View>
                <View style={{
                    width: Vw, height: Vh * 0.06, backgroundColor: Color.White, marginTop: 25,
                    alignItems: 'center', justifyContent: 'center'
                }}>

                    <List
                        horizontal
                        data={typeData}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={{ margin: 10 }}></View>
                            )
                        }} />
                </View>
                <View style={{ flex: 1, backgroundColor: Color.White, marginTop: 15 }}>

                </View>

            </View>
        </SafeAreaView>

    )
}

export default ShoppingBag