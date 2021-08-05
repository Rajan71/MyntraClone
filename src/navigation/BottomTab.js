import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';
import { Color, Vw, Vh } from '../helper';
import Categories from '../screens/Categories';
import Explore from '../screens/Explore';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Studio from '../screens/Studios';
import In from "react-native-vector-icons/Entypo";
import Icn from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ion from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

const CustomTab = ({ label, src, focused }) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <View style={{ height: 30, justifyContent: 'center' }}>
                {src}
                {/* <Image source={src} style={{ height: 20, width: 20, backgroundColor: focused ? Color.red : Color.white }} /> */}
            </View>
            <Text style={{ fontSize: 10, textAlign: 'center', color: focused ? Color.red : Color.Black }}>{label}</Text>
        </View>
    )
}

const BottomTab = () => {
    console.log('alerttt____')
    return <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{

            showLabel: false,
            keyboardHidesTabBar: true,
            style: { height: Vh * 0.08, backgroundColor: Color.White }
        }}
    >
        <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTab
                        label='Home'
                        src={<In name='home' size={25} color={focused ? Color.red : Color.Black} />}
                        focused={focused} />
                )
            }}
        />
        <Tab.Screen
            name='Categories'
            component={Categories}
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTab
                        label='Categories'
                        src={<Icn name='category' size={25} color={focused ? Color.red : Color.Black} />}
                        focused={focused} />
                )
            }}
        />
        <Tab.Screen
            name='Studio'
            component={Studio}
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTab
                        label='Studio'
                        src={<Icon name='youtube-studio' size={25} color={focused ? Color.red : Color.Black} />}
                        focused={focused} />
                )
            }}
        />
        <Tab.Screen
            name='Explore'
            component={Explore}
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTab
                        label='Explore'
                        src={<Ion name='wpexplorer' size={25} color={focused ? Color.red : Color.Black} />}
                        focused={focused} />
                )
            }}
        />
        <Tab.Screen
            name='Profile'
            component={Profile}
            options={{
                tabBarIcon: ({ focused }) => (
                    <CustomTab
                        label='Profile'
                        src={<Ion name='user' size={25} color={focused ? Color.red : Color.Black} />}
                        focused={focused} />
                )
            }}
        />



    </Tab.Navigator>

}

export default BottomTab;