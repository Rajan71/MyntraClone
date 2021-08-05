import React, { useState } from 'react';
import {
    View, Text, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';

import { Header } from '../../components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Post from './Post';
import RecommendedProducts from './RecommendedProducts';


const Tab = createMaterialTopTabNavigator();

const TopTab = () => {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: Color.red,
                inactiveTintColor: Color.Black,
                style: { width: Vw * 0.7 },
                indicatorStyle: {
                    backgroundColor: 'red'
                }
            }}>
            <Tab.Screen name="Post" component={Post} />
            <Tab.Screen name="Recommended Products" component={RecommendedProducts} />
        </Tab.Navigator>
    );
}

const MyntraMaster = (props) => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: Color.White, flex: 1 }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='Myntra Masterclass' />
                <ScrollView>
                    <View style={{
                        width: Vw, height: Vh * 0.5, alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <ImageBackground source={require('../../assests/images/superstar/purple.jpg')}
                            style={{
                                width: Vw, height: Vh * 0.5,
                                alignItems: 'center'
                            }}>

                            <Image source={require('../../assests/images/common/men.jpg')}
                                style={{ width: 200, height: 200, borderRadius: 100, marginTop: 50 }} />

                            <View style={{ paddingLeft: 10, width: Vw, alignItems: 'flex-start' }}>
                                <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: Color.White }}>

                                </View>
                                <View style={{
                                    alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                                    width: Vw * 0.9
                                }}>
                                    <Text style={{
                                        color: Color.White, fontSize: 22, fontWeight: 'bold',
                                        marginTop: 10
                                    }}>Myntra Masterclass</Text>
                                    <TouchableOpacity style={{
                                        width: Vw * 0.2, height: Vh * 0.035, backgroundColor: '#FF3E6D',
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Text style={{ color: Color.White, }}>+ FOLLOW</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{
                                    color: Color.White,

                                }}>@MyntraMasterclass</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                    <Text style={{ color: Color.White, fontSize: 16, fontWeight: 'bold' }}>75.5K  <Text style={{ color: Color.White, fontSize: 16, fontWeight: 'normal' }}>
                                        Followers</Text></Text>
                                    <View style={{
                                        height: 7, width: 7, borderRadius: 5, backgroundColor: Color.Gray
                                        , marginLeft: 5
                                    }}>

                                    </View>
                                    <Text style={{ color: Color.White, fontSize: 16, fontWeight: 'bold', paddingLeft: 5 }}>68 <Text style={{ color: Color.White, fontSize: 16, fontWeight: 'normal' }}>
                                        Posts</Text></Text>
                                </View>
                                <Text style={{ color: Color.White, marginTop: 5 }}>hiiiiiiiihghgjgggkgkgkggkgkggkghdfjfkfkgjdbdjdkdkdkdkkdk</Text>
                                <Text style={{ color: Color.White, }}>hiiiiiiiihghgjgggkgkgkggkgkggkghdfjfkfkgjdbdjdkdkdkdkkdk</Text>
                            </View>

                        </ImageBackground>

                    </View>
                    <TopTab />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default MyntraMaster;