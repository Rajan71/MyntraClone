import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';
import { List, Header } from '../../components';
import { Avatar } from 'react-native-elements';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { AtSlide } from '../HomeScreen';

const colors = [
    { src: require('../../assests/images/common/men.jpg'), id: 9 },
    { src: require('../../assests/images/common/kids.jpg'), id: 10 },
    { src: require('../../assests/images/common/home.jpg'), id: 11 },
    { src: require('../../assests/images/common/gadgets.jpg'), id: 12 },
    { src: require('../../assests/images/common/jwel.jpg'), id: 13 },
];

export const fashion = [
    { src: require('../../assests/images/common/men.jpg'), id: 19, title: 'MEN' },
    { src: require('../../assests/images/common/girls.webp'), id: 20, title: 'WOMEN' },
    { src: require('../../assests/images/common/kids.jpg'), id: 21, title: 'KIDS' },
    { src: require('../../assests/images/common/beauty.webp'), id: 22, title: 'BEAUTY' },
    { src: require('../../assests/images/common/home.jpg'), id: 23, title: 'HOME' },
    { src: require('../../assests/images/common/footwear.jpg'), id: 24, title: 'FOOTWEAR' },
    { src: require('../../assests/images/common/gadgets.jpg'), id: 25, title: 'GADGETS' },
    { src: require('../../assests/images/common/jwel.jpg'), id: 26, title: 'JEWELLERY' },
    { src: require('../../assests/images/common/jwel.jpg'), id: 27, title: 'JEWELLERY' },
    { src: require('../../assests/images/common/kids.jpg'), id: 28, title: 'KIDS' },
    { src: require('../../assests/images/common/beauty.webp'), id: 29, title: 'BEAUTY' },
    { src: require('../../assests/images/common/home.jpg'), id: 30, title: 'HOME' }
]

export const beauty = [
    {
        src: require('../../assests/images/beauty/beauty.webp'), id: 14, title: 'Buy 3 and Get 15% Off', title2: 'On Beauty and Personel Care',
        code: 'CODE:BEAUTY15', screen: 'BeautyProducts'
    },
    {
        src: require('../../assests/images/beauty/beauty.webp'), id: 15, title: 'Starting at 99', title2: 'Best Of Combos', code: 'CODE:BEAUTY15',
        screen: 'BeautyProducts'
    },
    {
        src: require('../../assests/images/beauty/beauty3.jpg'), id: 16, title: '40-60% Off', title2: 'On Selected Personel Care Products',
        code: 'CODE:BEAUTY15', screen: 'BeautyProducts'
    },
    {
        src: require('../../assests/images/beauty/beauty4.png'), id: 17, title: 'Extra 10%', title2: 'On Selected Personel Care',
        code: 'CODE:BEAUTY15', screen: 'BeautyProducts'
    },
    {
        src: require('../../assests/images/beauty/beauty5.png'), id: 18, title: 'Buy 3 and Get 15% Off', title2: 'On Beauty and Personel Care',
        code: 'CODE:BEAUTY15', screen: 'BeautyProducts'
    },
];

const MyntraMall = (props) => {

    const beautyRender = ({ item, index }) => {
        return <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.src}
                    style={{
                        height: Vh * 0.48, width: Vw * 0.7, alignItems: 'center',
                        justifyContent: 'center', borderColor: 'yellow', borderWidth: 4
                    }}>



                </Image>

            </View>
        </TouchableOpacity>
    }

    const fashionRender = ({ item, index }) => {
        return <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <Avatar
                rounded
                size={100}
                source={item.src}

            />

            <Text style={{ color: Color.Black, marginTop: 5 }}>{item.title}</Text>

        </View>
    }

    const westernRender = ({ item, index }) => {
        return <View style={{
            alignItems: 'center', justifyContent: 'center', height: Vh * 0.16,
            width: Vw * 0.25, backgroundColor: Color.White, borderRadius: 10,
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


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: Color.gray1 }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='MYNTRA MALL'
                    icon3='search1'
                    icon2='hearto'
                    icon1='handbag'
                />
                <ScrollView>
                    <View style={{
                        width: Vw, height: Vh * 0.12,
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        <Text>MYNTRA</Text>
                        <Text style={{ fontSize: 50, fontWeight: 'bold', color: '#B7462E' }}>MALL</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>HOUSE OF BRANDS</Text>

                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.1, backgroundColor: Color.White,
                        alignItems: 'center', flexDirection: 'row', justifyContent: 'center'
                    }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Brands Stores</Text>
                        <Text style={{
                            fontSize: 22, fontWeight: 'bold', paddingLeft: 3,
                            color: '#B7462E'
                        }}>In Focus</Text>
                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.3, backgroundColor: Color.White,
                        alignItems: 'center', justifyContent: 'center'
                    }}>
                        <SwiperFlatList
                            autoplay
                            autoplayDelay={2}
                            autoplayLoop
                            index={2}
                            // showPagination
                            data={colors}
                            renderItem={({ item }) => (
                                <View style={{ width: Vw, justifyContent: 'center', backgroundColor: item, alignItems: 'center' }}>
                                    <Image source={item.src}
                                        style={{ height: Vh * 0.3, width: Vw }} />

                                </View>

                            )}
                        />
                        <AtSlide />
                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.1, backgroundColor: Color.White,
                        alignItems: 'center', flexDirection: 'row', justifyContent: 'center'
                    }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Shop</Text>
                        <Text style={{
                            fontSize: 22, fontWeight: 'bold', paddingLeft: 3,
                            color: '#B7462E'
                        }}>Essentials</Text>
                    </View>

                    <View style={{ backgroundColor: Color.White, width: Vw, height: Vh * 0.67 }}>

                        <List
                            contentContainerStyle={{ paddingRight: 20 }}
                            numColumns={3}
                            data={fashion}
                            renderItem={fashionRender}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ margin: 10 }}>
                                    </View>
                                )
                            }} />
                    </View>

                    <View style={{ height: Vh * 0.5, width: Vw, }}>
                        <List
                            horizontal
                            data={beauty}
                            renderItem={beautyRender}
                            keyExtractor={item => item.id}

                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ paddingRight: Vh * 0.01 }}>
                                    </View>
                                )
                            }} />

                    </View>

                    <TouchableOpacity>
                        <ImageBackground
                            source={require('../../assests/images/common/fashion.jpg')}
                            style={{
                                height: Vh * 0.4, width: Vw, marginTop: 5,
                                alignItems: 'center', justifyContent: 'center'
                            }}
                            resizeMode='stretch'
                        >

                        </ImageBackground>
                    </TouchableOpacity>
                    <View style={{
                        width: Vw, height: Vh * 0.1, backgroundColor: Color.White,
                        alignItems: 'center', flexDirection: 'row', justifyContent: 'center'
                    }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#B7462E' }}>Western Wear</Text>
                        <Text style={{
                            fontSize: 22, fontWeight: 'bold', paddingLeft: 3,

                        }}>Brands</Text>
                    </View>
                    <View style={{ backgroundColor: Color.White, width: Vw, height: Vh * 0.72 }}>

                        <List
                            contentContainerStyle={{ paddingRight: 20 }}
                            numColumns={3}
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


                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default MyntraMall;