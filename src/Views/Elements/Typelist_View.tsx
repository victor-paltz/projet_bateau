import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Element_View from './Element_View';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
})

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <FlatList
        data={[
          { key: 'Armes', logo: 'ios-locate' },
          { key: 'Détection', logo: 'ios-radio' },
          { key: 'Énergie', logo: 'ios-battery-full' },
          { key: 'Flotteur', logo: 'md-boat' },
          { key: 'Navigation', logo: 'md-compass' },
          { key: 'Propultion', logo: 'md-speedometer' },
          { key: 'Sécurité', logo: 'md-lock' },
          { key: 'Transmission', logo: 'md-git-compare' },
        ]}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.item} >
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Ionicons name={item.logo} size={30} color={"black"} />
                <View style={{ flexDirection: 'column' }}>
                  <Text style={{ fontSize: 20, paddingLeft: 20 }}>{`${item.key}`}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        }

        }
      />


      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default class MyStack extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'tomato' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Awesome app',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'My profile',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Element_View}
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}