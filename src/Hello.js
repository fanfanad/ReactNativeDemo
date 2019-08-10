/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 13:48:27
 * @LastEditTime: 2019-08-10 15:58:36
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
        <Text style={styles.content} numberOfLines={2}>&emsp;&emsp;空格占位符相对于Text组件内的字符串来说可以根据情况设置不同的缩进宽度。比如常见的首行缩进2字符，就可以使用</Text>
        <Text>设备的宽度是{Dimensions.get("window").width}</Text>
        <Text>设备的高度是{Dimensions.get("window").height}</Text>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    height:3000,
    backgroundColor: "#f5f5f5",
  },
  content:{
    fontSize: 20,
    color:"#3df5e2",
    fontWeight: 'bold',
    lineHeight:30
  }
})
