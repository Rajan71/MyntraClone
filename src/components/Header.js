import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Alert
} from 'react-native';
import { Color, Vw, Vh } from '../helper';
import In from "react-native-vector-icons/AntDesign";
import Ion from 'react-native-vector-icons/SimpleLineIcons';
import { useSelector } from "react-redux";


const Header = ({ navigation, icon, title, icon2, icon3, icon1, title1, }) => {
    const { cartItems } = useSelector(state => state.UpdateCartReducer)

    return (
        <View style={{
            height: Vh * 0.06, width: Vw, backgroundColor: Color.White,
            justifyContent: 'center', elevation: 10,
        }}>
            <View style={{
                height: Vh * 0.05, bottom: 5, width: Vw * 0.95, flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center', position: 'absolute',
                bottom: 5,
            }}>
                <View style={{
                    height: Vh * 0.05, width: Vw * 0.4, flexDirection: 'row',
                    alignItems: 'center', paddingLeft: 10,

                }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>

                        <In name={icon} size={25} />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ color: Color.Black, paddingLeft: 10, }}>{title}</Text>
                        {/* <Text style={{ color: Color.Gray, paddingLeft: 10, fontSize: 11 }}>{title1}</Text> */}
                        {title1}
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                    width: Vw * 0.2
                }}>
                    <TouchableOpacity>
                        <In name={icon3} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <In name={icon2} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('AddToBag')}>
                        <Ion name={icon1} size={20} />
                        {cartItems != '' ?
                            <View style={{
                                height: 15, width: 15, borderRadius: 8, backgroundColor: 'red',
                                position: 'absolute', top: 0, right: -5, alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ color: Color.White, fontSize: 12 }}>{cartItems}</Text>
                            </View> : null}

                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default Header;