import React, { useState } from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';
import Food from '../Menu/Food';
import Drink from '../Menu/Drink';
import ShopCart from '../../components/ShopCart';

const Tabbar = () => {
  const [totalOrder, setTotalOrder] = useState(0);


  return (
    <View style={styles.container}>
      <ShopCart quantity={totalOrder}/>
      <View style={styles.tabbar}>
        <ScrollableTabView
          initialPage={0}
          tabBarActiveTextColor="#337091"
          renderTabBar={() => (
            <DefaultTabBar
              underlineStyle={{
                backgroundColor: '#337091',
              }}
            />
          )}>
          <Food tabLabel="Food" onButtonPress={() => setTotalOrder(totalOrder + 1) }/>
          <Drink tabLabel="Drink" />
        </ScrollableTabView>
      </View>
    </View>
  );
};

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabbar: {
    flex: 1,
    // marginTop: width * 0.1,
    paddingHorizontal: 30,
  },
});

export default Tabbar;
