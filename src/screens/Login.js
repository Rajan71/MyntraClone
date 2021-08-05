import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView,
    KeyboardAvoidingView,
    Modal
} from 'react-native';
import In from "react-native-vector-icons/AntDesign";
import { Color, Vw, Vh } from '../helper';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from "react-redux";
import { saveMobileNum } from '../redux/action/action';


const Login = ({ visible, setVisible, navigation }) => {

    const [num, setNum] = useState('+91')
    const dispatch = useDispatch()

    const getMobileNum = () => {
        console.log('______>>>>', num)
        let getNumber = {
            mobileNum: num
        }
        if (num == '') {
            alert('mobile no not found')
        }
        else { dispatch(saveMobileNum(getNumber)) }

    }

    const phoneSignIn = async () => {
        const confirmation = await auth().signInWithPhoneNumber(num);
        console.log('---Conf---', confirmation)
        if (confirmation._auth._authResult) {
            console.log('===>>>', confirmation)
            navigation('Verification', { otpConfirm: confirmation })
        }
        else {
            alert('internal error')
        }
        // setConfirm(confirmation);
        // alert(num)
    }
    return (
        // <KeyboardAvoidingView
        //     behavior={Platform.OS === "ios" ? "padding" : "height"}
        //     style={{ flex: 1 }}
        //     enabled={true}>

        <Modal
            visible={visible}
            animationType='slide'
            transparent={true}
        >
            <View style={{ flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.7)', justifyContent: 'flex-end' }}>
                <View style={{
                    width: Vw, height: Vh * 0.55, alignItems: 'center',
                    backgroundColor: Color.White, justifyContent: 'center'
                    // marginTop: Vw * 0.9
                }}>
                    <View style={{
                        marginTop: 30, width: Vw * 0.85,
                        height: Vh * 0.05, flexDirection: 'row', justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Image source={require('../assests/images/common/MyntraLogo.png')}
                            style={{ height: 35, width: 35 }} />
                        <TouchableOpacity onPress={() => setVisible(!visible)}>
                            <In name='close'
                                size={25} color={Color.Black} style={{}} />
                        </TouchableOpacity>


                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.18, alignItems: 'center',
                        justifyContent: 'center', flexDirection: 'row',
                    }}>
                        <Image source={require('../assests/images/common/MyntraLogo.png')}
                            style={{ height: Vh * 0.15, width: Vw * 0.35 }} />
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: '#AE0000', fontSize: 16, fontWeight: 'bold' }}>Sign Up & Get 300 Off</Text>
                            <Text style={{ color: '#AE0000', fontSize: 16, fontWeight: 'bold' }}>+ Free Shipping on your first order </Text>
                            <TouchableOpacity style={{
                                width: Vw * 0.3, backgroundColor: '#AE0000', height: Vw * 0.07, marginTop: 10,
                                justifyContent: 'center', alignItems: 'center', borderRadius: 5
                            }}>
                                <Text style={{ color: Color.White, fontSize: 14, fontWeight: 'bold' }}>EXPLORE</Text>

                            </TouchableOpacity>



                        </View>

                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', width: Vw * 0.85, flexDirection: 'row' }}>
                            <Text style={{ color: Color.Black, fontSize: 20, fontWeight: 'bold' }}>Login</Text>
                            <Text style={{ color: Color.Black, fontSize: 16, paddingLeft: 5 }}>or</Text>
                            <Text style={{ color: Color.Black, fontSize: 20, fontWeight: 'bold', paddingLeft: 5 }}>SignUp</Text>
                        </View>
                        <View style={{
                            justifyContent: 'center', alignItems: 'flex-start', width: Vw * 0.85, height: Vh * 0.05,
                            marginTop: 20, borderColor: Color.Black, borderWidth: 1
                        }}>
                            <TextInput
                                style={{ paddingLeft: 5 }}
                                placeholder='+91 | Mobile Number*'
                                value={num}
                                onChangeText={(num) => setNum(num)} />

                        </View>
                        <View style={{ marginTop: 20, flexDirection: 'row', width: Vw * 0.85, height: Vh * 0.05, }}>
                            <Text style={{ color: Color.Black, fontSize: 12, }}>By continuing, I agree to the</Text>
                            <Text style={{ color: '#FF3E6C', fontSize: 12, paddingLeft: 5, fontWeight: 'bold' }}>Terms of Use</Text>
                            <Text style={{ color: Color.Black, fontSize: 12, paddingLeft: 5 }}>&</Text>
                            <Text style={{ color: '#FF3E6C', fontSize: 12, paddingLeft: 5, fontWeight: 'bold' }}>Privacy Policy</Text>

                        </View>
                        <TouchableOpacity style={{
                            width: Vw * 0.85, backgroundColor: '#FF3E6C', height: Vh * 0.05, marginTop: 10,
                            justifyContent: 'center', alignItems: 'center', borderRadius: 5
                        }}
                            onPress={() => { phoneSignIn(num); getMobileNum(num) }}>
                            <Text style={{ color: Color.White, fontSize: 14, fontWeight: 'bold' }}>CONTINUE</Text>

                        </TouchableOpacity>
                        <View style={{ marginTop: 30, flexDirection: 'row', width: Vw * 0.85, height: Vh * 0.06, }}>
                            <Text style={{ color: Color.Black, fontSize: 12, }}>Having trouble logging in?</Text>
                            <Text style={{ color: '#FF3E6C', fontSize: 12, paddingLeft: 5, fontWeight: 'bold' }}>Get help</Text>


                        </View>

                    </View>


                </View>
            </View>
        </Modal>
        // </KeyboardAvoidingView>
    )
}

export default Login;