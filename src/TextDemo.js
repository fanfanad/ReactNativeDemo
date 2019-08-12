/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 19:28:57
 * @LastEditTime: 2019-08-10 19:45:15
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from "react"
import {View,TextInput,StyleSheet,Text} from 'react-native'

export default class TextDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            text:""
        }
    }
    render(){
        return (
            <View style={styles.container}>
                {/* onChangeText类似于web文本框的onChange */}
                <TextInput style={{height:40,paddingLeft: 5,borderWidth: 1,borderColor: "blue",}} {...this.props} onChangeText={(value)=>{
                    this.setState({
                        text:value
                    })
                }}/>
                <Text>{this.state.text}</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})