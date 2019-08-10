/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 10:58:50
 * @LastEditTime: 2019-08-10 14:21:59
 * @LastEditors: Please set LastEditors
 */
// /*
//  * @Description: In User Settings Edit
//  * @Author: your name
//  * @Date: 2019-08-09 10:58:50
//  */
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View,
//   Image,Alert,Button,Picker,ActionSheetIOS
// } from 'react-native';

// export default class MyRnApp extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       language:"java"
//     }

//   }
//   open(){
//     //Alert.alert("111");
//     // ActionSheetIOS.showActionSheetWithOptions({
//     //   options: ['取消', '删除'],
//     //   destructiveButtonIndex: 1,
//     //   cancelButtonIndex: 0,
//     // },
//     // (buttonIndex) => {
//     // if (buttonIndex === 1) { /* 当接收到的索引为1，即点击了删除按钮时，执行对应操作 */ }
//     // });
//     //ActionSheetIOS

//     ActionSheetIOS.showShareActionSheetWithOptions({
//       message:"噶发发发"
//     },function(err){
//       alert(err);
//     },function(b,str){
//       b&&alert(str);
//     })
    
//   }
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
      
//       <View style={styles.container}>
//         <Image source={pic} style={styles.Image}/>
//         <Button
//             onPress={()=>{this.open()}}
//             title="Press Me"
//           />
//           <Picker
//   selectedValue={this.state.language}
//   style={{ height: 50, width: 100 }}
//   onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
//   <Picker.Item label="Java" value="java" />
//   <Picker.Item label="JavaScript" value="js" />
// </Picker>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex:1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // backgroundColor: '#F5FCFF',
//   },
//   Image:{
//     width:193,
//     height:110
//   },
//   btn:{
//     width:100,
//     height:30,
//     backgroundColor:"#f3d",
//     justifyContent:"center",
//     alignItems:"center"
//   }
// });

import React, { Component } from 'react'
import {
  View,Text,
  StyleSheet,AppRegistry,ScrollView
} from 'react-native'
import Hello from './src/Hello'
export default class MyRnApp extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <ScrollView>
        <Hello/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 25,
  }
})


AppRegistry.registerComponent('MyRnApp', () => MyRnApp);
