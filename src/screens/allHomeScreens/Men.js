import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { colors } from '../../components';
import { AtSlide } from '../HomeScreen';
import In from "react-native-vector-icons/AntDesign";
import { List, fashion, Header } from '../../components';
import { Avatar } from 'react-native-elements';

const clothingData = [
    { title: 'Topwear', id: 1, },
    { title: 'Bottomwear', id: 2, },
    { title: 'Sports & Active Wear', id: 3, },
    { title: 'Indian & Festival Wear', id: 4, },
    { title: 'Innerwear & Sleepwear', id: 5, },
    { title: 'Suits & Blazers', id: 6, },
    { title: 'Plus Size', id: 7, }
]
const footwearData = [
    { title: 'Sneakers', id: 8, },
    { title: 'Casual Shoes', id: 9, },
    { title: 'Sports Shoes', id: 10, },
    { title: 'Formal Shoes', id: 11, },
    { title: 'Sandels & Flotters', id: 12, },
    { title: 'Flip Flops', id: 13, },
    { title: 'Socks', id: 14, }
]

const brandsData = [
    { src: require('../../assests/images/common/noice.webp') },
    { src: require('../../assests/images/common/trimmer.webp') },
    { src: require('../../assests/images/common/watch.jpg') },
    { src: require('../../assests/images/common/noice.webp') },
    { src: require('../../assests/images/common/trimmer.webp') },

]

export const Arrivals = (props) => {
    return (
        <View style={{
            width: Vw, height: Vh * 0.5, backgroundColor: Color.White,
            alignItems: 'center', justifyContent: 'center',
        }}>
            <Image source={props.src}
                style={{
                    width: Vw * 0.98, height: Vh * 0.48, borderWidth: 6,
                    borderColor: Color.yellow
                }} />
        </View>

    )
}

