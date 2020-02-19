import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

//import img from './icon.png';

export default class DownloadingView extends React.Component {
  constructor(props) {
    super(props)
    
  }

  render() {
    return (
      <ImageBackground source={require("./background-boats-sailing-flat-design.jpg")}
        imageStyle={{ resizeMode: 'cover' }}
        style={{ flex: 1 }}>
        <Text>Salut</Text>
      </ImageBackground>

    )
  }
}
