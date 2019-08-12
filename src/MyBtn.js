/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 19:48:29
 * @LastEditTime: 2019-08-10 20:08:33
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react'
import { TouchableOpacity,View,Text} from 'react-native'

export default class MyBtn extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      return ( 
                <TouchableOpacity onPress={this.props.onPress} style={{height:40,borderRadius: 10,...this.props.style}}>
                    <View style={{flex:1,justifyContent: 'center',alignItems: 'center',}}>
                        <Text style={{fontSize: 20,}}>{this.props.lable}</Text>
                    </View>
                </TouchableOpacity>
      )
    }
}