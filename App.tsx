import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Navigation from './src/Views/NavBar'

//import imagePath from 

export default class App extends React.Component {
  render() {
    return (
      <Navigation />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
