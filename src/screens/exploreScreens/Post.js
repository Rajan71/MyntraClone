import React, { useState } from 'react';
import {
    View, Text, TextInput, FlatList, StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';
import { Header } from '../../components';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { Card } from '../Studios';

const ImageComp = () => {
    return (
        <View style={{
            width: Vw, height: Vh * 0.28, marginTop: 10,
            alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly'
        }}>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                <Image source={require('../../assests/images/common/men.jpg')}
                    style={{ width: Vw * 0.45, height: Vh * 0.22 }} />
                <Text style={{ color: Color.red, fontSize: 12, marginTop: 5 }}>Edwin</Text>
                <Text style={{ color: Color.red, fontSize: 12, marginTop: 5 }}>28%</Text>

            </View>
            <View style={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                <Image source={require('../../assests/images/common/men.jpg')}
                    style={{ width: Vw * 0.45, height: Vh * 0.22 }} />
                <Text style={{ color: Color.red, fontSize: 12, marginTop: 5 }}>Edwin</Text>
                <Text style={{ color: Color.red, fontSize: 12, marginTop: 5 }}>28%</Text>
            </View>
        </View>
    )
}

const Post = () => {
    return (
        <View style={{ backgroundColor: Color.White, flex: 1 }}>
            <View style={{
                flexDirection: 'row', height: Vh * 0.06, width: Vw,
                alignItems: 'center', borderBottomWidth: 1, borderBottomColor: Color.gray
            }}>
                <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: Color.Gray }}>

                </View>
                <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                    <View style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text style={{
                            fontWeight: 'bold', paddingLeft: 5,
                            fontSize: 13
                        }}>Myntra Fashion Superstar</Text>
                        <Text style={{
                            paddingLeft: 5,
                            fontSize: 13
                        }}>Few minutes ago</Text>
                    </View>

                </View>
                <View style={{
                    height: 7, width: 7, borderRadius: 5, backgroundColor: Color.Gray
                    , marginLeft: 10, marginBottom: 12
                }}>

                </View>
                <Text style={{ color: Color.red, paddingLeft: 10, marginBottom: 12 }}>
                    Follow
                </Text>
            </View>
            <View style={{
                alignItems: 'center', justifyContent: 'center', marginTop: 20,

            }}>
                <Text>Which contestant do you relate to the most on MFS?</Text>
            </View>
            <View style={{
                alignItems: 'flex-start', justifyContent: 'center', height: Vh * 0.66,
                borderBottomColor: Color.Gray, borderBottomWidth: 1
            }}>
                <ImageComp />
                <ImageComp />
                <TouchableOpacity style={{
                    flexDirection: 'row', justifyContent: 'center',
                    alignItems: 'center', width: Vw * 0.35, height: Vh * 0.04, borderColor: Color.Gray,
                    borderWidth: 1, marginLeft: 10, borderRadius: Vh * 0.025,
                }}>
                    <Icon name='handbag' size={16} color={Color.Black} />
                    <Text style={{
                        fontWeight: 'bold', paddingLeft: 5,
                        fontSize: 12
                    }}>Shop Products</Text>
                </TouchableOpacity>
            </View>
            <Card />

        </View>
    )
}

export default Post;