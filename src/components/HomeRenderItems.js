import React from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';
import { Color, Vw, Vh } from '../helper';
import { Avatar } from 'react-native-elements';



export const renderItem = ({ item, index }) => {
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

export const beautyRender = ({ item, index }) => {
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

export const fashionRender = ({ item, index }) => {
    return <View style={{ ...styles.renStyle, flex: 1 }}>
        <Avatar
            rounded
            size={100}
            source={item.src}

        />

        <Text style={{ color: Color.Black, marginTop: 5 }}>{item.title}</Text>

    </View>
}

export const activityRender = ({ item, index }) => {
    return <View style={{ ...styles.renStyle, flex: 1 }}>
        <ImageBackground source={item.src}
            style={{ height: Vh * 0.18, width: Vw * 0.48, alignItems: 'center', justifyContent: 'center' }} >
            <View style={{ position: 'absolute', bottom: 10 }}>
                <Text style={{ color: Color.White, marginTop: 5 }}>{item.title}</Text>
            </View>
        </ImageBackground>
    </View>
}

export const TopPicksRen = ({ item, index }) => {

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


const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Color.gray1,
        flex: 1

    },
    renStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    listStyle: {
        width: Vw,
        height: Vh * 0.13,
        backgroundColor: Color.White
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
    dotStyle: { width: 7, borderRadius: 5, aspectRatio: 1, }

})
