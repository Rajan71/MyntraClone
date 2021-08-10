import React from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';
import { List } from '../index'
import { Avatar } from 'react-native-elements';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


export const AvtarRow = ({ navigation }) => {

    const renderItem = ({ item, index }) => {
        return <View style={styles.renStyle}>
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                <Avatar
                    rounded
                    size='large'
                    source={item.src}
                />
            </TouchableOpacity>
            <Text style={{ color: Color.Black, marginTop: 5 }}>{item.title}</Text>

        </View>
    }

    const avtarData = [
        { src: require('../../assests/images/common/men.jpg'), id: 1, title: 'MEN', screen: 'Men' },
        { src: require('../../assests/images/common/girls.webp'), id: 2, title: 'WOMEN', screen: 'Women' },
        { src: require('../../assests/images/common/kids.jpg'), id: 3, title: 'KIDS', screen: 'Men' },
        { src: require('../../assests/images/common/beauty.webp'), id: 4, title: 'BEAUTY', screen: 'Men' },
        { src: require('../../assests/images/common/home.jpg'), id: 5, title: 'HOME', screen: 'Men' },
        { src: require('../../assests/images/common/footwear.jpg'), id: 6, title: 'FOOTWEAR', screen: 'Men' },
        { src: require('../../assests/images/common/gadgets.jpg'), id: 7, title: 'GADGETS', screen: 'Men' },
        { src: require('../../assests/images/common/jwel.jpg'), id: 8, title: 'JEWELLERY', screen: 'Men' },
    ]
    return (
        <List
            horizontal
            contentContainerStyle={{ marginHorizontal: 10 }}
            data={avtarData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => {
                return (
                    <View style={{ margin: 10 }}>
                    </View>
                )
            }} />
    )
}


export const SwipeList = () => {
    const colors = [
        { src: require('../../assests/images/common/men.jpg'), id: 9, screen: 'FlipFlops' },
        { src: require('../../assests/images/common/kids.jpg'), id: 10, screen: 'Kurtas' },
        { src: require('../../assests/images/common/home.jpg'), id: 11, screen: 'Lingerie' },
        { src: require('../../assests/images/common/gadgets.jpg'), id: 12, screen: 'Shorts' },
        { src: require('../../assests/images/common/jwel.jpg'), id: 13, screen: 'Kurtas' },
    ]

    return (
        <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={2}
            //   showPagination
            data={colors}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                    <View style={styles.swipeRen}>
                        <Image source={item.src}
                            style={{ height: Vh * 0.3, width: Vw }} />

                    </View>
                </TouchableOpacity>

            )}
        />
    )

}

export const BeautyPersonel = ({ navigation }) => {
    const beauty = [
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

    const beautyRender = ({ item, index }) => {
        return <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
            <View style={styles.renStyle}>
                <ImageBackground source={item.src}
                    style={{ height: Vh * 0.3, width: Vw * 0.7, alignItems: 'center', justifyContent: 'center' }}>

                    <View style={{
                        alignItems: 'center', justifyContent: 'center',
                        position: 'absolute', bottom: 20
                    }}>
                        <Text style={{ color: Color.White, fontSize: 22, fontWeight: "bold" }}>{item.title}</Text>
                        <Text style={{ color: Color.White, fontSize: 16, fontWeight: "bold" }}>{item.title2}</Text>
                        {item.id == 14 || item.id == 16 || item.id == 18 ?

                            <TouchableOpacity style={{
                                backgroundColor: Color.White,
                                height: Vw * 0.06,
                                width: Vw * 0.23,
                                borderRadius: 5,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 5
                            }}>
                                <Text style={{ color: Color.Black, fontSize: 10, fontWeight: "bold" }}>{item.code}</Text>
                            </TouchableOpacity> : null}
                    </View>

                </ImageBackground>

            </View>
        </TouchableOpacity>
    }

    return (
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
    )
}

export const CategoriesBag = () => {
    const fashion = [
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
    const fashionRender = ({ item, index }) => {
        return <View style={{ ...styles.renStyle, flex: 1 }}>
            <Avatar
                rounded
                size={100}
                source={item.src}

            />

            <Text style={{ color: Color.Black, marginTop: 5 }}>{item.title}</Text>

        </View>
    }

    return (
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
    )
}

export const ExcList = () => {
    const excData = [
        { src: require('../../assests/images/exercise/exc1.jpg'), id: 31, title: 'AT HOME' },
        { src: require('../../assests/images/exercise/exc2.jpg'), id: 32, title: 'WORK MEETING' },
        { src: require('../../assests/images/exercise/exc3.webp'), id: 33, title: 'WORKOUT' },
        { src: require('../../assests/images/exercise/exc4.jpg'), id: 34, title: 'SLEEP' },
        { src: require('../../assests/images/exercise/exc1.jpg'), id: 35, title: 'AT HOME' },
        { src: require('../../assests/images/exercise/exc2.jpg'), id: 36, title: 'WORK MEETING' },
        { src: require('../../assests/images/exercise/exc3.webp'), id: 37, title: 'WORKOUT' },
        { src: require('../../assests/images/exercise/exc4.jpg'), id: 38, title: 'SLEEP' },

    ]

    const activityRender = ({ item, index }) => {
        return <View style={{ ...styles.renStyle, flex: 1 }}>
            <ImageBackground source={item.src}
                style={{ height: Vh * 0.17, width: Vw * 0.48, alignItems: 'center', justifyContent: 'center' }} >
                <View style={{ position: 'absolute', bottom: 10 }}>
                    <Text style={{ color: Color.White, marginTop: 5 }}>{item.title}</Text>
                </View>
            </ImageBackground>
        </View>
    }
    return (
        <List
            contentContainerStyle={{}}
            numColumns={2}
            data={excData}
            renderItem={activityRender}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => {
                return (
                    <View style={{ margin: 5 }}>
                    </View>
                )
            }}
        />
    )
}





const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Color.gray1,
        flex: 1

    },
    renStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Vh * 0.16,
        marginTop: 10
    },
    listStyle: {
        width: Vw,
        height: '20%',
        backgroundColor: Color.White,
    },
    wlcTextStyle: {
        justifyContent: 'center',
        alignItems: 'center',

        alignSelf: 'center'
    },
    btnStyle: {
        backgroundColor: Color.White,
        height: Vw * 0.06,
        width: Vw * 0.18,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageCont: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 20,


    },
    btnView: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Vw * 0.8
    },
    dotStyle: { width: 7, borderRadius: 5, aspectRatio: 1, },

    swipeRen: {
        width: Vw,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

