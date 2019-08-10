/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:48:27
 * @LastEditTime: 2019-08-10 13:54:48
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default class Hello extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}> Hello,React Native </Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    fontSize: 18,
    color:"#3df5e2",
    fontWeight: 'bold',
  }
})
