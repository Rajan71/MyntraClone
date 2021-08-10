import React, { useRef, useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from 'react-native';
import { Color, Vw, Vh } from '../helper';
import { HeaderBar } from './Explore';
import Icn from "react-native-vector-icons/Feather";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Avatar } from 'react-native-elements';
import { AtSlide } from './HomeScreen';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/EvilIcons';
import { List } from '../components';


const avtarData = [
    { src: require('../assests/images/common/beauty.webp'), id: 1, title: 'Nilu Yuleema ' },
    { src: require('../assests/images/common/girls.webp'), id: 2, title: 'Swagata Dev' },
    { src: require('../assests/images/common/beauty.webp'), id: 3, title: 'Nupor' },
    { src: require('../assests/images/common/beauty.webp'), id: 4, title: 'Swagata Dev' },
    { src: require('../assests/images/common/beauty.webp'), id: 5, title: 'Swagata Dev' },
]
const brandsData = [
    { src: require('../assests/images/common/beauty.webp'), id: 6, title: 'Nilu Yuleema Thapa' },
    { src: require('../assests/images/common/girls.webp'), id: 7, title: 'Swagata Dev' },
    { src: require('../assests/images/common/beauty.webp'), id: 8, title: 'Nupor' },
    { src: require('../assests/images/common/beauty.webp'), id: 9, title: 'Swagata Dev' },
    { src: require('../assests/images/common/beauty.webp'), id: 10, title: 'Swagata Dev' },
]

export const cardData = [
    {
        src: require('../assests/images/common/men.jpg'), title: 'Food X Fashion', time: '1 day ago',
        src2: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', id: 11,
        desc: 'abababaabcjjfjffkgkgkndkgkgkggkmffglglffkfgjgnvgkgkgfkfkfkkfkgggnnbjggkgkg', isVideo: true
    },

    {
        src: require('../assests/images/common/beauty.webp'), title: 'Food X Fashion', time: '1 day ago',
        src2: require('../assests/images/common/beauty.webp'), id: 12,
        desc: 'abababaabcjjfjffkgkgkndkgkgkggkmffglglffkfgjgnvgkgkgfkfkfkkfkgggnnbjggkgkg', isVideo: false
    },

    {
        src: require('../assests/images/common/men.jpg'), title: 'Food X Fashion', time: '1 day ago',
        src2: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', id: 13,
        desc: 'abababaabcjjfjffkgkgkndkgkgkggkmffglglffkfgjgnvgkgkgfkfkfkkfkgggnnbjggkgkg', isVideo: true
    },

    {
        src: require('../assests/images/common/men.jpg'), title: 'Food X Fashion', time: '1 day ago',
        src2: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', id: 14,
        desc: 'abababaabcjjfjffkgkgkndkgkgkggkmffglglffkfgjgnvgkgkgfkfkfkkfkgggnnbjggkgkg', isVideo: true
    },

    {
        src: require('../assests/images/common/men.jpg'), title: 'Food X Fashion', time: '1 day ago',
        src2: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', id: 15,
        desc: 'abababaabcjjfjffkgkgkndkgkgkggkmffglglffkfgjgnvgkgkgfkfkfkkfkgggnnbjggkgkg', isVideo: true
    },

    {
        src: require('../assests/images/common/men.jpg'), title: 'Food X Fashion', time: '1 day ago',
        src2: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', id: 16,
        desc: 'abababaabcjjfjffkgkgkndkgkgkggkmffglglffkfgjgnvgkgkgfkfkfkkfkgggnnbjggkgkg', isVideo: true
    },
]

