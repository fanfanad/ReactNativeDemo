/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:48:27
 * @LastEditTime: 2019-08-10 19:21:40
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { View, Text ,StyleSheet,Dimensions} from 'react-native';

export default class Hello extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
          {/* View 类似于html中的div标签，Text类似于html中的span标签  */}
          {/* reactnative中采用flex布局，和web中不同的是，reactnative中的flex默认是从上倒下布局，即是colum布局 */}
        <Text style={styles.content} numberOfLines={2}>{this.props.msg}</Text>
        {/* 获得设备的宽和高 */}
        <Text>设备的宽度是{Dimensions.get("window").width}</Text>
        <Text>设备的高度是{Dimensions.get("window").height}</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height:3000,
    backgroundColor: "#f5f5f5",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  content:{
    fontSize: 20,
    color:"#333",
    fontWeight: 'bold',
    lineHeight:30
  }
})
