import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../helper';
import In from "react-native-vector-icons/AntDesign";
import { Strip, HeaderBar } from './Explore';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Login from './Login';
import { useDispatch, useSelector } from "react-redux";



export const StripBox = (props) => {

    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={{
                height: Vh * 0.08, width: Vw, flexDirection: 'row', alignItems: 'center',
                backgroundColor: Color.White, marginTop: 2
            }}>
                <View style={{ paddingLeft: 10 }}>
                    {props.icon}
                </View>
                <View style={{
                    flexDirection: 'row', justifyContent: 'space-between', width: '88%',
                    alignItems: 'center',
                }}>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 20, }}>
                        <Text style={{ color: Color.Black, fontWeight: 'bold' }}>{props.title}</Text>
                        <Text style={{ color: Color.Black, fontSize: 11, marginTop: 5 }}>{props.desc}</Text>
                    </View>
                    <In name={'right'} size={20} color={Color.Gray} />
                </View>
            </View>
        </TouchableOpacity>

    )

}

const Profile = (props) => {
    const [visible, setVisible] = useState(false)
    const { imageUrl } = useSelector(state => state.ProfilePicReducer)

    const Terms = (props) => {
        return (
            <View style={{ width: Vw, height: Vh * 0.05, alignItems: 'center', justifyContent: 'center', }}>
                <View style={{
                    alignItems: 'flex-start', justifyContent: 'center', width: Vw * 0.8,
                    height: Vh * 0.05
                }}>
                    <Text style={{ color: Color.Gray, fontWeight: 'bold', fontSize: 13 }}>{props.title}</Text>
                </View>
            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#F7F7F7', flex: 1, }}>

                <HeaderBar title='PROFILE' />
                <ScrollView>

                    <View style={{ backgroundColor: '#535868', width: Vw, height: Vh * 0.17 }}>

                    </View>
                    <View style={{
                        backgroundColor: Color.White, width: Vw, height: Vh * 0.1, alignItems: 'center',
                        justifyContent: 'space-between', flexDirection: 'row'
                    }}>
                        <View style={{
                            backgroundColor: Color.White, width: Vw * 0.3, height: Vw * 0.3, left: 10,
                            position: 'absolute', bottom: 20, alignItems: 'center', justifyContent: 'center',
                        }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('UserProfile')}>
                                {imageUrl != null ? <Image source={{ uri: imageUrl }}
                                    style={{ width: Vw * 0.22, height: Vw * 0.2 }} /> :
                                    <Image source={require('../assests/images/common/userpic.png')}
                                        style={{ width: Vw * 0.22, height: Vw * 0.2 }} />}

                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => setVisible(true)}>
                            <View style={{
                                backgroundColor: Color.btnColor, width: Vw * 0.5, height: Vh * 0.05,
                                left: Vw * 0.4, alignItems: 'center', justifyContent: 'center'
                            }}>
                                <Text style={{ color: Color.White, fontWeight: 'bold' }}>LOG IN/SIGN UP</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={{ marginTop: 8 }}>

                        <StripBox icon={<In name={'dropbox'} size={25} color={Color.Gray} />}
                            title={'Orders'}
                            desc={'check your order status'}
                            navigation={props.navigation}
                            onPress={() => props.navigation.navigate('Orders')} />

                    </View>
                    <StripBox icon={<Icon name={'help-circle-outline'} size={25} color={Color.Gray} />}
                        title={'Help Center'}
                        desc={'Help regarding your recent purchases'}
                        onPress={() => props.navigation.navigate('HelpCenter')} />

                    <StripBox icon={<In name={'hearto'} size={25} color={Color.Gray} />}
                        title={'Wishlist'}
                        desc={'Your most loved styles'}
                        onPress={() => props.navigation.navigate('Wishlist')} />

                    <View style={{ marginTop: 8 }}>

                        <Strip
                            title={'Scan for Coupon'}
                            icon={<In name='scan1' size={25} color={Color.Gray} style={{ paddingLeft: 10 }} />}
                        // onPress={() => props.navigation.navigate('ScanCoupon')} 
                        />
                    </View>
                    <Strip
                        title={'Refer & Earn'}
                        icon={<In name='checkcircleo' size={25} color={Color.Gray} style={{ paddingLeft: 10 }} />}
                        onPress={() => props.navigation.navigate('ReferEarn')} />
                    <View style={{ marginTop: 10, width: Vw, height: Vh * 0.2, backgroundColor: Color.White }}>
                        <Terms title='FAQs' />
                        <Terms title='ABOUT US' />
                        <Terms title='TERMS OF USE' />
                        <Terms title='PRIVACY POLICY' />
                    </View>
                    <View style={{ marginTop: 30, width: Vw, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ color: Color.Black, fontSize: 12 }}>App Version 4.2105.1</Text>
                    </View>

                </ScrollView>
                <Login
                    visible={visible} setVisible={setVisible} />
            </View>
        </SafeAreaView>
    )
}

export default Profile;