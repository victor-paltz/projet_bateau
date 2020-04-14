import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import InfoView from './Info_View'
import DownloadingView from './Downloading_View'
import TypelistView from './Elements/Typelist_View'
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Informations') {
            iconName = focused
              ? 'md-information-circle'
              : 'md-information-circle-outline';
          } else if (route.name === 'Transfert') {
            iconName = focused
              ? 'md-wifi'
              : 'md-wifi';
          } else if (route.name === 'Équipement') {
            iconName = focused ? 'md-list-box' : 'md-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Informations" component={InfoView} />
        <Tab.Screen name="Équipement" component={TypelistView} />
        <Tab.Screen name="Transfert" component={DownloadingView} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
