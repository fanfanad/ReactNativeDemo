/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 09:55:42
 * @LastEditTime: 2019-08-12 10:45:50
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class FlexBox extends React.Component{
   render(){
       return (
           <View style={styles.container}>
               <View style={styles.item_1}>
               </View>
               <View style={styles.item_2}>
               </View>
               <View style={styles.item_3}>
               </View>
           </View>
       )
   }
}


const styles=StyleSheet.create({
    container:{
        flex:1,
        //flexDirection: 'row',
    },
    item_1:{
        flex:1,
        backgroundColor:"red",
        //width:300
        //height:200
    },
    item_2:{
        flex:2,
        backgroundColor:"blue",
        //height:200
    },
    item_3:{
        flex:3,
        backgroundColor:"green",
        //height:200
    },

})