// import 'react-÷native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Color, Vw, Vh } from '../helper';
import Categories from '../screens/Categories';
import Explore from '../screens/Explore';
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import Studio from '../screens/Studios';
import BottomTab from './BottomTab';
import HomeSearch from '../screens/search/HomeSearch';
import Notifications from '../screens/search/Notifications';
import ShoppingBag from '../screens/ShoppingBag';
import Men from '../screens/allHomeScreens/Men';
import Women from '../screens/allHomeScreens/Women';
import FashionStore from '../screens/allHomeScreens/FashionStore';
import ProductGridView from '../screens/allHomeScreens/ProductGridView';
import BeautyProducts from '../screens/allHomeScreens/BeautyProducts';
import MyntraMall from '../screens/exploreScreens/MyntraMall';
import MyntraInsider from '../screens/exploreScreens/MyntraInsider';
import GiftCard from '../screens/allHomeScreens/GiftCard';
import MyntraMove from '../screens/allHomeScreens/MyntraMove';
import ReferEarn from '../screens/allHomeScreens/ReferEarn';
import MyntraSuperStar from '../screens/exploreScreens/MyntraSuperStar';
import Post from '../screens/exploreScreens/Post';
import RecommendedProducts from '../screens/exploreScreens/RecommendedProducts';
import MyntraMaster from '../screens/exploreScreens/MyntraMaster';
// import ScanCoupon from '../screens/exploreScreens/ScanCoupon';
import Orders from '../screens/profileScreens/Orders';
import HelpCenter from '../screens/profileScreens/HelpCenter';
import ProductDetail from '../screens/allHomeScreens/ProductDetail';
import FavList from '../screens/profileScreens/Wishlist';
import UserProfile from '../screens/profileScreens/UserProfile';
import Verification from '../screens/Verifications';
import Bag from '../screens/Bag';
import AddToBag from '../screens/AddToBag';
// import FavList from '../screens/profileScreens/FavList';



const Stack = createStackNavigator();

const HomeNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='BottomTab'>
                <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
                {/* <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} /> */}
                <Stack.Screen name="Categories" component={Categories} options={{ headerShown: false }} />
                <Stack.Screen name="Explore" component={Explore} options={{ headerShown: false }} />
                <Stack.Screen name="Studio" component={Studio} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                <Stack.Screen name="HomeSearch" component={HomeSearch} options={{ headerShown: false }} />
                <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
                <Stack.Screen name="ShoppingBag" component={ShoppingBag} options={{ headerShown: false }} />
                <Stack.Screen name="Men" component={Men} options={{ headerShown: false }} />
                <Stack.Screen name="Women" component={Women} options={{ headerShown: false }} />
                <Stack.Screen name="FashionStore" component={FashionStore} options={{ headerShown: false }} />
                <Stack.Screen name="ProductGridView" component={ProductGridView} options={{ headerShown: false }} />
                <Stack.Screen name="BeautyProducts" component={BeautyProducts} options={{ headerShown: false }} />
                <Stack.Screen name="MyntraMall" component={MyntraMall} options={{ headerShown: false }} />
                <Stack.Screen name="MyntraInsider" component={MyntraInsider} options={{ headerShown: false }} />
                <Stack.Screen name="GiftCard" component={GiftCard} options={{ headerShown: false }} />
                <Stack.Screen name="MyntraMove" component={MyntraMove} options={{ headerShown: false }} />
                <Stack.Screen name="ReferEarn" component={ReferEarn} options={{ headerShown: false }} />
                <Stack.Screen name="MyntraSuperStar" component={MyntraSuperStar} options={{ headerShown: false }} />
                <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
                <Stack.Screen name="RecommendedProducts" component={RecommendedProducts} options={{ headerShown: false }} />
                <Stack.Screen name="MyntraMaster" component={MyntraMaster} options={{ headerShown: false }} />
                {/* <Stack.Screen name="ScanCoupon" component={ScanCoupon} options={{ headerShown: false }} /> */}
                <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false }} />
                <Stack.Screen name="HelpCenter" component={HelpCenter} options={{ headerShown: false }} />
                <Stack.Screen name="Wishlist" component={FavList} options={{ headerShown: false }} />
                <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
                <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
                <Stack.Screen name="Verification" component={Verification} options={{ headerShown: false }} />
                <Stack.Screen name="Bag" component={Bag} options={{ headerShown: false }} />
                <Stack.Screen name="AddToBag" component={AddToBag} options={{ headerShown: false }} />
            </Stack.Navigator>

        </NavigationContainer>

    )
}

export default HomeNav;