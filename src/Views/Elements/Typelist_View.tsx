import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Element_View from './Element_View';
import { Ionicons } from '@expo/vector-icons';
import MachinesList from './MachinesList'

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    flex: 1,
    borderRadius: 5,
    marginTop: 7,
    marginLeft: 7,
    marginRight: 7,
    backgroundColor: "rgba(70, 70, 70, .9)",
  },
})

function Home({ navigation }) {
  return (
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
        <FlatList
          data={[
            { key: 'Armes', logo: 'ios-locate', alert: "no" },
            { key: 'Détection', logo: 'ios-radio', alert: "yes" },
            { key: 'Énergie', logo: 'ios-battery-full', alert: "no" },
            { key: 'Flotteur', logo: 'md-boat', alert: "no" },
            { key: 'Navigation', logo: 'md-compass', alert: "no" },
            { key: 'Propultion', logo: 'md-speedometer', alert: "no" },
            { key: 'Sécurité', logo: 'md-lock', alert: "no" },
            { key: 'Transmission', logo: 'md-git-compare', alert: "no" },
          ]}
          style={{ flex: 1 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Machines')} style={[styles.item,
              { backgroundColor: item.alert == "yes" ? "rgba(186, 13, 39, .94)" : "rgba(22, 171, 9, .94)" }]} >
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Ionicons name={item.logo} size={30} color={"white"} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 20, paddingLeft: 20, color: "white" }}>{`${item.key}`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )
          }

          }
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
          headerStyle: { backgroundColor: 'blue' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Fonctions des appareils',
          }}
        />
        <Stack.Screen
          name="Machines"
          component={MachinesList}
          options={{
            title: 'Machines available',
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
