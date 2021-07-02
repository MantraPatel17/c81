import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from '../Screens/Feed';
import CreateStory from '../Screens/CreateStory';

const tab = createBottomTabNavigator;

const BottomTabNavigator = () => {
    return (
        <Tab.navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if(route.name === 'Feed'){
                        iconName = focused ? 'book':'book-outline'
                    }
                    else if(route.name === 'CreateStory'){
                        iconName = focused ? 'create':'create-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color}/>
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'black',
            }}>
                <Tab.Screen name="Feed" component={Feed}/>
                <Tab.Screen name="CreateStory" component={CreateStory}/>
            </Tab.navigator>
    )
}

export default BottomTabNavigator;  