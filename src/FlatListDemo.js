/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 20:09:05
 * @LastEditTime: 2019-08-13 10:12:19
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react'
import {View,Text,FlatList,StyleSheet,RefreshControl} from 'react-native'


export default class MyFlatList extends Component{
    constructor(props){
        super(props);
        this.state={
            dataList:[],
            refreshing:false
        }
    }
    componentDidMount(){
        let datas=[];
        for(let i=0;i<20;i++){
            datas.push({
                key:i,
                value:(i+1)
            });
        }
        this.setState({
            dataList:datas
        })
    }
    _renderItem=({item})=>{
       
        //alert(index)
        //alert(index)
        //alert(item.key)
        return (
            <View style={styles.itemView} >
                <Text style={styles.itemText}>item-{item.value}</Text>
            </View>
        )
    }
    _onEndReached=()=>{
        //
            
        //this.setState({refreshing:true})
        setTimeout(() => {
            let newData=new Array(5);
            newData=newData.map((item,index)=>{
                return {
                    key:20+(index),
                    value:'newData '+(index+1)
                }
            })
            this.setState({
                dataList:[...this.state.dataList].concat(newData)
            })
        }, 2000);
    }
    _rendSeparator=()=>{
        return (
            class Separator extends Component{
                render(){
                    return (
                        <View style={styles.separator}>

                        </View>
                    )
                }
            }
        )
    }
    _onRefresh=()=>{
        this.setState({
            refreshing:true
        })
        setTimeout(() => {
            this.setState({
                refreshing:false
            })
            alert("下拉刷新触发")
        }, 2000);
    }
    render(){
        return (
            <View style={styles.containerView}>
                <View style={styles.headView}>
                    <Text style={styles.titleView}>
                        FlatList滚动列表
                    </Text>
                </View>
                <FlatList
                    style={styles.scrollView}
                    data={this.state.dataList}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._rendSeparator()}
                    showsVerticalScrollIndicator={false}
                    onEndReached={this._onEndReached}
                    onEndReachedThreshold={0.01} 
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            title="加载中..."
                            onRefresh={this._onRefresh}
                        />
                    }
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    containerView:{
        flex:1
    },
    headView:{
        height:50,
        backgroundColor: "#f4511e",
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleView:{
        fontSize: 20,
        color:"#fff"
    },
    scrollView:{
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        //backgroundColor:"blue",
        flex:1
    },
    itemView:{
        height:80,
        borderColor: "#000",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 10,
    },
    itemText:{
        fontSize:20,
        color:"#333",
        //backgroundColor:"#333"
    },
    separator:{
        borderWidth:1,
        borderColor:"#000",
        marginTop: 2,
        marginBottom: 2,
    }
})
