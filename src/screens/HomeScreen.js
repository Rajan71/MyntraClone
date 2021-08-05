import React from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../helper';
import { MainScreenHeader } from '../components';
import { Avatar } from 'react-native-elements';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import {
    List, avtarData,
    colors,
    beauty,
    fashion,
    excData,
} from '../components';
import { TopPicksData } from '../assests/data/topPickData';




export const AtSlide = ({ id }) => {
    return (
        <View style={{
            height: Vh * 0.035, width: Vw * 0.3,
            flexDirection: 'row', alignItems: 'center',
            justifyContent: 'space-evenly',

        }}>
            <View style={{
                ...styles.dotStyle, backgroundColor: id == 9 ? Color.Gray :
                    Color.red
            }}></View>

            <View style={{
                ...styles.dotStyle, backgroundColor: id == 10 ? Color.Gray :
                    Color.red
            }}>

            </View>

            <View style={{
                ...styles.dotStyle, backgroundColor: id == 11 ? Color.Gray :
                    Color.red
            }}></View>

            <View style={{
                ...styles.dotStyle, backgroundColor: id == 12 ? Color.Gray :
                    Color.red
            }}></View>

            <View style={{
                ...styles.dotStyle, backgroundColor: id == 13 ? Color.Gray :
                    Color.red
            }}></View>

        </View>
    )
}


