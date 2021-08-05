import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';
import { List, Header } from '../../components';
import In from "react-native-vector-icons/AntDesign";
import Ion from 'react-native-vector-icons/SimpleLineIcons';
import { gridData } from '../../assests/data/gridData';
import { useDispatch, useSelector } from "react-redux";
import { cartUpdate } from '../../redux/action/action';

const Details = [
    { src: require('../../assests/images/kurtas/kurta1.jpg') },
    { src: require('../../assests/images/kurtas/kurta1.jpg') },
    { src: require('../../assests/images/kurtas/kurta1.jpg') },
    { src: require('../../assests/images/kurtas/kurta1.jpg') },
    { src: require('../../assests/images/kurtas/kurta1.jpg') },
]

const Size = [
    { size: 'S' },
    { size: 'M' },
    { size: 'L' },
    { size: 'XL' },
    { size: 'XXL' },
]

const LingData = [
    {
        src: require('../../assests/images/kurtas/kurta1.jpg'), brand: 'Jockey', desc: 'Men Stripped Sliders',
        price: '₹299', off: '25% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta2.jpg'), brand: 'Dollar', desc: 'Men Stripped Sliders',
        price: '₹299', off: '35% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta4.webp'), brand: 'ETC', desc: 'Men Stripped Sliders',
        price: '₹299', off: '64% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta5.jpg'), brand: 'DressBerry', desc: 'Men Stripped Sliders',
        price: '₹299', off: '20% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta1.jpg'), brand: 'Zivame', desc: 'Men Stripped Sliders',
        price: '₹299', off: '25% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta2.jpg'), brand: 'ABELINO', desc: 'Men Stripped Sliders',
        price: '₹299', off: '35% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta4.webp'), brand: 'Soie', desc: 'Men Stripped Sliders',
        price: '₹299', off: '64% Off'
    },
    {
        src: require('../../assests/images/lingerie/ling5.webp'), brand: 'ETC', desc: 'Men Stripped Sliders',
        price: '₹299', off: '20% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta5.jpg'), brand: 'Jockey', desc: 'Men Stripped Sliders',
        price: '₹299', off: '25% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta1.jpg'), brand: 'Zivame', desc: 'Men Stripped Sliders',
        price: '₹299', off: '35% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta2.jpg'), brand: 'Dollar', desc: 'Men Stripped Sliders',
        price: '₹299', off: '64% Off'
    },
    {
        src: require('../../assests/images/kurtas/kurta4.webp'), brand: 'ETC', desc: 'Men Stripped Sliders',
        price: '₹299', off: '20% Off'
    },
]


