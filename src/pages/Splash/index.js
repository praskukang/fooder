import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Icon } from '../../assets'

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('InputMeja');
    }, 500);
  }, []);

  return (
    <View style={style.container}>
      <Image source={Icon} style={style.icon} />
      {/* <Text style={style.text}>Selamat Datang...</Text> */}
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    backgroundColor: '#337091'
  },
  icon: {
    width: 250,
    height: 250,

  },
  text: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default Splash;
