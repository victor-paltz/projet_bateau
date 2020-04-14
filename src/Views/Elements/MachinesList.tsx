import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Element_View from './Element_View';
import { Ionicons } from '@expo/vector-icons';
import EquipmentDashboard from './EquipmentDashboard';

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
    <ImageBackground source={require("./../background-boats-sailing-flat-design.jpg")}
      imageStyle={{ resizeMode: 'cover' }}
      style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
        <FlatList
          data={[
            { key: 'TOURELLE 76/62 SUPER RAPIDE', logo: 'ios-locate', alert: "no" },
            { key: 'ARTILLERIE A COURTE PORTEE ET MUNITION', logo: 'ios-radio', alert: "no" },
            { key: 'CAISSON 20MM', logo: 'ios-battery-full', alert: "no" },
            { key: 'CONDUITE DE TIR', logo: 'md-boat', alert: "no" },
            { key: 'SYSTEME LANCEMENT TORPILLE', logo: 'md-compass', alert: "no" },
            { key: 'GESTION DU SYSTEME DE LANCEMENT DES MISSILES SCALP', logo: 'md-speedometer', alert: "yes" },
            { key: 'GESTION DU SYSTEME DE LANCEMENT DES MISSILES ASTER', logo: 'md-lock', alert: "yes" },
            { key: 'SYSTEME LANCE-LEURRES ANTI SOUS-MARIN', logo: 'md-git-compare', alert: "no" },
          ]}
          style={{ flex: 1 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={[styles.item,
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
    </ImageBackground>
  );
}

export default class MyStack extends React.Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="Home"
        headerMode="none"
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
          name="Dashboard"
          component={EquipmentDashboard}
          options={{
            title: 'Dashboard',
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

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}