export const Card = () => {
    const Vid = useRef()
    const [color, setColor] = useState(null)
    return cardData.map((item, idex) => {
        return (
            <View style={{
                height: Vh * 0.5, width: Vw, backgroundColor: Color.White,
                justifyContent: 'center', alignItems: 'center', marginTop: 15
            }}>

                <View style={{
                    width: Vw, height: Vh * 0.07, justifyContent: 'flex-start',
                    alignItems: 'center', paddingLeft: 10, flexDirection: 'row',

                }}>
                    <Avatar
                        rounded
                        size='small'
                        source={item.src} />
                    <View style={{
                        alignItems: 'flex-start', justifyContent: 'center',
                        width: Vw * 0.3, height: Vw * 0.15,
                    }}>
                        <Text style={{ fontSize: 13, fontWeight: 'bold', paddingLeft: 10 }}>{item.title}</Text>
                        <Text style={{ fontSize: 12, paddingLeft: 10 }}>{item.time}</Text>

                    </View>
                    <View style={{
                        width: Vw * 0.3, height: Vw * 0.05, alignItems: 'center',
                        flexDirection: 'row', marginBottom: 14,
                    }}>
                        <View style={{ width: 7, borderRadius: 5, aspectRatio: 1, backgroundColor: Color.Gray }}>

                        </View>
                        <Text style={{ color: Color.red, fontWeight: 'bold', paddingLeft: 10 }}>Follow</Text>
                    </View>

                </View>
                <View style={{ height: Vh * 0.32, width: Vw, }}>

                    {item.isVideo == true ?
                        <Video source={{ uri: item.src2 }}
                            ref={Vid}
                            paused={false}
                            resizeMode="stretch"
                            repeat={true}
                            //    onBuffer={this.onBuffer}                
                            //    onError={this.videoError}              
                            style={{
                                height: Vh * 0.32, width: Vw,

                            }} /> :
                        <Image source={item.src2} style={{ height: Vh * 0.32, width: Vw, }} />}



                </View>
                <View style={{
                    width: Vw * 0.92, height: Vh * 0.07, justifyContent: 'space-between',
                    alignItems: 'center', paddingLeft: 10, flexDirection: 'row',
                }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity>
                            <Icon name={'heart'} size={30} color={color ? Color.Black : Color.red} />
                        </TouchableOpacity>
                        <Icon name={'share-google'} size={30} color={Color.Black} style={{ paddingLeft: 5 }} />
                    </View>

                    <Icon name={'share-google'} size={30} color={Color.Black}
                    />


                </View>
                <View style={{ width: Vw * 0.95, alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                    <Text>{item.desc}</Text>
                </View>

            </View>
        )
    })

}


const Studio = () => {

    const avtarRender = ({ item }) => {
        return (

            <View style={{
                width: Vw * 0.3, justifyContent: 'center', alignItems: 'center',

            }}>
                <Avatar
                    rounded
                    size={120}
                    source={item.src}
                />

                <Text style={{ color: Color.Black, marginTop: 5 }}>{item.title}</Text>


            </View>


        )
    }

    const brandRender = ({ item }) => {
        return (
            <View style={{ width: Vw * 0.45, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.src} style={{ height: Vh * 0.35, width: Vw * 0.48 }} />



            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#F7F7F7', flex: 1, }}>
                <HeaderBar
                    title='STUDIO'
                    icon1='clipboard'
                    icon2='settings'
                    icon3='search' />

                <View style={{
                    height: Vh * 0.1, width: Vw, backgroundColor: Color.White,
                    marginTop: 2, alignItems: 'center', justifyContent: 'center'
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Icn name='tv' size={30} color={Color.red} />
                        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Studio</Text>
                    </View>
                    <Text style={{ marginTop: 10 }}>Expert fashion tips from your favourite influencers</Text>
                </View>
                <ScrollView>
                    <View style={{
                        height: '6%', width: Vw, backgroundColor: Color.White,
                        marginTop: 15, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <List
                            horizontal
                            data={avtarData}
                            renderItem={avtarRender}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ margin: 5 }}>
                                    </View>
                                )
                            }} />
                        <AtSlide id={avtarRender.id} />
                    </View>
                    <View style={{
                        height: Vh * 0.4, width: Vw, backgroundColor: Color.White,
                        marginTop: 15, alignItems: 'center', justifyContent: 'center'
                    }}>
                        <TouchableOpacity>
                            <Image source={require('../assests/images/exercise/exc3.webp')} style={{ height: Vh * 0.4, width: Vw }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        height: Vh * 0.35, width: Vw, backgroundColor: Color.White,
                        marginTop: 15, alignItems: 'center'
                    }}>
                        <View style={{
                            width: Vw, height: Vw * 0.1, justifyContent: 'center',
                            alignItems: 'flex-start', paddingLeft: 10
                        }}>
                            <Text style={{
                                color: Color.Black, fontSize: 15,
                                fontWeight: 'bold'
                            }}>Brands Deals in Spotlight</Text>
                        </View>
                        <List
                            horizontal
                            data={brandsData}
                            renderItem={brandRender}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ margin: 10 }}>
                                    </View>
                                )
                            }} />

                        <AtSlide id={brandRender.id} />
                    </View>
                    <View style={{
                        height: Vh * 0.35, width: Vw, backgroundColor: Color.White,
                        marginTop: 15, alignItems: 'center'
                    }}>
                        <View style={{
                            width: Vw, height: Vw * 0.1, justifyContent: 'center',
                            alignItems: 'flex-start', paddingLeft: 10
                        }}>
                            <Text style={{
                                color: Color.Black, fontSize: 15,
                                fontWeight: 'bold'
                            }}>Trends By India's Top influencers</Text>
                        </View>
                        <List
                            horizontal
                            data={brandsData}
                            renderItem={brandRender}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ margin: 10 }}>
                                    </View>
                                )
                            }} />

                        <AtSlide id={brandRender.id} />
                    </View>
                    {Card()}


                </ScrollView>

            </View>
        </SafeAreaView>
    )

}

export default Studio;