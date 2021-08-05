import React, { useRef, useState } from 'react';
import {
  View, Text, TextInput, FlatList, StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import { Color, Vw, Vh } from '../../helper';
import { Provider } from 'react-redux';
import HomeNav from './src/navigation/Navigation';
// import { PersistGate } from 'redux-persist/integration/react'
import { store } from './src/redux/config/Store';


const App = () => {
  return (
    <Provider store={store}>

      <HomeNav />

    </Provider>
  )
}

export default App;