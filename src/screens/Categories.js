import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    LayoutAnimation, Platform, UIManager
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";
import { Color, Vw, Vh } from '../helper';
import { womenData, westernData, customData, } from '../components';



const Categories = () => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');

    const MainList = () => {
        return customData.map((item, index) => {
            return <AccordianCustom name={item.name}
                src={item.src}
                desc={item.desc}
                backgroundColor={item.backgroundColor} />
        })
    }

    const SubList = () => {
        return westernData.map((item, index) => {

            return <View style={{
                paddingLeft: 20,
                width: Vw,
            }}>
                <TouchableOpacity style={{
                    height: Vh * 0.05, width: Vw * 0.9,
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

                }}>
                    <Text style={{ Color: Color.Black }}>{item.title}</Text>
                    {/* <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                        size={25} color={Color.Black} style={{}} /> */}
                </TouchableOpacity>
            </View>
        })
    }

    const ListItem = () => {

        return womenData.map((item, index) => {

            return <View style={{
                paddingLeft: 20,
                width: Vw,
            }}>
                <TouchableOpacity style={{
                    height: Vh * 0.05, width: Vw * 0.9,
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',

                }}
                    onPress={() => setOpen(!open)}>
                    <Text style={{ Color: Color.Black }}>{item.title}</Text>
                    <Icon name={open ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                        size={25} color={Color.Black} style={{}} />
                </TouchableOpacity>
                {open ? <SubList /> : null}
            </View>
        })

    }

    const AccordianCustom = (props) => {
        const [expanded, setExpanded] = useState(false);

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
        const toggleExpand = () => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
            setExpanded(!expanded);
        }

        return (
            <View style={{ marginBottom: 1, width: Vw, height: Vh * 0.12, }}>
                <TouchableOpacity style={{ ...styles.row, backgroundColor: props.backgroundColor }} onPress={toggleExpand}>
                    <View style={{ paddingLeft: 20, }}>
                        <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', }}>
                            <Text style={{ color: Color.Black, fontSize: 20, fontWeight: "bold" }}>{props.name}</Text>
                            <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
                                size={20} color={Color.Gray} style={{ paddingLeft: 10 }} />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'flex-start', marginTop: 5 }}>
                            <Text style={{ color: Color.Black, fontSize: 12, }}>{props.desc}</Text>
                        </View>
                    </View>
                    <Image source={props.src}
                        style={{ height: Vh * 0.12, width: Vw * 0.3 }}
                        resizeMode='stretch' />

                </TouchableOpacity>
                <View>
                    {
                        (expanded) &&
                        ListItem()

                    }
                </View>
            </View>
        )

    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: '#F7F7F7' }}>
                <View style={{
                    backgroundColor: Color.White,
                    width: Vw,
                    height: Vh * 0.06,
                    alignItems: 'center'
                }}>
                    <View style={{
                        height: Vh * 0.05, width: Vw * 0.95, backgroundColor: '#EDEEEF',
                        position: 'absolute', bottom: 4, borderRadius: 8,
                        flexDirection: 'row', alignItems: 'center'
                    }}>
                        <Icon name='search'
                            size={25} color={Color.Black} style={{ paddingLeft: 10 }} />
                        <TextInput
                            style={{ paddingLeft: 5 }}
                            placeholder='Search Myntra'
                            value={search}
                            onChangeText={() => setSearch()} />

                    </View>

                </View>
                <ScrollView style={{ flex: 1 }}>

                    {MainList()}

                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Categories;






const styles = StyleSheet.create({

    title: {
        fontSize: 16,
        color: "#fff", flex: 1
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // minHeight: 50,
        height: Vh * 0.12,
        paddingLeft: 5,
        paddingRight: 20,
        // backgroundColor: '#E9D5CD',
    },
});