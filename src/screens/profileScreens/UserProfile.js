import React, { useState } from 'react';
import {
    View, Text, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Alert
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';
import In from "react-native-vector-icons/AntDesign";
import ImagePicker from 'react-native-image-crop-picker';
import { Header } from '../../components';
import { TextInput } from 'react-native-paper';
import { useDispatch, useSelector } from "react-redux";
import { saveProfile } from '../../redux/action/action';





const UserProfile = (props) => {
    const [pic, setPic] = useState(null)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [hint, setHint] = useState('')
    const [gender, setGender] = useState('female')
    const { mobileNum } = useSelector(state => state.MobileNumReducer)


    const dispatch = useDispatch()

    const saveProfilePic = () => {
        try {
            let obj = {
                imageUrl: pic,
                // name: name,
                // email: email,
                // number: number,
                // hint: hint
            }
            if (pic == null) {
                alert('Error try again')
                console.log('image not found')
            }
            else { dispatch(saveProfile(obj)) }
        } catch (error) { console.log(error) }

    }

    const GalleryPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log('===>>>>>', image);
            setPic(image.path)
            saveProfilePic()
        });
    }

    const CameraPicker = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    }

    const Diloge = () => {
        Alert.alert('Choose From', '',
            [
                {
                    text: 'Camera',
                    onPress: () => { CameraPicker() }
                },

                {
                    text: 'Gallery',
                    onPress: () => { GalleryPicker() }
                },
                {
                    text: 'Cancel',
                    onPress: () => { }
                },
            ])
    }


    const Input = (props) => {
        return (
            <TextInput
                style={{
                    width: Vw * 0.8, height: Vh * 0.05, marginTop: 15,
                    alignSelf: 'center', backgroundColor: Color.White
                }}
                label={props.label}
                value={props.value}
                onChangeText={props.onChangeText}
                mode={props.mode}
            />
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: Color.White, flex: 1, }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='PROFILE'
                />
                <ScrollView>
                    <TouchableOpacity onPress={() => Diloge()}>
                        <View style={{ backgroundColor: '#535868', width: Vw, height: Vh * 0.17 }}>

                        </View>
                    </TouchableOpacity>

                    <View style={{
                        backgroundColor: Color.White, width: Vw, height: Vh * 0.1, alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <View style={{
                            backgroundColor: Color.White, width: Vw * 0.3, height: Vw * 0.3,
                            position: 'absolute', bottom: 30, alignItems: 'center', justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={() => Diloge()}>
                                {pic != null ? <Image source={{ uri: pic }}
                                    style={{ width: Vw * 0.3, height: Vw * 0.3 }} /> :
                                    <Image source={require('../../assests/images/common/userpic.png')}
                                        style={{ width: Vw * 0.22, height: Vw * 0.2 }} />}
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View style={{
                        width: Vw * 0.8, height: Vh * 0.07, borderWidth: 1, borderColor: Color.Gray, borderRadius: 5,
                        alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'
                    }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 12, paddingLeft: 10 }}>Mobile Number<Text style={{ fontSize: 12, color: Color.btnColor }}>*</Text></Text>
                            <Text style={{ fontSize: 14, paddingLeft: 10, marginTop: 5 }}>{mobileNum}</Text>
                        </View>
                        <Text style={{ fontSize: 14, color: Color.btnColor, paddingRight: 15 }}>CHANGE</Text>

                    </View>

                    <Input
                        label='Full Name'
                        value={name}
                        onChangeText={setName}
                        mode={'outlined'} />

                    <Input
                        label='Email'
                        value={email}
                        onChangeText={setEmail}
                        mode={'outlined'}
                    />
                    <View style={{
                        width: Vw * 0.8, height: Vh * 0.05, alignSelf: 'center',
                        marginTop: 15, flexDirection: 'row',
                    }}>
                        <TouchableOpacity onPress={() => setGender('Female')}>
                            <View style={{
                                alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                                width: Vw * 0.4, height: Vh * 0.05, borderWidth: 1, borderColor: Color.Gray
                            }}>
                                {gender === 'Female' && <In name='check' size={15} color={Color.btnColor} />}
                                <Text>Female</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setGender('Male')}>
                            <View style={{
                                alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                                width: Vw * 0.4, height: Vh * 0.05, borderWidth: 1, borderColor: Color.Gray
                            }}>
                                {gender === 'Male' && <In name='check' size={15} color={Color.btnColor} />}
                                <Text>Male</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <TouchableOpacity style={{
                        width: Vw * 0.8, height: Vh * 0.05, marginTop: 15, alignSelf: 'center',
                        borderWidth: 1, borderColor: Color.Gray, borderRadius: 5, alignItems: 'flex-start',
                        justifyContent: 'center', paddingLeft: 10
                    }}>
                        <Text style={{ color: Color.Gray }}>BirthDay</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: Vw * 0.8, height: Vh * 0.05, marginTop: 15, alignSelf: 'center',
                        borderWidth: 1, borderColor: Color.Gray, borderRadius: 5, alignItems: 'flex-start',
                        justifyContent: 'center', paddingLeft: 10
                    }}>
                        <Text style={{ color: Color.Gray }}>Location</Text>
                    </TouchableOpacity>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center',
                        alignSelf: 'center', marginTop: 15
                    }}>
                        <Text style={{ fontWeight: 'bold', }}>Alternate mobile number details</Text>
                        <Input

                            label='Mobile Number'
                            value={number}
                            onChangeText={() => setNumber()}
                            mode={'outlined'}
                        />
                        <Text style={{ fontSize: 12, color: Color.Gray, marginTop: 10 }}>This will help recover your account if needed</Text>
                    </View>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center',
                        alignSelf: 'center',
                    }}>

                        <Input

                            label='Hint name'
                            value={hint}
                            onChangeText={() => setHint()}
                            mode={'outlined'}
                        />
                        <Text style={{ fontSize: 12, color: Color.Gray, marginTop: 10 }}>Add a name that helps you identify alternate number</Text>
                    </View>
                    <TouchableOpacity style={{
                        width: Vw * 0.8, height: Vh * 0.05, marginTop: 15, alignSelf: 'center',
                        borderWidth: 1, borderColor: Color.Gray, borderRadius: 5, alignItems: 'center',
                        justifyContent: 'center', paddingLeft: 10
                    }}>
                        <Text>CHANGE PASSWORD</Text>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{
                    width: Vw, height: Vh * 0.1, alignItems: 'center',
                    borderTopColor: Color.Gray, borderTopWidth: 1
                }}>
                    <TouchableOpacity style={{
                        width: Vw * 0.8, height: Vh * 0.05, marginTop: 15, alignSelf: 'center',
                        borderRadius: 5, alignItems: 'center',
                        justifyContent: 'center', backgroundColor: Color.btnColor
                    }}>
                        <Text style={{ color: Color.White, fontWeight: 'bold' }}>SAVE DETAILS</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


export default UserProfile;