const HomeScreen = ({ navigation }) => {


    const TopPicksRen = ({ item, index }) => {

        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('ProductGridView', { name: item.key, headerTitle: item.headerTitle })
            }
            }>
                <View >
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 10 }} >
                        <ImageBackground style={{ height: Vh * 0.2, width: Vw * 0.49, alignItems: 'center', justifyContent: 'center' }}
                            source={item.src}
                            resizeMode='stretch' >
                            <View style={{
                                alignItems: 'center', justifyContent: 'center',
                                position: 'absolute', bottom: 20
                            }}>
                                <Text style={{
                                    color: Color.White,
                                    fontSize: 16, fontWeight: 'bold'
                                }}>{item.title}</Text>
                                <Text style={{
                                    color: Color.White,
                                    fontSize: 25, fontWeight: 'bold'
                                }}>{item.price}</Text>
                            </View>
                        </ImageBackground>
                    </View>


                </View>
            </TouchableOpacity>
        )
    }



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

    const activityRender = ({ item, index }) => {
        return <View style={{ ...styles.renStyle, flex: 1 }}>
            <ImageBackground source={item.src}
                style={{ height: Vh * 0.18, width: Vw * 0.48, alignItems: 'center', justifyContent: 'center' }} >
                <View style={{ position: 'absolute', bottom: 10 }}>
                    <Text style={{ color: Color.White, marginTop: 5 }}>{item.title}</Text>
                </View>
            </ImageBackground>
        </View>
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <View style={styles.mainView}>
                <MainScreenHeader
                    navigation={navigation.navigate}
                    icon1='search'
                    icon2='bell'
                    icon3='heart'
                    icon4='handbag'
                    title1='Become'
                    title2='INSIDER' />
                <View style={styles.listStyle}>

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
                        }}
                    />
                </View>
                <View>
                    <ScrollView>
                        <TouchableOpacity onPress={() => navigation.navigate('FashionStore')}>
                            <ImageBackground
                                source={require('../assests/images/common/collection.jpg')}
                                style={{
                                    height: Vh * 0.4, width: Vw, marginTop: 5,
                                    alignItems: 'center', justifyContent: 'center'
                                }}
                            >

                                <View style={styles.imageCont}>
                                    <View style={styles.wlcTextStyle}>
                                        <Text style={{ color: Color.White, fontSize: 18, fontWeight: 'bold' }}>Welcome To India's Biggest Fashion Store!</Text>
                                        <Text style={{ color: Color.White, fontSize: 30, fontWeight: 'bold' }}>Flat ₹400 Off</Text>
                                        <Text style={{ color: Color.White, fontSize: 16, fontWeight: 'bold' }}>+ Free shipping on 1st order</Text>
                                    </View>
                                    <View style={styles.btnView}>
                                        <TouchableOpacity style={styles.btnStyle}
                                            activeOpacity={1}>
                                            <Text style={{ color: Color.Black, fontSize: 12 }}>+ FOR HIM</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.btnStyle}
                                            activeOpacity={1}>
                                            <Text style={{ color: Color.Black, fontSize: 12 }}>+ FOR HER</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                            </ImageBackground>
                        </TouchableOpacity>
                        <View style={{
                            flex: 1, backgroundColor: 'white', marginTop: 15,
                            alignItems: 'center', justifyContent: 'center'
                        }}>
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
                            <AtSlide id={colors.id} />

                        </View>
                        <View style={{
                            height: Vh * 0.07, width: Vw, backgroundColor: Color.White, marginTop: 15,
                            justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'
                        }}>
                            <View style={{
                                height: Vh * 0.06, width: Vw * 0.4,
                                borderRightWidth: 1, borderRightColor: Color.Black, alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Image source={require('../assests/images/common/bank.webp')}
                                    style={{ width: Vw * 0.35, height: Vh * 0.04 }}
                                    resizeMode='contain' />

                            </View>
                            <View style={{
                                height: Vh * 0.06, width: Vw * 0.55,
                                alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ color: Color.Black, fontSize: 16, fontWeight: 'bold' }}>10% Instant Discount* on</Text>
                                <Text style={{ color: Color.Black, fontSize: 16, }}>Bank of Baroda Credit Card</Text>
                                <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'flex-end', paddingRight: 10 }}>
                                    <Text style={{ color: Color.Black, fontSize: 10, }}>*Terms & Conditon apply</Text>
                                </View>
                            </View >
                        </View>

                        <View style={{
                            width: Vw, backgroundColor: Color.White, marginTop: 15
                        }}>
                            <View style={{
                                width: Vw, height: Vw * 0.1, justifyContent: 'center',
                                alignItems: 'flex-start', paddingLeft: 10
                            }}>
                                <Text style={{ color: Color.Black, fontSize: 15 }}>TOP PICKS</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <List
                                    numColumns={2}
                                    data={TopPicksData}
                                    renderItem={TopPicksRen}
                                    keyExtractor={(item, index) => index.toString()}
                                    ItemSeparatorComponent={() => {
                                        return (
                                            <View style={{ margin: 5 }}>
                                            </View>
                                        )
                                    }} />
                            </View>

                        </View>
                        <View style={{
                            width: Vw, backgroundColor: Color.White, marginTop: 15
                        }}>
                            <View style={{
                                width: Vw, height: Vw * 0.1, justifyContent: 'center',
                                alignItems: 'flex-start', paddingLeft: 10
                            }}
                            ><Text style={{ color: Color.Black, fontSize: 15, marginTop: 20 }}>BEST OF BEAUTY & PERSONAL CARE</Text>
                            </View>
                            <View style={{ height: Vh * 0.32, width: Vw, }}>
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
                                    source={require('../assests/images/common/fashion.jpg')}
                                    style={{
                                        height: Vh * 0.4, width: Vw, marginTop: 5,
                                        alignItems: 'center', justifyContent: 'center'
                                    }}
                                    resizeMode='stretch'
                                >

                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                        <View style={{ backgroundColor: Color.White, width: Vw, height: Vh * 0.67, marginTop: 15 }}>
                            <View style={{
                                width: Vw, height: Vw * 0.1, justifyContent: 'center',
                                alignItems: 'flex-start', paddingLeft: 10
                            }}
                            ><Text style={{ color: Color.Black, fontSize: 15, }}>CATEGORIES TO BAG</Text>
                            </View>
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
                        <View style={{ backgroundColor: Color.yellow, width: Vw, height: Vh * 0.6, marginTop: 15 }}>

                            <View style={{
                                width: Vw, height: Vw * 0.1, justifyContent: 'center',
                                alignItems: 'flex-start', paddingLeft: 10, backgroundColor: Color.White
                            }}
                            ><Text style={{ color: Color.Black, fontSize: 15, marginTop: 20 }}>STYLES FOR EVERY ACTIVITY</Text>
                            </View>

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

                        </View>
                    </ScrollView>
                </View>

            </View >
        </SafeAreaView>
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
        height: Vh * 0.15
    },
    listStyle: {
        width: Vw,
        height: Vh * 0.15,
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

export default HomeScreen;