const ProductDetail = (props) => {
    const [pin, setPin] = useState('')
    const { key } = props.route.params;
    const [size, setSize] = useState([])
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

    const detailsData = gridData.find(item => item.id === key);

    console.log("---detailsData------", detailsData)

    console.log('___counting___', size)

    // const removeItems = setCount(0)



    const updateItems = () => {
        setCount(count + 1)
        const image = detailsData.detail.src
        console.log("====>>>image", image)

    }

    const upadteCart = () => {
        let cart = {
            cartItems: count,
            image: detailsData.detail.src
        }
        dispatch(cartUpdate(cart))
    }


    const SimilarItems = ({ item, index }) => {

        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetail')}>
                <View style={{
                    width: Vw * 0.5, height: Vh * 0.35, backgroundColor: Color.White,
                    alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: Color.Gray
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

                    </View>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center', width: Vw * 0.45,
                        marginTop: 5
                    }}>
                        <Text style={{ fontWeight: 'bold' }}>{item.price}</Text>
                        <Text style={{ color: Color.red, paddingLeft: 5 }}>{item.off}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const Features = () => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: Color.Black, marginLeft: 10, marginTop: 5 }}>

                </View>
                <Text style={{ paddingLeft: 10, marginTop: 5 }}> Rapid Dry technology wicks sweat and dries fast</Text>
            </View>
        )
    }

    const MaterialType = ({ title, type }) => {
        return (
            <View style={{
                width: Vw * 0.48, height: Vh * 0.05, borderBottomColor: Color.Gray, borderBottomWidth: 1,
                height: Vh * 0.06, alignItems: 'flex-start', justifyContent: 'center',
            }}>
                <Text style={{ fontWeight: 'bold', paddingLeft: 10 }}>{title}</Text>
                <Text style={{ fontWeight: 'normal', paddingLeft: 10 }}>{type}</Text>
            </View>
        )
    }

    const sizeRen = ({ item, index }) => {
        const selectItem = (index) => {
            if (size.indexOf(index) > -1) {
                let newArray = size.filter((indexObject) => indexObject !== index)
                setSize(newArray);
            } else {
                setSize([
                    ...size, index
                ]);
            }

        };

        return (
            <TouchableOpacity onPress={() => selectItem(index)}>
                <View style={{
                    justifyContent: 'center', alignItems: 'center',
                    borderColor: Color.Black, borderWidth: 1,
                    borderRadius: 20, padding: 10, height: 35,
                    marginTop: 30, marginLeft: 10,
                    backgroundColor: size.indexOf(index) > -1 ? Color.btnColor : Color.White
                }}>
                    <Text style={{ fontWeight: 'bold' }}>{item.size}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    const detailRen = ({ item, index }) => {
        return (
            <View style={{
                width: Vw, height: Vh * 0.5,
                alignItems: 'flex-start',
                backgroundColor: Color.White
            }}>
                {console.log('______itemsss', item.detail.src)}
                <ImageBackground source={item.detail.src} style={{ width: Vw, height: Vh * 0.4 }}
                    resizeMode="stretch">

                </ImageBackground>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: Vw, height: Vh * 0.1, }}>
                    <Text style={{ fontWeight: "bold", marginTop: 10, paddingLeft: 10 }}>Jockey <Text style={{ fontWeight: "normal", }}>COMFORT PLUS Men White</Text></Text>
                    <Text style={{ fontWeight: "normal", paddingLeft: 10 }}>{item.detail.desc} </Text>
                    <Text style={{ fontWeight: "bold", paddingLeft: 10, marginTop: 5 }}>₹ 398</Text>
                    <Text style={{
                        fontWeight: "bold", paddingLeft: 10, color: 'green',
                        fontSize: 12
                    }}>inclusive of all taxes</Text>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: Color.gray1 }}>
                <Header

                    navigation={props.navigation}
                    icon='arrowleft'
                    icon3='search1'
                    icon2='hearto'
                    icon1='handbag' />
                <ScrollView>
                    <View style={{ width: Vw, height: Vh * 0.5, }}>
                        <List
                            horizontal
                            data={gridData}
                            renderItem={detailRen}
                            keyExtractor={(item, index) => index.toString()} />
                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.1, backgroundColor: Color.White, alignItems: 'flex-start',
                        justifyContent: 'center', marginTop: 15
                    }}>
                        <Text style={{ fontWeight: "bold", paddingLeft: 10, }}>Easy 30 days returns and exchanges</Text>
                        <Text style={{ paddingLeft: 10, }}>Choose to return or exchange for a different size (if available) within 30 days.</Text>
                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.2, backgroundColor: Color.White, alignItems: 'flex-start',
                        justifyContent: 'center', marginTop: 15
                    }}>
                        <View style={{
                            justifyContent: 'space-between', flexDirection: 'row', width: Vw,

                        }}>
                            <Text style={{ fontWeight: "bold", paddingLeft: 10, }}>Select Size (UK Size)</Text>
                            <Text style={{
                                fontWeight: "bold", color: Color.red, paddingRight: 10,
                                fontSize: 13
                            }}>Size Chart</Text>
                        </View>
                        <View style={{ width: Vw }}>
                            <List
                                horizontal
                                data={Size}
                                renderItem={sizeRen}
                                keyExtractor={(item, index) => index.toString()}
                                ItemSeparatorComponent={() => {
                                    return (
                                        <View style={{ margin: 5 }}>
                                        </View>
                                    )
                                }} />
                        </View>
                        <View style={{
                            alignItems: 'center', justifyContent: 'space-evenly', width: Vw, flexDirection: 'row',
                            marginTop: 10
                        }}>
                            <TouchableOpacity style={{
                                width: Vw * 0.47, justifyContent: 'center', alignItems: 'center',
                                borderColor: Color.Black, borderWidth: 1, height: Vh * 0.05, marginTop: 10,
                                flexDirection: 'row'
                            }}

                            //  props.navigation.navigate('Bag')}
                            >
                                <In name='hearto' size={20} style={{ paddingRight: 10 }} />
                                <Text style={{ fontWeight: 'bold', }}>WISHLIST</Text>

                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: Vw * 0.47, justifyContent: 'center', alignItems: 'center',
                                borderColor: Color.btnColor, borderWidth: 1, height: Vh * 0.05, marginTop: 10,
                                flexDirection: 'row', backgroundColor: Color.btnColor
                            }}
                                onPress={() => { upadteCart(); updateItems() }}>
                                <Ion name='handbag' size={20} style={{ paddingRight: 10 }} color={Color.White} />
                                <Text style={{ fontWeight: 'bold', color: Color.White }}>ADD TO BAG</Text>

                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{
                        width: Vw, marginTop: 15, backgroundColor: Color.White,

                    }}>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: Vw, }}>

                            <MaterialType title='Fabric'
                                type='Polyester' />

                            <MaterialType title='Sport'
                                type='Running' />
                        </View>
                        <MaterialType title='Sport'
                            type='Running' />

                        <Text style={{ fontWeight: 'bold', paddingLeft: 10, marginTop: 20 }}>
                            Product Details
                        </Text>
                        <Text style={{ paddingLeft: 10, marginTop: 5 }}>
                            Swap your usual Tishirt with the HRX Men's Running T-shirt and feel your run become easier and more
                            comfortable. Designed with Rapid Dry TEchnology, it wicks away sweat to keep you cool and dry from
                            start to finish.
                        </Text>
                        <Text style={{ fontWeight: 'bold', paddingLeft: 10, marginTop: 20 }}>
                            Features
                        </Text>
                        <Features />
                        <Features />
                        <Features />
                        <Features />
                        <Features />
                        <Text style={{ fontWeight: 'bold', paddingLeft: 10, marginTop: 20 }}>
                            Material & Care
                        </Text>
                        <Text style={{ paddingLeft: 10, marginTop: 5 }}>100% polyester</Text>
                        <Text style={{ paddingLeft: 10, marginTop: 5, marginBottom: 10 }}>Machine-wash</Text>
                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.16, backgroundColor: Color.White,
                        alignItems: 'flex-start', marginTop: 15
                    }}>
                        <Text style={{
                            paddingLeft: 10, marginTop: 10, fontWeight: 'bold',
                            fontSize: 15
                        }}> Check Delivery</Text>
                        <TextInput
                            style={{
                                width: Vw * 0.95, marginLeft: 10, borderColor: Color.Gray,
                                borderWidth: 1, height: Vh * 0.05, paddingLeft: 10, marginTop: 10
                            }}
                            value={pin}
                            onChangeText={setPin}
                            placeholder='Enter PIN Code'
                            placeholderTextColor={Color.btnColor}
                        />
                        <Text style={{
                            paddingLeft: 10, marginTop: 10,
                        }}>Pay on delivery might be available</Text>
                        <Text style={{
                            paddingLeft: 10, marginTop: 5,

                        }}>Try & Buy might be available</Text>

                    </View>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center', marginTop: 15,
                        backgroundColor: Color.White, width: Vw, height: Vh * 0.46,
                    }}>
                        <View style={{
                            width: Vw, height: Vw * 0.1, justifyContent: 'center',
                            alignItems: 'flex-start', paddingLeft: 10, backgroundColor: Color.White
                        }}
                        ><Text style={{
                            color: Color.Black, fontSize: 15, marginTop: 20,
                            fontWeight: 'bold'
                        }}>View Similar</Text>
                        </View>
                        <List
                            contentContainerStyle={{ marginTop: 10, paddingLeft: 10 }}
                            horizontal
                            data={LingData}
                            renderItem={SimilarItems}
                            keyExtractor={(item, index) => index.toString()}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ margin: 5 }}>
                                    </View>
                                )
                            }} />
                    </View>
                    <View style={{
                        width: Vw, height: Vh * 0.2, backgroundColor: Color.White,
                        alignItems: 'flex-start', marginTop: 15
                    }}>
                        <Text style={{ paddingLeft: 10, marginTop: 10, fontWeight: 'bold' }}>More Information</Text>
                        <Text style={{ paddingLeft: 10, marginTop: 15 }}>Product Code: 80062</Text>
                        <Text style={{ paddingLeft: 10, marginTop: 15, fontWeight: 'bold', fontSize: 13 }}>Manufacturer Detail</Text>
                        <Text style={{ paddingLeft: 10, marginTop: 5 }}>PAGE INDUSTRIES LIMITED, NEW DELHI-110011</Text>
                        <Text style={{ paddingLeft: 10, marginTop: 15, fontWeight: 'bold', fontSize: 13 }}>Country of Origin</Text>
                        <Text style={{ paddingLeft: 10, marginTop: 5 }}>India</Text>
                    </View>
                    <View style={{ width: Vw, height: Vh * 0.1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ marginTop: 10 }}>~~</Text>
                        <Text style={{ marginTop: 5, fontSize: 12 }}>"Style is a way to say who you are without having to speak."</Text>
                        <Text style={{ marginTop: 5, fontSize: 12 }}>Rachel Zoe</Text>
                    </View>
                    {/* <View style={{ backgroundColor: Color.White, width: Vw, flex: 1 }}>

                </View> */}
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default ProductDetail;