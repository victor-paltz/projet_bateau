import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import logoSopra from '../Assets/soprasteria_logo.png'
import logoCS from '../Assets/LogoCS.png'

export default class InfoView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.text]}>Cette application a été crée par deux étudiants de CentraleSupélec,
        dans le cadre de leur projet d'option en partenariat avec Sopra Steria</Text>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={logoSopra} />
        <Image
          resizeMode="contain"
          style={styles.image}
          source={logoCS} />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginTop: 70,
    marginHorizontal: 10,
  },
  image: {
    marginTop: 50,
    height: 100,
    width: 100,
  },
});
