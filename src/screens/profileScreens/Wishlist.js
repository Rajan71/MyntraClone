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
import { StripBox } from '../Profile';
// import { SwiperFlatList } from 'react-native-swiper-flatlist';
// import { AtSlide } from '../HomeScreen';


const colors = [
    { src: require('../../assests/images/common/men.jpg'), id: 9 },
    { src: require('../../assests/images/common/kids.jpg'), id: 10 },
    { src: require('../../assests/images/common/home.jpg'), id: 11 },
    { src: require('../../assests/images/common/gadgets.jpg'), id: 12 },
    { src: require('../../assests/images/common/jwel.jpg'), id: 13 },
];


const FavList = ({ navigation }) => {
    const [search, setSearch] = useState(false);
    const [pic, setPic] = useState(null)


    const NewArrival = ({ title }) => {
        return (
            <View style={{
                width: Vw, height: Vh * 0.31, alignItems: 'center', justifyContent: 'center',
                backgroundColor: Color.White, marginTop: 25
            }}>
                <View style={{
                    alignItems: 'flex-start', justifyContent: 'center',
                    height: Vh * 0.04, width: Vw * 0.9,
                }}>
                    <Text style={{ fontSize: 14 }}>{title}</Text>

                </View>
                <ImageBackground source={require('../../assests/images/common/beauty.webp')}
                    style={{ width: Vw, height: Vh * 0.25, flexDirection: 'row' }}>
                    <View style={{
                        width: Vw * 0.4, height: Vh * 0.25, justifyContent: 'center',
                        alignItems: 'flex-start', paddingLeft: 10
                    }}>
                        <Text style={{ color: Color.White, fontSize: 16, fontWeight: 'bold' }}>Check Now</Text>
                        <Text style={{ color: Color.White, fontSize: 22, fontWeight: 'bold' }}>New </Text>
                        <Text style={{ color: Color.White, fontSize: 22, fontWeight: 'bold' }}>Arrivals</Text>
                    </View>

                    <List
                        contentContainerStyle={{}}
                        horizontal
                        data={colors}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={{ margin: 5 }}>
                                </View>
                            )
                        }} />

                </ImageBackground>

            </View>
        )
    }



    const renderItem = ({ item }) => {
        return (
            <View style={{ width: Vw * 0.4, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.src}
                    style={{
                        height: Vh * 0.23, width: Vw * 0.4, borderColor: Color.White,
                        borderWidth: 1
                    }} />

            </View>

        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#F7F7F7', flex: 1, }}>

                <Header
                    navigation={navigation}
                    icon='arrowleft'
                    title='WISHLIST'
                    title1={<Text style={{ color: Color.Gray, paddingLeft: 10, fontSize: 11 }}>0 Items</Text>}
                    // icon3='search1'
                    icon2='delete'
                    icon1='handbag' />

                <ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('BottomTab')}>
                        <View style={{
                            alignItems: 'center',
                            height: Vh * 0.4, width: Vw, backgroundColor: Color.White, marginTop: 25,
                            alignItems: 'center', justifyContent: 'center'
                        }}>

                            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Your wishlist is empty</Text>
                            <Text style={{ fontSize: 18, marginTop: 15 }}>Save items that you like in your wishlist.</Text>
                            <Text style={{ fontSize: 18, marginTop: 5 }}>Review them anytime and easily move</Text>
                            <Text style={{ fontSize: 18, marginTop: 5 }}>them to the bag.</Text>


                            <View style={{
                                width: Vw * 0.3, height: Vh * 0.05, borderColor: Color.btnColor, borderWidth: 1,
                                alignItems: 'center', justifyContent: 'center', marginTop: 10, borderRadius: 5
                            }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: Color.btnColor }}>Shop Now</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                    <NewArrival title='TRENDING ON MYNTRA' />

                    <View style={{
                        width: Vw, alignItems: 'center',
                        marginTop: 15
                    }}>
                        <View style={{
                            width: Vw * 0.9, height: Vw * 0.1, justifyContent: 'center',
                            alignItems: 'flex-start', backgroundColor: Color.White
                        }}>
                            <Text style={{ color: Color.Black, fontSize: 15 }}>POPULAR ON MYNTRA</Text>
                        </View>
                        <StripBox icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../../assests/images/common/men.jpg')}
                        />}
                            title={'Roadster'}
                            desc={'Tshirts'} />

                        <StripBox icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../../assests/images/common/men.jpg')}
                        />}
                            title={'HRX'}
                            desc={'Tshirts'} />

                        <StripBox icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../../assests/images/common/men.jpg')}
                        />}
                            title={'anouk'}
                            desc={'Tshirts'} />
                        <StripBox icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../../assests/images/common/men.jpg')}
                        />}
                            title={'W'}
                            desc={'Tshirts'} />


                    </View>
                    <NewArrival title='JUST ARRIVED ON MYNTRA' />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default FavList;