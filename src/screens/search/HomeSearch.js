import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Alert,
    SafeAreaView
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import In from "react-native-vector-icons/AntDesign";
import Ion from "react-native-vector-icons/SimpleLineIcons";
import Icn from "react-native-vector-icons/FontAwesome";
import { Color, Vw, Vh } from '../../helper';
import ImagePicker from 'react-native-image-crop-picker';
import { StripBox } from '../Profile';
import { Avatar } from 'react-native-elements';
import { List } from '../../components';



const colors = [
    { src: require('../../assests/images/common/men.jpg'), id: 9 },
    { src: require('../../assests/images/common/kids.jpg'), id: 10 },
    { src: require('../../assests/images/common/home.jpg'), id: 11 },
    { src: require('../../assests/images/common/gadgets.jpg'), id: 12 },
    { src: require('../../assests/images/common/jwel.jpg'), id: 13 },
];


const HomeSearch = ({ navigation }) => {
    const [search, setSearch] = useState(false);
    const [pic, setPic] = useState(null)


    const GalleryPicker = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            setPic(image)
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

    const PhotoBtn = (props) => {
        return (
            <View style={{
                width: Vw * 0.4, height: Vh * 0.05,
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
                borderRadius: 5, borderColor: Color.Black, borderWidth: 1, marginTop: 10
            }}>
                {props.icon}

                <Text tyle={{ fontSize: 12 }}>{props.title}</Text>
            </View>
        )


    }
    const Diloge = () => {
        Alert.alert('Upload Story', 'Choose From',
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

    const NewArrival = ({ title }) => {
        return (
            <View style={{
                width: Vw, height: Vh * 0.31, alignItems: 'center', justifyContent: 'center',
                backgroundColor: Color.White, marginTop: 25
            }}>
                <View style={{
                    alignItems: 'flex-start', justifyContent: 'center',
                    height: Vh * 0.04, width: Vw * 0.9,
                }}>
                    <Text style={{ fontSize: 14 }}>{title}</Text>

                </View>
                <ImageBackground source={require('../../assests/images/common/beauty.webp')}
                    style={{ width: Vw, height: Vh * 0.25, flexDirection: 'row' }}>
                    <View style={{
                        width: Vw * 0.4, height: Vh * 0.25, justifyContent: 'center',
                        alignItems: 'flex-start', paddingLeft: 10
                    }}>
                        <Text style={{ color: Color.White, fontSize: 16, fontWeight: 'bold' }}>Check Now</Text>
                        <Text style={{ color: Color.White, fontSize: 22, fontWeight: 'bold' }}>New </Text>
                        <Text style={{ color: Color.White, fontSize: 22, fontWeight: 'bold' }}>Arrivals</Text>
                    </View>

                    <List
                        contentContainerStyle={{}}
                        horizontal
                        data={colors}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => {
                            return (
                                <View style={{ margin: 5 }}>
                                </View>
                            )
                        }} />

                </ImageBackground>

            </View>
        )
    }



    const renderItem = ({ item }) => {
        return (
            <View style={{ width: Vw * 0.4, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.src}
                    style={{
                        height: Vh * 0.23, width: Vw * 0.4, borderColor: Color.White,
                        borderWidth: 1
                    }} />

            </View>

        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#F7F7F7', flex: 1, }}>

                <View style={{
                    backgroundColor: Color.White,
                    width: Vw,
                    height: Vh * 0.06,
                    alignItems: 'center'
                }}>
                    <View style={{
                        height: Vh * 0.04, position: 'absolute', bottom: 4, flexDirection: 'row',
                        justifyContent: 'space-between', width: Vw, alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}
                            onPress={() => navigation.goBack()}>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'center', paddingRight: 5 }}>
                                <In name='arrowleft'
                                    size={20} color={Color.Black} style={{ paddingLeft: 10 }} />
                            </View>
                        </TouchableOpacity>

                        <View style={{
                            height: Vh * 0.05, width: Vw * 0.7, backgroundColor: '#EDEEEF',
                            borderRadius: 8,
                            alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'
                        }}>
                            <Icon name='search'
                                size={20} color={Color.Gray} style={{ paddingLeft: 10 }} />
                            <TextInput
                                style={{ paddingLeft: 5 }}
                                placeholder='Search for brands & products'
                                value={search}
                                onChangeText={() => setSearch()} />

                        </View>
                        <TouchableOpacity style={{ justifyContent: 'center' }}
                            onPress={() => Diloge()}>
                            <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                                <Ion name='camera'
                                    size={20} color={Color.Black} style={{ paddingLeft: 10 }} />
                            </View>
                        </TouchableOpacity>
                        <View style={{ alignItems: 'flex-start', justifyContent: 'center', paddingRight: 5 }}>
                            <Icon name='keyboard-voice'
                                size={20} color={Color.Black} style={{ paddingRight: 5 }} />
                        </View>
                    </View>


                </View>
                <ScrollView>
                    <View style={{
                        alignItems: 'center',
                        height: Vh * 0.14, width: Vw, backgroundColor: Color.White, marginTop: 2
                    }}>
                        <View style={{
                            alignItems: 'flex-start', justifyContent: 'center',
                            height: Vh * 0.03, width: Vw * 0.9, marginTop: 10
                        }}>
                            <Text style={{ fontSize: 12 }}>PHOTO SEARCH</Text>

                        </View>
                        <View style={{
                            width: Vw * 0.9, height: Vh * 0.05, flexDirection: 'row',
                            alignItems: 'center', justifyContent: 'space-between', marginTop: 10
                        }}>
                            <TouchableOpacity onPress={() => CameraPicker()}>
                                <PhotoBtn
                                    title='Click a photo'
                                    icon={<Ion name='camera'
                                        size={20} color={Color.Black} />} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => GalleryPicker()}>
                                <PhotoBtn
                                    title='Select a photo'
                                    icon={<Icn name='photo'
                                        size={20} color={Color.Black} />} />
                            </TouchableOpacity>
                        </View>

                    </View>
                    <NewArrival title='TRENDING ON MYNTRA' />

                    <View style={{
                        width: Vw, alignItems: 'center',
                        marginTop: 15
                    }}>
                        <View style={{
                            width: Vw * 0.9, height: Vw * 0.1, justifyContent: 'center',
                            alignItems: 'flex-start', backgroundColor: Color.White
                        }}>
                            <Text style={{ color: Color.Black, fontSize: 15 }}>POPULAR ON MYNTRA</Text>
                        </View>
                        <StripBox icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../../assests/images/common/men.jpg')}
                        />}
                            title={'Roadster'}
                            desc={'Tshirts'} />

                        <StripBox icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../../assests/images/common/men.jpg')}
                        />}
                            title={'HRX'}
                            desc={'Tshirts'} />

                        <StripBox icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../../assests/images/common/men.jpg')}
                        />}
                            title={'anouk'}
                            desc={'Tshirts'} />
                        <StripBox icon={<Avatar
                            rounded
                            size='medium'
                            source={require('../../assests/images/common/men.jpg')}
                        />}
                            title={'W'}
                            desc={'Tshirts'} />


                    </View>
                    <NewArrival title='JUST ARRIVED ON MYNTRA' />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeSearch;