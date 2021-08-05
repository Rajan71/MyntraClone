import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';
import { List, Header } from '../../components';
import { Avatar } from 'react-native-elements';
import In from "react-native-vector-icons/AntDesign";


const LingData = [
    {
        src: require('../../assests/images/kurtas/kurta1.jpg'), brand: 'Jockey', desc: 'Men Stripped Sliders',
        price: '299', off: '25% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta2.jpg'), brand: 'Dollar', desc: 'Men Stripped Sliders',
        price: '299', off: '35% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta4.webp'), brand: 'ETC', desc: 'Men Stripped Sliders',
        price: '299', off: '64% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta5.jpg'), brand: 'DressBerry', desc: 'Men Stripped Sliders',
        price: '299', off: '20% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta1.jpg'), brand: 'Zivame', desc: 'Men Stripped Sliders',
        price: '299', off: '25% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta2.jpg'), brand: 'ABELINO', desc: 'Men Stripped Sliders',
        price: '299', off: '35% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta4.webp'), brand: 'Soie', desc: 'Men Stripped Sliders',
        price: '299', off: '64% Off'
    },
    {
        src: require('../../assests/images/lingerie/ling5.webp'), brand: 'ETC', desc: 'Men Stripped Sliders',
        price: '299', off: '20% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta5.jpg'), brand: 'Jockey', desc: 'Men Stripped Sliders',
        price: '299', off: '25% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta1.jpg'), brand: 'Zivame', desc: 'Men Stripped Sliders',
        price: '299', off: '35% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta2.jpg'), brand: 'Dollar', desc: 'Men Stripped Sliders',
        price: '299', off: '64% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta4.webp'), brand: 'ETC', desc: 'Men Stripped Sliders',
        price: '299', off: '20% Off'
    },
]

const RecommendedProducts = (props) => {
    const [color, setColor] = useState(false)



    const lingRen = ({ item, index }) => {
        return (
            <View style={{
                width: Vw * 0.5, height: Vh * 0.35, backgroundColor: Color.White,
                alignItems: 'center', justifyContent: 'center'
            }}>
                <Image source={item.src}
                    style={{ width: Vw * 0.47, height: Vh * 0.2, }}
                    resizeMode='stretch' />
                <View style={{
                    alignItems: 'center', width: Vw * 0.45, justifyContent: 'space-between',
                    flexDirection: 'row', marginTop: 20
                }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontWeight: 'bold', }}>{item.brand}</Text>
                        <Text style={{ color: Color.Gray, marginTop: 5 }}>{item.desc}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setColor(!color)}>
                        {color ? <In name='heart' size={20} color={Color.red} /> :
                            <In name='hearto' size={20} color={Color.Black} />
                        }
                    </TouchableOpacity>
                </View>
                <View style={{
                    flexDirection: 'row', alignItems: 'center', width: Vw * 0.45,
                    marginTop: 5
                }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.price}</Text>
                    <Text style={{ color: Color.red, paddingLeft: 5 }}>{item.off}</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: Color.gray1, flex: 1 }}>



                <List
                    numColumns={2}
                    data={LingData}
                    renderItem={lingRen}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={{ margin: 1 }}>
                            </View>
                        )
                    }}
                />
                {/* <View style={{
                width: Vw, height: Vh * 0.1, backgroundColor: Color.White,
                alignItems: 'center', borderTopColor: Color.gray1, borderTopWidth: 1
            }}>
                <View style={{
                    width: Vw, height: Vh * 0.05,
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                }}>
                    <FilterData
                        title='GENDER'

                    />

                    <FilterData
                        title='SORT'
                        icon1='long-arrow-down'
                        icon2='long-arrow-up'
                    />
                    <FilterData
                        title='FILTER'
                        icon1='filter'

                    />


                </View>

            </View> */}

            </View>
        </SafeAreaView>
    )
}

export default RecommendedProducts;