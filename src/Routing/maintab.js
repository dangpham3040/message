import React, { useEffect, useState } from 'react';

//screen
import Home from '../Screen/Home'
import login from '../Screen/Login'
//Icons
import HomeIcon from '../Icons/Home'
import HeartIcon from '../Icons/Heart'
import MenuIcon from '../Icons/Menu'
//other
import { Colors } from '../Utils/Color';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
export default function App() {
    const Tab = createBottomTabNavigator()
    const [srceen, setSrceen] = useState(0)

    return (
        < Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ size }) => {
                    if (route.name === 'Home') {
                        return <HomeIcon fill={srceen === 0 ? Colors.primary : Colors.second} dot={srceen === 0 ? Colors.primary : Colors.eighth} />;
                    } else if (route.name === 'Favorite') {
                        return <HeartIcon fill={srceen === 1 ? Colors.primary : Colors.second} dot={srceen === 1 ? Colors.primary : Colors.eighth} />;
                    }
                    else if (route.name === 'Menu') {
                        return <MenuIcon fill={srceen === 2 ? Colors.primary : Colors.eighth} dot={srceen === 2 ? Colors.primary : Colors.eighth} />;
                    }       
                },
            })
            }
            tabBarOptions={{
                activeTintColor: Colors.primary,
                inactiveTintColor: Colors.eighth,
            }}
        >
            <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false, }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(0)
                    },
                })} />
            <Tab.Screen name="Favorite" component={FavoriteStack} options={{ headerShown: false, }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(1)
                    },
                })} />
                <Tab.Screen name="Menu" component={MenuStack} options={{ headerShown: false, }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(2)
                    },
                })} />
        </Tab.Navigator >
    );
}
export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home-stack">
            <Stack.Screen name="Home-stack" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
export const FavoriteStack = () => {
    return (
        <Stack.Navigator initialRouteName="Favorite-stack">
            <Stack.Screen name="Login-stack" component={login} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
export const MenuStack = () => {
    return (
        <Stack.Navigator initialRouteName="Favorite-stack">
            <Stack.Screen name="Login-stack" component={login} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};