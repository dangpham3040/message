import React, { useEffect, useState } from 'react';

//screen
import Home from '../Screen/Home'
import Website from '../Screen/website'
import Connet from '../Screen/Connet'
import Chat from '../Screen/Chat'
//Icons
import HomeIcon from '../Icons/Home'
import HeartIcon from '../Icons/Heart'
import MenuIcon from '../Icons/Menu'
import FontAwesomeicon from 'react-native-vector-icons/MaterialIcons';
//other
import { Colors } from '../Utils/Color';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ChatStack } from './maintab';
const Stack = createNativeStackNavigator();
export default function App() {
    const Tab = createBottomTabNavigator()
    const [srceen, setSrceen] = useState(0)

    return (
        < Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ size }) => {
                    if (route.name === 'home') {
                        return <FontAwesomeicon name={'home'} color={srceen === 0 ? Colors.primary : Colors.eighth} size={20} />;
                    } else if (route.name === 'Remote') {
                        return <FontAwesomeicon name={'settings-remote'} color={srceen === 1 ? Colors.primary : Colors.eighth} size={20} />;
                    }
                    else if (route.name === 'Connet') {
                        return <FontAwesomeicon name={'cast-connected'} color={srceen === 2 ? Colors.primary : Colors.eighth} size={20} />;
                    }
                    else if (route.name === 'Chat') {
                        return <FontAwesomeicon name={'chat'} color={srceen === 3 ? Colors.primary : Colors.eighth} size={20} />;
                    }
                },
            })
            }
            tabBarOptions={{
                activeTintColor: Colors.primary,
                inactiveTintColor: Colors.eighth,
            }}
        >
            <Tab.Screen name="home" component={HomeStack} options={{ headerShown: false, }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(0)
                    },
                })} />
            <Tab.Screen name="Remote" component={FavoriteStack} options={{ headerShown: false, }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(1)
                    },
                })} />
            <Tab.Screen name="Connet" component={ConnetStack} options={{ headerShown: false, }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(2)
                    },
                })} />
            <Tab.Screen name="Chat" component={Chat_Stack} options={{ headerShown: false, }}
                listeners={() => ({
                    tabPress: () => {
                        setSrceen(3)
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
            <Stack.Screen name="Website-stack" component={Website} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
export const ConnetStack = () => {
    return (
        <Stack.Navigator initialRouteName="Favorite-stack">
            <Stack.Screen name="Connet-stack" component={Connet} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};
export const Chat_Stack = () => {
    return (
        <Stack.Navigator initialRouteName="Favorite-stack">
            <Stack.Screen name="chat-stack" component={Chat} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};