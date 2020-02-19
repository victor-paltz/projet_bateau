import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function MaterialCardWithoutImage1(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.bodyContent}>
        <Text style={styles.titleStyle}>Bienvenue sur Projet Bateau</Text>
        <Text style={styles.subtitleStyle}>Message de bienvenue</Text>

        <Text style={styles.bodyText}>
          Ce projet crée par deux élèves de l&#39;école Centrale Paris est issu
          d&#39;un partenariat avec Sopra Steria.{"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}Pour télécharger les données depuis le capteur, cliquez sur
          l&#39;onglet du milieu et appuyez sur le bouton central.{"\n"}
          {"\n"}Pour analyser les données, rendez vous dans l&#39;onglet de
          droite
        </Text>
      </View>
      <Image
        source={require("../assets/images/soprasteria_logo.png")}
        resizeMode="contain"
        style={styles.image1}
      ></Image>
      <Image
        source={require("../assets/images/LogoCS.png")}
        resizeMode="contain"
        style={styles.image2}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexWrap: "nowrap",
    elevation: 3,
    borderRadius: 2,
    borderColor: "#CCC",
    borderWidth: 1,
    shadowOffset: {
      height: 2,
      width: -2
    },
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    overflow: "hidden",
    flexDirection: "row"
  },
  bodyContent: {
    justifyContent: "center",
    padding: 16,
    paddingTop: 24
  },
  titleStyle: {
    color: "#000",
    paddingBottom: 12,
    fontSize: 24,
  },
  subtitleStyle: {
    color: "#000",
    opacity: 0.5,
    fontSize: 14,
    lineHeight: 16
  },
  body2: {
    padding: 16,
    paddingTop: 8
  },
  bodyText: {
    color: "#424242",
    flexWrap: "wrap",
    fontSize: 14,
    lineHeight: 20
  },
  image1: {
    top: 162,
    left: 192,
    width: 119,
    height: 103,
    position: "absolute"
  },
  image2: {
    top: 128,
    left: 20,
    width: 160,
    height: 171,
    position: "absolute"
  }
});

export default MaterialCardWithoutImage1;
