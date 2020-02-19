import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Animated, Easing } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

export default class DownloadingView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topPosition: new Animated.Value(0)
    }
//import img from './icon.png';

  }

  componentDidMount() {
    Animated.timing(
      this.state.topPosition,
      {
        toValue: 100,
        duration: 3000, // Le temps est en milliseconds ici (3000ms = 3sec)
        easing: Easing.linear,
      }
    ).start() // N'oubliez pas de lancer votre animation avec la fonction start()
}

  render() {
    return (

    <ImageBackground source={require("./background-boats-sailing-flat-design.jpg")}
                imageStyle={{ resizeMode: 'cover' }}
                style={{ flex: 1 }}>
      <View style={styles.main_container}>
      <Animated.View style={[styles.animation_view, { top: this.state.topPosition }]}>
      <Icon name="arrow-down-circle" style={styles.icon}></Icon>
      </Animated.View>
    </View>
    </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 147,
    height: 147
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 147
  },
  main_container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
animation_view: {
  color: 'red'
}
});
