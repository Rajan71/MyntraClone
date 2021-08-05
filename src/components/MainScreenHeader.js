import React, { useState } from 'react';
import {
    View, Text, StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { Color, Vw, Vh } from '../helper';
import Icon from 'react-native-vector-icons/EvilIcons';
import Ion from 'react-native-vector-icons/SimpleLineIcons';
import Login from '../screens/Login';
import { useSelector } from "react-redux";



const MainScreenHeader = (props) => {
    const [visible, setVisible] = useState(false)

    const { cartItems } = useSelector(state => state.UpdateCartReducer)
    const Iconss = (props) => {
        return (

            <Icon name={props.name} size={30} color={Color.Black} />

        )
    }

    return (
        <View style={styles.mainView}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.imageView}>
                        <Image source={require('../assests/images/common/MyntraLogo.png')}
                            style={{ height: 30, width: 30 }} />
                    </View>
                    <View style={styles.imageView}>
                        <Text style={{ color: Color.Black, fontSize: 12 }}>{props.title1}</Text>
                        <Text style={{ color: Color.yellow }}>{props.title2}</Text>
                    </View>
                </View>
                <View style={styles.iconView}>
                    <TouchableOpacity onPress={() => props.navigation('HomeSearch')}>
                        <Iconss name={props.icon1} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation('Notifications')}>
                        <Iconss name={props.icon2} size={20} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Iconss name={props.icon3} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => props.navigation('AddToBag')}>
                        <Ion name={props.icon4} size={20} color={Color.Black} />
                        <View style={{
                            height: 15, width: 15, borderRadius: 8, backgroundColor: 'red',
                            position: 'absolute', top: 0, right: -5, alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ color: Color.White, fontSize: 12 }}>{cartItems}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <Login
                    visible={visible} setVisible={setVisible} navigation={props.navigation} />

            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: Color.White,
        width: Vw,
        height: Vh * 0.06,
        borderBottomColor: Color.Gray,
        borderBottomWidth: 1

    },
    imageView: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: Vh * 0.06,
        paddingLeft: 5,




    },
    iconView: {
        flexDirection: 'row',
        paddingRight: 10,
        height: Vh * 0.06,

        width: Vw * 0.4,
        alignItems: 'center',
        justifyContent: 'space-evenly',


    }


})

export default MainScreenHeader;