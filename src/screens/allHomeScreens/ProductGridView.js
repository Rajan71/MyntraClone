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
import Icon from "react-native-vector-icons/FontAwesome";
import { gridData } from '../../assests/data/gridData';


const ProductGridView = (props) => {
    const { name, headerTitle } = props.route.params;
    console.log('____name___', name)
    const [selectedIndex, setSelectedIndex] = useState([]);

    const filteredData = gridData.filter((item) =>
        item.name === name
    )

    const FilterData = (props) => {
        return (
            <TouchableOpacity style={{
                width: Vw * 0.33, height: Vh * 0.045, borderRightWidth: 1,
                alignItems: 'center', borderRightColor: Color.Gray,
                flexDirection: 'row', justifyContent: 'center'
            }}>
                <Icon name={props.icon1} size={20} color={Color.Gray} />
                <Icon name={props.icon2} size={20} color={Color.Gray} />
                <Text style={{ paddingLeft: 2 }}>{props.title}</Text>
            </TouchableOpacity>
        )
    }

    const lingRen = ({ item, index }) => {
        const selectItem = (index) => {
            if (selectedIndex.indexOf(index) > -1) {
                let newArray = selectedIndex.filter((indexObject) => indexObject !== index)
                setSelectedIndex(newArray);
            } else {
                setSelectedIndex([
                    ...selectedIndex, index
                ]);
            }

        };
        return (
            <TouchableOpacity onPress={() => props.navigation.navigate('ProductDetail', { key: item?.id || "" })}>

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
                        <TouchableOpacity onPress={() => selectItem(index)}>
                            <In name='heart' size={20} color={selectedIndex.indexOf(index) > -1 ? Color.red : Color.Black} />
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
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ backgroundColor: Color.gray1, flex: 1 }}>
                <Header
                    navigation={props.navigation}
                    icon='arrowleft'
                    title={headerTitle}
                    title1={<Text style={{ color: Color.Gray, paddingLeft: 10, fontSize: 11 }}>3019 Items</Text>}
                    icon3='search1'
                    icon2='hearto'
                    icon1='handbag' />

                <View style={{
                    marginTop: 1, width: Vw, height: Vh * 0.07,
                    backgroundColor: Color.White, alignItems: 'center', justifyContent: 'center'
                }}>
                    <TouchableOpacity style={{
                        width: Vw * 0.9, height: Vh * 0.06, backgroundColor: 'pink',
                        borderRadius: 5, alignItems: 'center', justifyContent: 'space-evenly',
                        flexDirection: 'row'
                    }}>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: Color.White }}>300 Off</Text>
                            <Text style={{ fontWeight: 'bold', color: Color.White, fontSize: 12 }}>MYNTRA 300</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: Color.White }}>Free Shipping</Text>
                            <Text style={{ fontWeight: 'bold', color: Color.White, fontSize: 12 }}>On your first order</Text>
                        </View>
                        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: Color.White }}>Genuine Products</Text>
                            <Text style={{ fontWeight: 'bold', color: Color.White, fontSize: 12 }}>& Easy returns</Text>
                        </View>

                    </TouchableOpacity>

                </View>
                <List
                    numColumns={2}
                    data={filteredData}
                    renderItem={lingRen}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={selectedIndex}
                    ItemSeparatorComponent={() => {
                        return (
                            <View style={{ margin: 1 }}>
                            </View>
                        )
                    }}
                />
                <View style={{
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

                </View>

            </View>
        </SafeAreaView>
    )
}

export default ProductGridView;