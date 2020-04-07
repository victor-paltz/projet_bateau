import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TouchableWithoutFeedback } from 'react-native';
import { Animated, Easing } from 'react-native';
import Icon from "react-native-vector-icons/Feather";

export default class DownloadingView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animationValue: new Animated.Value(180),
      viewState: true
    }
  }

  toggleAnimation = () => {

    if(this.state.viewState == true) {
    Animated.timing(this.state.animationValue, {
      toValue : 300,
      timing : 1500
    }).start(()=>{
      this.setState({viewState : false})
    });
    }
    else {
      Animated.timing(this.state.animationValue, {
        toValue : 180,
        timing : 1500
      }).start(this.setState({viewState: true})
      );
    }
  }

  render() {

    const animatedStyle = {
      width : this.state.animationValue,
      height : this.state.animationValue
    }

    return (

    <ImageBackground source={require("./background-boats-sailing-flat-design.jpg")}
                imageStyle={{ resizeMode: 'cover' }}
                style={{ flex: 1 }}>
      <View style={styles.main_container}>
        <TouchableWithoutFeedback>
          <Animated.View style={[styles.animatedBox, animatedStyle]}>
            <Icon name="arrow-down-circle" style={styles.icon}></Icon>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </ImageBackground>

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
  },
  animatedBox: {
    width : 180,
    height: 180
  }
});
