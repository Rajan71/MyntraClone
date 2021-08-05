// import React, { useState } from 'react';
// import {
//     View, Text, TextInput, FlatList, StyleSheet,
//     Image,
//     TouchableOpacity,
//     ImageBackground,
//     ScrollView,
//     Linking
// } from 'react-native';
// import { Color, Vw, Vh } from '../../helper';
// import QRCodeScanner from 'react-native-qrcode-scanner';
// import { RNCamera } from 'react-native-camera';


// const ScanCoupon = (props) => {
//     const [read, setRead] = useState('')
//     onSuccess = e => {
//         setRead('success', e)
//     };

//     return (
//         <QRCodeScanner
//             onRead={onSuccess()}
//             flashMode={RNCamera.Constants.FlashMode.torch}
//             topContent={
//                 <Text style={styles.centerText}>
//                     QR code scanner
//                 </Text>
//             }
//             bottomContent={
//                 <TouchableOpacity style={styles.buttonTouchable}
//                     onPress={() => props.navigation.goBack()}>
//                     <Text style={styles.buttonText}>OK. Got it!</Text>
//                 </TouchableOpacity>
//             }
//         />
//     )

// }


// const styles = StyleSheet.create({
//     centerText: {
//         flex: 1,
//         fontSize: 18,
//         marginTop: 30,
//         color: '#777'
//     },
//     textBold: {
//         fontWeight: '500',
//         color: '#000'
//     },
//     buttonText: {
//         fontSize: 21,
//         color: 'rgb(0,122,255)'
//     },
//     buttonTouchable: {
//         padding: 16
//     }
// });

// export default ScanCoupon;