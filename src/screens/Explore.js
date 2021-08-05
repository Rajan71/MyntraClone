import React from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from 'react-native';
import { Color, Vw, Vh } from '../helper';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Ion from "react-native-vector-icons/FontAwesome5";
import In from "react-native-vector-icons/AntDesign";
import Icn from "react-native-vector-icons/Feather";
import ScanCoupon from './exploreScreens/ScanCoupon';



export const Strip = ({ onPress, title, icon, name }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                height: Vh * 0.08, width: Vw, flexDirection: 'row', alignItems: 'center',
                backgroundColor: Color.White, marginTop: 2
            }}>
                {icon}
                <Text style={{ color: Color.Black, paddingLeft: 20 }}>{title}</Text>
            </View>
        </TouchableOpacity>

    )

}

export const HeaderBar = (props) => {
    return (
        <View style={{
            height: Vh * 0.06, width: Vw, backgroundColor: Color.White,
            justifyContent: 'center', elevation: 10,
        }}>
            <View style={{
                height: Vh * 0.05, bottom: 5, width: Vw * 0.95, flexDirection: 'row',

                justifyContent: 'space-between', position: 'absolute', alignItems: 'center'
            }}>
                <Text style={{ color: Color.Black, paddingLeft: 10 }}>{props.title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: Vw * 0.25, }}>
                    <Icn name={props.icon1} size={25} />
                    <Icn name={props.icon2} size={25} style={{ paddingLeft: 10 }} />
                    <Icn name={props.icon3} size={25} style={{ paddingLeft: 10 }} />
                </View>


            </View>

        </View>
    )
}

const Explore = (props) => {


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{
                backgroundColor: '#F7F7F7',
                flex: 1
            }}>
                <HeaderBar title='EXPLORE ON MYNTRA' />

                <ScrollView>
                    <Strip title={'Myntra Mall'}
                        icon={<Icon name='bag' size={25} color={Color.Gray} style={{ paddingLeft: 10 }} />}
                        onPress={() => props.navigation.navigate('MyntraMall')} />

                    <TouchableOpacity onPress={() => props.navigation.navigate('MyntraInsider')} >
                        <View style={{
                            height: Vh * 0.08, width: Vw, flexDirection: 'row', alignItems: 'center',
                            backgroundColor: Color.White, marginTop: 2
                        }}>
                            <Ion name='crown' size={25} color={Color.Gray} style={{ paddingLeft: 10 }} />
                            <View style={{
                                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                                width: Vw * 0.85,
                            }}>
                                <Text style={{ color: Color.Black, paddingLeft: 20 }}>Myntra Insider</Text>
                                <Text style={{ color: Color.red, fontWeight: 'bold' }}>ENROLL NOW</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Strip title={'Gift Cards'}
                        icon={<In name='gift' size={28} color={Color.Gray} style={{ paddingLeft: 10 }} />}
                        onPress={() => props.navigation.navigate('GiftCard')} />

                    <View style={{ marginTop: 4 }}>
                        <Strip title={'Play & Earn'}
                            icon={<In name='checkcircleo' size={28} color={Color.Gray} style={{ paddingLeft: 10 }} />} />

                    </View>
                    <Strip title={'Myntra Move'}
                        icon={<Icon name='plane' size={25} color={Color.Gray} style={{ paddingLeft: 10 }} />}
                        onPress={() => props.navigation.navigate('MyntraMove')} />

                    <View style={{ marginTop: 4 }}>
                        <Strip title={'Refer & Earn'}
                            icon={<In name='checkcircleo' size={28} color={Color.Gray} style={{ paddingLeft: 10 }} />}
                            onPress={() => props.navigation.navigate('ReferEarn')} />

                    </View>
                    <Strip title={'Scan for Coupon'}
                        icon={<In name='scan1' size={25} color={Color.Gray} style={{ paddingLeft: 10 }} />}
                    // onPress={() => props.navigation.navigate('ScanCoupon')} 
                    />

                    <Strip title={'Mynta Fashion SuperStar'}
                        icon={<In name='staro' size={25} color={Color.Gray} style={{ paddingLeft: 10 }} />}
                        onPress={() => props.navigation.navigate('MyntraSuperStar')} />

                    <Strip title={'Myntra Masterclass'}
                        icon={<In name='team' size={25} color={Color.Gray} style={{ paddingLeft: 10 }} />}
                        onPress={() => props.navigation.navigate('MyntraMaster')} />
                    {/* {Display()} */}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Explore;