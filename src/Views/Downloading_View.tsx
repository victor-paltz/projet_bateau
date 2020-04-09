import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import { Animated, Easing } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

import Dialog, { DialogContent } from 'react-native-popup-dialog';
import { Button } from 'react-native'



export default class DownloadingView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      spinValue: new Animated.Value(0),
      color: '#5abbce',
    }
  }

  rotateSpring = () => {
    this.state.spinValue.setValue(0);
      Animated.spring(
          this.state.spinValue,
          {
              toValue: 1,
              friction: 1,
          }
      ).start();

      setTimeout(() => {
        this.setState({ visible: true });
      }, 2000);
  };

  render() {

    var spin = this.state.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (

      <View style={styles.main_container}>
      <TouchableWithoutFeedback onPress={this.rotateSpring}>
      <Animated.View style={[styles.circle, {
          transform: [{rotate: spin},],
          backgroundColor: this.state.color
          }]}>
            <Icon name="arrow-down-circle" style={styles.icon} ></Icon>
            </Animated.View>
        </TouchableWithoutFeedback>
      </View>

      <View style={styles.container}>
        <Dialog
          visible={this.state.visible}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent>
            <Text>Le chargement a échoué, veuillez réessayer</Text>
          </DialogContent>
        </Dialog>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 180
  },
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12
  }
});
