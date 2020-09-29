import React from 'react';
import { Platform, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DealsScreen from '../screens/DealsScreen';
import TradeListScreen from '../screens/TradeListScreen';
import { THEME } from '../theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Deals = createStackNavigator();
const TradeList = createStackNavigator();
const PersonalAds = createStackNavigator();
const PersonalCabinet = createStackNavigator();

let Tab = createBottomTabNavigator();
//LogBox.ignoreLogs(['Require cycle:']);

export default function AppNavigation() {
    return (
        <SafeAreaProvider>
            <StatusBar barStyle="light-content" backgroundColor={THEME.MAIN_COLOR}/> 
            <NavigationContainer>
                <BottomNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
       
    );
}

function BottomNavigator() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#fff",
                showLabel: false,
                style: {
                    backgroundColor: THEME.MAIN_COLOR
                }
            }}
        >
            <Tab.Screen
                name="Сделки"
                component={DealsNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="handshake" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Рынок"
                component={TradeListNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="newspaper-variant-multiple-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Мои объявления"
                component={PersonalAdsNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="card-account-details-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Личный кабинет"
                component={PersonalCabinetNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const tabScreenOptions = {
    headerTitle: 7
};

function DealsNavigator() {
    return (
        <Deals.Navigator>
            <Deals.Screen name="Deals" component={DealsScreen} />
            {/* <Deals.Screen name="Else in this part navigation" component={theOther} /> */}
        </Deals.Navigator>
    );
}

function TradeListNavigator() {
    return (
        <TradeList.Navigator>
            <TradeList.Screen name="TradeList" component={TradeListScreen} />
            {/* <Deals.Screen name="Else in this part navigation" component={theOther} /> */}
        </TradeList.Navigator>
    );
}

function PersonalAdsNavigator() {
    return (
        <PersonalAds.Navigator>
            <PersonalAds.Screen name="PersonalAds" component={TradeListScreen} />
            {/* <Deals.Screen name="Else in this part navigation" component={theOther} /> */}
        </PersonalAds.Navigator>
    );
}

function PersonalCabinetNavigator() {
    return (
        <PersonalCabinet.Navigator>
            <PersonalCabinet.Screen name="PersonalCabinet" component={TradeListScreen} />
            {/* <Deals.Screen name="Else in this part navigation" component={theOther} /> */}
        </PersonalCabinet.Navigator>
    );
}

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR,
};
