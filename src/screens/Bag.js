import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    SafeAreaView,
    Alert
} from 'react-native';
import { Color, Vw, Vh } from '../helper';
import { Header } from '../components';
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-native-vector-icons/AntDesign";
import { removeUpdate } from '../redux/action/action';

const offersType = [
    { desc: '10% Instant Discount on ICICI Credit card up to 1000 off/-' },
    { desc: '10% Instant Cashback on Axis Credit card up to 1000 off/-' },
    { desc: '10% Instant Discount on Hdfc Credit card up to 1500 off/-' },
    { desc: '10% Instant Discount on ICICI Credit card up to 1000 off/-' },
    { desc: '10% Instant Discount on ICICI Credit card up to 1000 off/-' },
    { desc: '10% Instant Discount on ICICI Credit card up to 1000 off/-' },
]


const Bag = (props) => {
    // const { key } = props.route.params
    const { image, cartItems, deleteItem } = useSelector(state => state.UpdateCartReducer)
    console.log('remove____', deleteItem)
    const availableOffers = () => {
        return offersType.map((item, index) => {
            return <Offers desc={item.desc} />
        })
    }
    const dispatch = useDispatch()
    const deleteCart = () => {
        let bagDelete = {
            cartItems: '',
            image: '',
            deleteItem: ''
        }
        dispatch(removeUpdate(bagDelete))
    }

    const Offers = (props) => {
        return (
            <View style={{
                alignItems: 'center', justifyContent: 'center', flexDirection: 'row',
                width: Vw * 0.85, alignSelf: 'center',
            }}>
                <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: Color.Gray, }}></View>
                <Text style={{
                    color: Color.Black, paddingLeft: 5,
                    fontSize: 12, marginTop: 5
                }}>{props.desc}</Text>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: Color.gray1 }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title='SHOPPING BAG' />

                <View style={{
                    width: Vw, height: Vh * 0.04, backgroundColor: Color.White,
                    alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                    marginTop: 15
                }}>
                    <Text style={{
                        fontWeight: 'bold', paddingLeft: 15,
                        fontSize: 12
                    }}>Check delivery time & services</Text>
                    <Text style={{
                        fontWeight: 'bold', color: Color.btnColor, paddingRight: 15,
                        fontSize: 12
                    }}>ENTER PIN CODE</Text>
                </View>
                <View style={{
                    width: Vw, height: Vh * 0.2, backgroundColor: Color.White,
                    alignItems: 'flex-start', justifyContent: 'center',
                    marginTop: 10
                }}>
                    <Text style={{
                        fontWeight: 'bold', paddingLeft: 15,
                        fontSize: 14
                    }}>Available Offers</Text>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center',
                        marginTop: 10, width: Vw
                    }}>
                        {availableOffers()}
                    </View>
                </View>
                <View style={{
                    width: Vw, height: Vh * 0.08, alignItems: 'center',
                    justifyContent: 'space-between', flexDirection: 'row'
                }}>
                    <Text style={{ paddingLeft: 15 }}>1 ITEM</Text>
                    <Text style={{ paddingRight: 15 }}>Total:₹278 </Text>
                </View>
                <View>
                    <View style={{
                        width: Vw, height: Vh * 0.175,
                        justifyContent: 'center', flexDirection: 'row',
                        backgroundColor: Color.White
                    }}>
                        <Image source={image} style={{ width: Vw * 0.3, height: Vh * 0.14, marginTop: 10 }}
                            resizeMode='stretch' />
                        <View style={{
                            alignItems: 'flex-start', height: Vh * 0.14, marginTop: 10,
                            paddingLeft: 10,
                        }}>
                            <Text style={{ fontWeight: 'bold', }}>Madame Kurta</Text>
                            <Text style={{ color: Color.Gray, marginTop: 5 }}>Beautiful Kurta with handwork in blue..</Text>
                            <View style={{
                                alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',
                                width: Vw * 0.45, marginTop: 10
                            }}>
                                <TouchableOpacity style={{
                                    alignItems: 'center', justifyContent: 'center', width: Vw * 0.2,
                                    height: Vw * 0.07, backgroundColor: Color.Gray
                                }}>
                                    <Text>Size:L</Text>

                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    alignItems: 'center', justifyContent: 'center', width: Vw * 0.2,
                                    height: Vw * 0.07, backgroundColor: Color.Gray
                                }}>
                                    <Text>Qty:<Text></Text>{cartItems}</Text>
                                </TouchableOpacity>

                            </View>
                            <Text style={{ marginTop: 15 }}>₹179</Text>

                        </View>


                    </View>
                    <View style={{
                        justifyContent: 'center', alignItems: 'center', flexDirection: 'row',
                        width: Vw, height: Vh * 0.05, backgroundColor: Color.White,
                        borderTopColor: Color.gray1, borderTopWidth: 1
                    }}>
                        <TouchableOpacity style={{
                            justifyContent: 'center', alignItems: 'center', borderRightColor: Color.Gray,
                            width: Vw * 0.3, height: Vh * 0.04, borderRightWidth: 1
                        }}
                            onPress={() => deleteCart()} >
                            <Text>REMOVE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            justifyContent: 'center', alignItems: 'center',
                            width: Vw * 0.7, height: Vh * 0.04,
                        }}
                            onPress={() => deleteItem}>
                            <Text>MOVE TO WISHLIST</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{
                    width: Vw, height: Vh * 0.04, alignItems: 'flex-start',
                    justifyContent: 'center',
                }}>
                    <Text style={{ paddingLeft: 10 }}>COUPONS</Text>
                </View>
                <View style={{
                    width: Vw, height: Vh * 0.1, backgroundColor: Color.White,
                    alignItems: 'center',
                }}>
                    <View style={{
                        height: Vh * 0.04, width: Vw, alignItems: 'center',
                        flexDirection: 'row', justifyContent: 'space-between',

                    }}>
                        <View style={{
                            height: Vh * 0.04, width: Vw * 0.1, alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Icon name='tagso' size={25} style={{}} />
                        </View>
                        <View style={{
                            height: Vh * 0.04, width: Vw * 0.9, alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: Color.Gray
                        }}>
                            <Text style={{ fontWeight: 'bold' }}>Apply Coupon</Text>
                            <Icon name='right' size={15} style={{ paddingRight: 10 }} />
                        </View>


                    </View>
                    <View style={{
                        height: Vh * 0.06, width: Vw * 0.9, alignItems: 'flex-start',
                        justifyContent: 'center', alignSelf: 'flex-end'
                    }}>
                        <Text style={{ fontWeight: 'bold', color: Color.btnColor }}>Login to see best coupon for you</Text>
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Bag