import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Cart } from '../../assets';

const ShopCart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textwrapper}>
        <Text style={styles.text}>Hello there</Text>
      </View>
      <View style={styles.cartwrapper}>
        <Image source={Cart} style={styles.icon} />
      </View>
    </View>
  );
};

export default ShopCart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  icon: {
    width: 30,
    height: 30,
  },
  cartwrapper: {
    padding: 30,
    // marginRight: 100,
  },
  textwrapper: {
    padding: 30,
    paddingRight: 120,
    paddingTop: 25,
  },
});
