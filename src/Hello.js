/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:48:27
 * @LastEditTime: 2019-08-10 14:11:10
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
          {/* View 类似于html中的div标签，Text类似于html中的span标签  */}
          {/* reactnative中采用flex布局，和web中不同的是，reactnative中的flex默认是从上倒下布局，即是colum布局 */}
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
