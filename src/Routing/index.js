import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


//loading
import Loading from '../Screen/Loading'
//screen
import Home from '../Screen/Home'
import Website from '../Screen/website'
//main tab
import Main from './maintab'
//styles
import { styles } from "./styles"
export default function App() {
    const Stack = createNativeStackNavigator();
    const [isLoading, setisLoading] = useState(true)
    const [url, seturl] = useState("")
    useEffect(() => {
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
            setisLoading(false)
        }, 2000)
        return () => clearInterval(intervalId); //This is important
    }, [url, useState])
    return (
        <>

            {isLoading === true ?
                <Loading />
                : <NavigationContainer>
                    <Stack.Navigator>
                        <>
                            <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
                            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                            <Stack.Screen name="Website" component={Website} options={{ headerShown: false }} />
                        </>
                    </Stack.Navigator>
                </NavigationContainer>}

        </>

    );
};