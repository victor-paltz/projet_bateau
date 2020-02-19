import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCardWithoutImage1 from "../components/MaterialCardWithoutImage1";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";

export default class InfoView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.rectStack}>
          <View style={styles.rect}>
            <MaterialCardWithoutImage1
              style={styles.materialCardWithoutImage1}
            ></MaterialCardWithoutImage1>
          </View>
          <MaterialIconTextButtonsFooter
            style={styles.materialIconTextButtonsFooter}
          ></MaterialIconTextButtonsFooter>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute"
  },
  materialCardWithoutImage1: {
    height: 443,
    marginTop: 34,
    marginLeft: 12,
    marginRight: 12
  },
  materialIconTextButtonsFooter: {
    top: 739,
    width: 375,
    height: 73,
    position: "absolute",
    left: 0
  },
  rectStack: {
  }
});
