/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 19:28:57
 * @LastEditTime: 2019-08-12 15:43:36
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from "react"
import {View,TextInput,StyleSheet,Text,Platform} from 'react-native'

export default class TextDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            text:""
        }
    }
    render(){
        const os=Platform.OS;
        console.log(os)
        return (
            <View style={styles.container}>
                {/* onChangeText类似于web文本框的onChange */}
                <TextInput style={{height:40,paddingLeft: 5,borderWidth: 1,borderColor: "blue",}} {...this.props} onChangeText={(value)=>{
                    this.setState({
                        text:value
                    })
                }}/>
                <Text>{this.state.text}</Text>
                <Text>{os}</Text>
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