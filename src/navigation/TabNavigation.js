import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import HeartStack from './HeartStack';

const Tab = createBottomTabNavigator();
export class TabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('../assets/icons/home-twotone.png')
                : require('../assets/icons/home.png');
            } else if (route.name === 'Hearth') {
              iconName = focused
                ? require('../assets/icons/favorite.png')
                : require('../assets/icons/favorite-twotone.png');
            }

            return (
              <View style={{ justifyContent: 'center' }}>
                <Image
                  source={iconName}
                  style={{ width: 20, height: 20, justifyContent: 'center' }}
                  resizeMode="contain"
                />
              </View>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: '#ED1D24',
          showLabel: false,
          activeBackgroundColor: '#ED1D24',
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Heart" component={HeartStack} />
      </Tab.Navigator>
    );
  }
}

export default TabNavigation;
