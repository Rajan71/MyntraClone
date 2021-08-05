import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';

import { List, Header } from '../../components';


const giftData = [
    { src: require('../../assests/images/giftCards/gift1.jpg') },
    { src: require('../../assests/images/giftCards/gift2.png') },
]

export const fashion = [
    { src: require('../../assests/images/common/men.jpg'), id: 19, title: 'MEN' },
    { src: require('../../assests/images/common/girls.webp'), id: 20, title: 'WOMEN' },
    { src: require('../../assests/images/common/kids.jpg'), id: 21, title: 'KIDS' },
    { src: require('../../assests/images/common/beauty.webp'), id: 22, title: 'BEAUTY' },
    { src: require('../../assests/images/common/home.jpg'), id: 23, title: 'HOME' },
    { src: require('../../assests/images/common/footwear.jpg'), id: 24, title: 'FOOTWEAR' },
    { src: require('../../assests/images/common/gadgets.jpg'), id: 25, title: 'GADGETS' },
    { src: require('../../assests/images/common/jwel.jpg'), id: 26, title: 'JEWELLERY' },

]

const GiftCard = (props) => {


    const westernRender = ({ item, index }) => {
        return <View style={{
            alignItems: 'center', justifyContent: 'center', height: Vh * 0.18,
            width: Vw * 0.38, backgroundColor: Color.White, borderRadius: 10,
            elevation: 5, shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2, marginHorizontal: 18

        }}>

            <Image source={item.src} style={{
                height: Vh * 0.12, width: '100%', flex: 1,
                borderRadius: 10
            }}
                resizeMode='stretch' />

            <Text style={{ color: Color.Black, marginTop: 5 }}>{item.title}</Text>

        </View >
    }


    const PriceBox = (props) => {
        return (
            <View style={{
                height: 110, width: 110, borderRadius: 55, backgroundColor: '#F8712A',
                alignItems: 'center', justifyContent: 'center', elevation: 5, shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.5,
            }}>

                <Text style={{ color: Color.White, fontSize: 16, fontWeight: 'bold' }}>{props.price}</Text>
            </View>

        )
    }

    const renderItem = ({ item }) => {
        return (
            <View style={{
                width: Vw, justifyContent: 'center', alignItems: 'flex-start', marginTop: 20,
                height: Vh * 0.45, width: Vw * 0.8, borderColor: Color.Black, borderWidth: 1,
                marginLeft: 10
            }}>
                <Image source={item.src}
                    style={{
                        height: Vh * 0.42, width: Vw * 0.78, backgroundColor: 'pink',
                        shadowOffset: { width: 0, height: 2 },
                        shadowRadius: 50
                    }}
                    resizeMode='stretch' />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: Color.White }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='MYNTRA'
                    icon3='search1'
                    icon2='hearto'
                    icon1='handbag'
                />
                <ScrollView>
                    <TouchableOpacity style={{ width: Vw, height: Vh * 0.3, }}>
                        <Image source={require('../../assests/images/giftCards/myntracard.jpg')}
                            style={{ width: Vw, height: Vh * 0.3 }} />
                    </TouchableOpacity>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <List
                            horizontal
                            data={giftData}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()} />
                    </View>
                    <View style={{ width: Vw, height: Vh * 0.5, alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: '#CD177E', fontSize: 20, fontWeight: 'bold' }}>Recived A Myntra Gift Card?</Text>
                        <TouchableOpacity style={{
                            width: Vw * 0.4, height: Vw * 0.08, backgroundColor: '#CD177E',
                            alignItems: 'center', justifyContent: 'center', borderRadius: 7,
                            marginTop: 20, elevation: 5, shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.5,
                        }}>
                            <Text style={{ color: Color.White, fontWeight: 'bold' }}>Redeem it now</Text>

                        </TouchableOpacity>
                        <Text style={{ color: Color.yellow, fontWeight: 'bold', marginTop: 20, fontSize: 20 }}>Shop By Price Range</Text>
                        <Text style={{ color: Color.Gray, fontWeight: 'bold', }}>A gift for every budget</Text>

                        <View style={{
                            alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row',
                            width: Vw, marginTop: 20
                        }}>
                            <PriceBox price='500' />
                            <PriceBox price='1000' />
                            <PriceBox price='2000' />

                        </View>
                        <View style={{
                            alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row',
                            width: Vw, marginTop: 20
                        }}>
                            <PriceBox price='3000' />
                            <PriceBox price='5000' />
                            <PriceBox price='1000' />

                        </View>
                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.1, backgroundColor: Color.White,
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#CD177E' }}>Shop By Occasion</Text>
                        <Text style={{
                            fontWeight: 'bold', color: Color.Gray

                        }}>Gift cards for every celebration</Text>
                    </View>
                    <View style={{
                        backgroundColor: Color.White, width: Vw, height: Vh * 0.81,
                        alignItems: 'center', justifyContent: 'space-evenly'
                    }}>

                        <List
                            contentContainerStyle={{ flex: 1 }}
                            numColumns={2}
                            data={fashion}
                            renderItem={westernRender}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ margin: 10 }}>
                                    </View>
                                )
                            }} />
                    </View>

                    <View style={{
                        width: Vw, height: Vh * 0.1, backgroundColor: Color.White,
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: Color.yellow }}>Myntra Gift Card Perks</Text>
                        <Text style={{
                            fontWeight: 'bold', color: Color.Gray

                        }}>Extra benefits just for you</Text>
                    </View>
                    <View style={{
                        alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row',
                        width: Vw, marginTop: 20
                    }}>
                        <PriceBox price='Check your balance' />
                        <PriceBox price='Coporate & Bulk Purchases' />
                        <PriceBox price='FAQS' />

                    </View>

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default GiftCard;