export const RoundImage = (props) => {
    return (
        <TouchableOpacity>
            <View style={{
                height: 120, width: 120, borderRadius: 60, backgroundColor: '#C0FAF8',
                alignItems: 'center', justifyContent: 'center'
            }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.title1}</Text>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{props.title2}</Text>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.title3}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const TitleBar = (props) => {
    return (
        <View style={{
            height: Vh * 0.07, width: Vw * 0.95, marginTop: 10, alignSelf: 'flex-end',
            justifyContent: 'center',
        }}>
            <Text>{props.name}</Text>

        </View>
    )
}


const Men = (props) => {
    const [close, setClose] = useState(false)
    const [cloth, setCloth] = useState(false)
    const [click, setClick] = useState(false)
    const [foot, setFoot] = useState(false)



    const renderItem = ({ item, index }) => {
        return (

            <View style={{
                height: Vh * 0.22, width: Vw * 0.42, alignItems: 'center', justifyContent: 'center',
                marginTop: 10, marginLeft: 10, borderColor: Color.Black, borderWidth: 1
            }}>
                <Image source={item.src}
                    style={{ height: Vh * 0.2, width: Vw * 0.4, }}
                    resizeMode='stretch' />

            </View>

        )
    }

    const fashionRender = ({ item, index }) => {
        return <View style={{
            alignItems: 'center',
            justifyContent: 'center', flex: 1
        }}>
            <Avatar
                rounded
                size={100}
                source={item.src}
            />
            <Text style={{ color: Color.Black, marginTop: 5 }}>{item.title}</Text>
        </View>
    }

    const footwearList = () => {
        return footwearData.map((item) => {
            return (
                <TouchableOpacity onPress={() => { setClose(!close); setClick(!click) }}>
                    <View style={{
                        height: Vh * 0.07, width: Vw, alignItems: 'center',
                        backgroundColor: Color.White, marginTop: 2, justifyContent: 'center'

                    }}>
                        <View style={{
                            flexDirection: 'row', height: Vh * 0.08, width: Vw * 0.93,
                            justifyContent: 'space-between', alignItems: 'center',
                            alignSelf: 'flex-end',

                        }}>
                            <Text style={{ fontSize: 14, }}>{item.title}</Text>

                            <In name={close ? 'down' : 'up'} size={15} style={{ paddingRight: 15 }} />
                        </View>


                    </View >


                </TouchableOpacity>
            )
        })
    }


    const clothingList = () => {
        return clothingData.map((item) => {
            return (
                <TouchableOpacity onPress={() => { setClose(!close); setClick(!click); setFoot(!foot) }}>
                    <View style={{
                        height: Vh * 0.07, width: Vw, alignItems: 'center',
                        backgroundColor: Color.White, marginTop: 2, justifyContent: 'center'

                    }}>
                        <View style={{
                            flexDirection: 'row', height: Vh * 0.08, width: Vw * 0.93,
                            justifyContent: 'space-between', alignItems: 'center',
                            alignSelf: 'flex-end',

                        }}>
                            <Text style={{ fontSize: 14, fontWeight: click ? 'bold' : 'normal' }}>{item.title}</Text>

                            <In name={close ? 'down' : 'up'} size={15} style={{ paddingRight: 15 }} />
                        </View>


                    </View >
                    {foot ? footwearList() : null}
                </TouchableOpacity>
            )
        })
    }
    const Tabs = (props) => {
        const [open, setOpen] = useState(false)

        return (
            <TouchableOpacity onPress={() => { setOpen(!open); setCloth(!cloth); }}>
                <View style={{
                    height: Vh * 0.08, width: Vw, alignItems: 'center',
                    backgroundColor: Color.White, marginTop: 2, justifyContent: 'center'

                }}>
                    <View style={{
                        flexDirection: 'row', height: Vh * 0.08, width: Vw * 0.95,
                        justifyContent: 'space-between', alignItems: 'center',
                        alignSelf: 'flex-end', borderBottomColor: Color.gray1, borderBottomWidth: 1,

                    }}>
                        <Text style={{ fontSize: 18, }}>{props.title}</Text>

                        <In name={open ? 'up' : 'down'} size={15} style={{ paddingRight: 15 }} />
                    </View>


                </View >
                {cloth ? clothingList() : null}
            </TouchableOpacity>
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
                    <View style={{ height: Vh * 0.4, width: Vw, alignItems: 'center', justifyContent: 'center' }}>

                        <SwiperFlatList
                            autoplay
                            autoplayDelay={2}
                            autoplayLoop
                            index={2}
                            //   showPagination
                            data={colors}
                            renderItem={({ item }) => (
                                <View style={{ width: Vw, justifyContent: 'center', backgroundColor: item, alignItems: 'center' }}>
                                    <Image source={item.src}
                                        style={{ height: Vh * 0.4, width: Vw }} />

                                </View>

                            )}
                        />
                        <AtSlide id={colors.id} />
                    </View>
                    <Tabs title='Clothing' />
                    <Tabs title='Footwear' />
                    <Tabs title='Assessories' />
                    <Tabs title='Personel Care & Grooming' />
                    <Tabs title='Shop By Occassion' />
                    <View style={{ height: Vh * 0.32, width: Vw, backgroundColor: Color.White }}>
                        <TitleBar
                            name='FEATURED BRANDS' />
                        <List
                            horizontal
                            data={brandsData}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ margin: 5 }}>
                                    </View>
                                )
                            }}
                        />
                    </View>

                    <View style={{ height: Vh * 0.32, width: Vw, backgroundColor: Color.White }}>
                        <TitleBar name='SPONSORED BRANDS' />
                        <List
                            horizontal
                            data={brandsData}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ margin: 5 }}>
                                    </View>
                                )
                            }}
                        />
                    </View>
                    <View style={{ height: Vh * 0.22, width: Vw, alignItems: 'center', backgroundColor: Color.White }}>
                        <TitleBar name='OFFER CORNER' />
                        <View style={{
                            height: Vh * 0.14, width: Vw * 0.96, flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>

                            <RoundImage title1='Flat'
                                title2='60%'
                                title3='Off' />
                            <RoundImage title1='Under'
                                title2='999'
                                title3='Store' />
                            <RoundImage title1='Flat'
                                title2='50%'
                                title3='Off' />

                        </View>

                    </View>
                    <View style={{ backgroundColor: Color.White, width: Vw, height: Vh * 0.7, }}>
                        <TitleBar name='SPONSORED BRANDS' />
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
                    <View style={{
                        width: Vw, height: Vh * 0.5, backgroundColor: Color.White,
                        alignItems: 'center', justifyContent: 'center',
                    }}>

                        <TitleBar name='NEW ARRIVALS' />
                        <Arrivals src={require('../../assests/images/common/men.jpg')} />


                    </View>
                    <Arrivals src={require('../../assests/images/common/men.jpg')} />
                    <Arrivals src={require('../../assests/images/common/men.jpg')} />
                    <Arrivals src={require('../../assests/images/common/men.jpg')} />
                    <Arrivals src={require('../../assests/images/common/men.jpg')} />

                </ScrollView>
            </View >
        </SafeAreaView>
    )
}

export default Men;