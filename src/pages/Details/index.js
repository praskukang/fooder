import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class Details extends Component {
  render() {
    return (
      <View>
        <Button
        title="Navigate to Tabbar"
        onPress={() =>
          this.props.navigation.navigate('Tabbar')
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
