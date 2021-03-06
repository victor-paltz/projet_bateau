import * as React from 'react'
import { StyleSheet, Text, View, ImageBackground, Button, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Element_View from './Element_View';
import { Ionicons } from '@expo/vector-icons';
import EquipmentDashboard from './EquipmentDashboard';
import * as database from './database.json';

import armsfile from '../../assets/file/csvjson.json'

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
var listarms = []

class Home extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {
      logo: this.props.route.params.logo,
      type: this.props.route.params.type
    };

    // console.log(this.state.type)
    // console.log(database[this.state.type])
  }

  render() {
    return (
      <View key={this.props.route.params.type + "_mainview"}
        style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }}>
        <FlatList
          /*data={[
            { key: this.state.bonjour, logo: 'ios-locate', alert: "no" },
            { key: 'Détection', logo: 'ios-radio', alert: "no" },
            { key: 'Energie', logo: 'ios-battery-full', alert: "no" },
            { key: 'Propulsion', logo: 'md-boat', alert: "no" },
            { key: 'Flotteur', logo: 'md-compass', alert: "no" },
            { key: 'Navigation', logo: 'md-speedometer', alert: "yes" },
            { key: 'Securité', logo: 'md-lock', alert: "yes" },
            { key: 'Transmission', logo: 'md-git-compare', alert: "no" },
          ]}*/
          key={this.props.route.params.type + "_flatlist"}
          data={database[this.state.type]}
          style={{ flex: 1 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                key={item.name}
                onPress={() => this.props.navigation.navigate('Dashboard', {
                  values: item.values,
                  max_val: item.max_val,
                  name: item.name
                })} style={[styles.item,
                { backgroundColor: Math.max(...item.values) >= item.max_val ? "rgba(186, 13, 39, .94)" : "rgba(22, 171, 9, .94)" }]} >
                <View key={item.name + "1"} style={{ flex: 1, flexDirection: 'row' }}>
                  <Ionicons key={item.name + "_icon"} name={this.state.logo} size={30} color={"white"} />
                  <View key={item.name + "2"} style={{ flexDirection: 'column' }}>
                    <Text key={item.name + "_text"} style={{ fontSize: 20, paddingLeft: 20, color: "white" }}>{`${item.name}`}</Text>
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
