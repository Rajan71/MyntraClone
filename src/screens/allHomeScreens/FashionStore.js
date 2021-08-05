import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView, SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';

import { List, Header } from '../../components';
import { Avatar } from 'react-native-elements';

const discountData = [
    { src: require('../../assests/images/common/beauty.webp'), title1: 'Flat 15% Off', title2: 'On Personel care' },
    { src: require('../../assests/images/common/beauty.webp'), title1: 'Flat 300 Off', title2: 'shopping of 1999' },
    { src: require('../../assests/images/common/beauty.webp'), title1: 'Flat 15% Off', title2: 'On Personel care' },
    { src: require('../../assests/images/common/beauty.webp'), title1: 'Flat 15% Off', title2: 'On Personel care' },
    { src: require('../../assests/images/common/beauty.webp'), title1: 'Flat 15% Off', title2: 'On Personel care' },
]

const bestBrandsData = [
    { src: require('../../assests/images/common/nike.jpg') },
    { src: require('../../assests/images/common/mango.jpg') },
    { src: require('../../assests/images/common/biba.jpg') },
    { src: require('../../assests/images/common/nike.jpg') },
    { src: require('../../assests/images/common/biba.jpg') },
]


const FashionStore = (props) => {

    const TitleBar = (props) => {
        return (
            <View style={{
                height: Vh * 0.05, width: Vw * 0.95, alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{props.name}</Text>
            </View>
        )
    }

    const Brands = (props) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Avatar

                    rounded
                    size={Vh * 0.1}
                    source={props.src} />
                <Image source={props.src1}
                    style={{ height: Vw * 0.1, width: Vw * 0.2 }} />
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{props.title}</Text>
            </View>
        )
    }

    const WantedWrapeer = () => {
        return (
            <View style={{
                height: Vh * 0.06, width: Vw * 0.85, flexDirection: 'row',
                alignItems: 'center', justifyContent: 'space-between',
                marginTop: 10
            }}>
                <Wanted />
                <Wanted />
            </View>
        )
    }

    const Wanted = () => {
        return (
            <TouchableOpacity style={{
                height: Vh * 0.05, width: Vw * 0.4, alignItems: 'center',
                backgroundColor: '#F0A63E', borderRadius: Vh * 0.025,
                flexDirection: 'row', justifyContent: 'space-between'
            }}>
                <Avatar

                    rounded
                    size={Vh * 0.05}
                    source={require('../../assests/images/common/men.jpg')}
                />
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingRight: 5 }}>
                    <Text>Smart Shirts </Text>
                    <Text>SUnder 799</Text>
                </View>

            </TouchableOpacity>

        )
    }

    const Box = (props) => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: Vw * 0.17, height: Vw * 0.15, backgroundColor: '#EFF0F6' }}>

                </View>
                <View style={{ width: Vw * 0.25, alignItems: 'center', marginTop: 5 }}>
                    <Text>{props.title1}</Text>
                    <Text>{props.title2}</Text>
                </View>
            </View>
        )
    }

    const disRender = ({ item, index }) => {
        return (
            <View style={{
                alignItems: 'center', justifyContent: 'center',
                width: Vw * 0.53, height: Vh * 0.12,
            }}>
                <ImageBackground source={item.src}
                    style={{
                        width: Vw * 0.5, height: Vh * 0.11, alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title1}</Text>

                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink' }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title2}</Text>
                    </View>

                </ImageBackground>
            </View>
        )
    }

    const bsetBrandsRen = ({ item, index }) => {
        return (
            <Image source={item.src}
                style={{
                    width: Vw * 0.4, height: Vh * 0.27,
                    borderColor: Color.Black, borderWidth: 1
                }} />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: Color.gray1, flex: 1 }}>

                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='MYNTRA'
                    icon3='search1'
                    icon2='hearto'
                    icon1='handbag' />

                <ScrollView>

                    <View style={{
                        width: Vw, height: Vh * 0.13, backgroundColor: Color.White,
                        marginTop: 1, alignItems: 'center', justifyContent: 'center'
                    }}>

                        <List
                            horizontal
                            data={discountData}
                            renderItem={disRender}
                            keyExtractor={(item, index) => index.toString()}

                        />
                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.25,
                        alignItems: 'center', justifyContent: 'space-evenly',
                        backgroundColor: '#F0C098', flexDirection: 'row'
                    }}
                    >
                        <Image source={require('../../assests/images/common/men.jpg')}
                            style={{ width: Vw * 0.35, height: Vh * 0.25 }} />
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Make Your First Purchase & Get</Text>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Flat 300 Off</Text>
                            <Text style={{ fontSize: 16, }}>+ free shiping on top styles</Text>
                            <View style={{
                                width: Vw * 0.35, height: Vw * 0.08, backgroundColor: Color.White, borderRadius: 10,
                                marginTop: 10, alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>+Shop Now</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.15, backgroundColor: Color.White,
                        alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row'
                    }}>
                        <Box
                            title1='100% Original'
                            title2='Products' />
                        <Box
                            title1='Easy Returns'
                            title2='& Refunds' />
                        <Box
                            title1='8 lakh+'
                            title2='Styles' />
                        <Box
                            title1='Contactless'
                            title2='Delivery' />

                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.35, backgroundColor: Color.White,
                        alignItems: 'center',
                    }}>
                        <TitleBar name='--Most Wanted Styles--' />

                        <View style={{
                            height: Vh * 0.3, width: Vw,
                            alignItems: 'center', justifyContent: 'center',
                        }}>
                            <WantedWrapeer />
                            <WantedWrapeer />
                            <WantedWrapeer />
                            <WantedWrapeer />
                        </View>

                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.46, backgroundColor: Color.White,
                        alignItems: 'center',
                    }}>
                        <TitleBar name='--Brands Only On Myntra--' />
                        <View style={{
                            width: Vw, height: Vh * 0.18, alignItems: 'center',
                            justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 20
                        }}>
                            <Brands title='Under 799'
                                src={require('../../assests/images/common/men.jpg')}
                                src1={require('../../assests/images/common/road.jpg')} />
                            <Brands title='Under 1299'
                                src={require('../../assests/images/womens/beardo.webp')}
                                src1={require('../../assests/images/common/hrx.jpg')} />
                            <Brands title='Under 1299'
                                src={require('../../assests/images/common/men.jpg')}
                                src1={require('../../assests/images/common/road.jpg')} />
                            <Brands title='Under 799'
                                src={require('../../assests/images/womens/beardo.webp')}
                                src1={require('../../assests/images/common/hrx.jpg')} />
                        </View>
                        <View style={{
                            width: Vw, height: Vh * 0.18, alignItems: 'center',
                            justifyContent: 'space-evenly', flexDirection: 'row', marginTop: 20
                        }}>
                            <Brands title='Under 1399'
                                src={require('../../assests/images/common/men.jpg')}
                                src1={require('../../assests/images/common/road.jpg')} />
                            <Brands title='Under 699'
                                src={require('../../assests/images/womens/beardo.webp')}
                                src1={require('../../assests/images/common/hrx.jpg')} />
                            <Brands title='Under 499'
                                src={require('../../assests/images/common/men.jpg')}
                                src1={require('../../assests/images/common/road.jpg')} />
                            <Brands title='Under 799'
                                src={require('../../assests/images/womens/beardo.webp')}
                                src1={require('../../assests/images/common/hrx.jpg')} />
                        </View>


                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.33, backgroundColor: Color.White,
                        alignItems: 'center',
                    }}>
                        <TitleBar name='--Best Of Brands--' />

                        <List
                            horizontal
                            data={bestBrandsData}
                            renderItem={bsetBrandsRen}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ margin: 5 }}>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>

    )
}

export default FashionStore;