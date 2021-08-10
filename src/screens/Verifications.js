import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import {
    View, Text, FlatList, StyleSheet,
    SafeAreaView,
    TextInput
} from 'react-native';
import { Color, Vw, Vh } from '../helper';
import { Header } from '../components';


const NumberInput = (props) => {

    return (
        <TextInput
            style={{
                width: Vw * 0.08, height: Vh * 0.05,
                backgroundColor: Color.White, borderWidth: 1, borderColor: Color.Gray
            }}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={props.onChangeText}
            textAlign={props.textAlign}
            maxLength={props.maxLength}
            onSubmitEditing={props.onSubmitEditing}
            returnKeyType={props.returnKeyType}
            ref={props.inputRef}
            keyboardType={props.keyboardType}

        />
    )
}
const Verification = (props) => {
    const { otpConfirm } = props.route.params;
    console.log('===otp===', otpConfirm)

    const [otp, setOtp] = useState('')
    const [otp1, setOtp1] = useState('')
    const [otp2, setOtp2] = useState('')
    const [otp3, setOtp3] = useState('')
    const [otp4, setOtp4] = useState('')
    const [otp5, setOtp5] = useState('')
    const ref1 = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()

    let secretCode = otp + otp1 + otp2 + otp3 + otp4 + otp5

    useEffect(() => {

        console.log('___secret___', secretCode)
        // secretCode
    }, [otp, otp1, otp2, otp3, otp4, otp5])

    async function confirmCode() {
        try {
            await otpConfirm.confirm(secretCode);
            props.navigation.navigate('BottomTab')

        } catch (error) {
            alert('Enter the correct OTP')
        }
    }


    const VerifiyText = (props) => {

        return (
            <Text style={{ marginTop: 30, fontSize: 12, }}>{props.text1}
                <Text style={{ color: Color.btnColor, fontWeight: 'bold' }}> {props.text2}</Text></Text>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: Color.White }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft' />

                <View style={{ flex: 1, borderTopColor: Color.gray1, borderTopWidth: 1, }}>
                    <View style={{
                        paddingLeft: 30, alignItems: 'flex-start',
                        justifyContent: 'center', marginTop: 50
                    }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Verify with OTP</Text>
                        <Text style={{ fontSize: 12, color: Color.Gray, marginTop: 10 }}>Sent via SMS to 8445434438</Text>
                        <View style={{
                            alignItems: 'center', justifyContent: 'space-between', marginTop: 30,
                            width: Vw * 0.8, flexDirection: 'row'
                        }}>
                            <NumberInput
                                placeholder=''
                                value={otp}
                                onChangeText={setOtp}
                                textAlign='center'
                                maxLength={1}
                                inputRef={ref1}
                                onSubmitEditing={() => ref2.current.focus()}
                                returnKeyType="next"
                                keyboardType="numeric"
                            />
                            <NumberInput
                                placeholder=''
                                value={otp1}
                                onChangeText={setOtp1}
                                textAlign='center'
                                maxLength={1}
                                inputRef={ref2}
                                onSubmitEditing={() => ref3.current.focus()}
                                returnKeyType="next"
                                keyboardType="numeric"
                            />
                            <NumberInput
                                placeholder=''
                                value={otp2}
                                onChangeText={setOtp2}
                                textAlign='center'
                                maxLength={1}
                                inputRef={ref3}
                                onSubmitEditing={() => ref4.current.focus()}
                                returnKeyType="next"
                                keyboardType="numeric"
                            />
                            <NumberInput
                                placeholder=''
                                value={otp3}
                                onChangeText={setOtp3}
                                textAlign='center'
                                maxLength={1}
                                inputRef={ref4}
                                onSubmitEditing={() => ref5.current.focus()}
                                returnKeyType="next"
                                keyboardType="numeric"
                            />
                            <NumberInput
                                placeholder=''
                                value={otp4}
                                onChangeText={setOtp4}
                                textAlign='center'
                                maxLength={1}
                                inputRef={ref5}
                                onSubmitEditing={() => ref6.current.focus()}
                                returnKeyType="next"
                                keyboardType="numeric"
                            />
                            <NumberInput
                                placeholder=''
                                value={otp5}
                                onChangeText={setOtp5}
                                textAlign='center'
                                maxLength={1}
                                inputRef={ref6}
                                onSubmitEditing={() => confirmCode()}
                                returnKeyType="done"
                                keyboardType="numeric"
                            />
                        </View>
                        <VerifiyText
                            text1="Didn't recieve OTP?"
                            text2="Resent OTP" />
                        <VerifiyText
                            text1="Log in using"
                            text2="Password" />
                        <VerifiyText
                            text1="Having trouble logging in?"
                            text2="Get help" />

                    </View>

                </View>

            </View>
        </SafeAreaView>
    )
}

export default Verification;