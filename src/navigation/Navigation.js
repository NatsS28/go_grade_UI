import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../Screen/Login';
import RepDisplayscreen from '../Screen/Repscreen/RepDisplayscreen';
import MainCatScreen from '../Screen/MaincategoriesScreen/MainCatScreen';
import Subcatscreen from '../Screen/Subcatscreen/Subcatscreen';

function Navigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Group screenOptions={{headerShown:false}}>
                    <Stack.Screen name='RepPage' component={RepDisplayscreen} />
                    <Stack.Screen name='MainCategories' component={MainCatScreen} />
                    <Stack.Screen name='subCategories' component={Subcatscreen} />
                </Stack.Group>
                
            </Stack.Navigator>

        </NavigationContainer>
  )
}

export default Navigation