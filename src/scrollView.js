/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 16:10:20
 * @LastEditTime: 2019-08-12 17:00:49
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react'
import {View,Text,ScrollView,StyleSheet,RefreshControl} from 'react-native'

export default class MyScrollView extends Component{
    constructor(props){
        super(props);
        this.state={
            isRefreshing:false,
            dataList:[]
        }
    }
    componentDidMount(){
        //组件挂载完成
        let initList=[];
        for(let i=0;i<20;i++){
            initList.push(i+1);
        }
        this.setState({dataList:initList})
    }
    _onRefresh(){
        //下拉刷新开始
        this.setState({
            isRefreshing:true
        })
        let newData=[];
        for(let i=0;i<10;i++){
            newData.push("new"+(i+1));
        }
        setTimeout(() => {
            let condata=newData.concat(this.state.dataList);
            this.setState({
                dataList:condata,
                isRefreshing:false
            })
        }, 3000);
        
    }
    _renderList(){
        //alert("hahah");
        const {dataList}=this.state;
       return  dataList.map((item,key)=>{
            return (
                <View key={key} style={styles.itemView}>
                    <Text style={styles.itemText}>item-{item}</Text>
                </View>
            )
        })
    }
    render(){
        return (
            <View style={{flex:1}}>
                {/* 头部标题栏 */}
                <View style={styles.viewTitle}>
                    <Text style={styles.contentTitle}>滚动视图</Text>
                </View>
                {/* 滚动容器列表 */}
                <ScrollView style={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            tintColor="#ffffff" // 指定刷新指示器的背景色(iOS)
                            title="加载中..." // 指定刷新指示器下显示的文字(iOS)
                            titleColor="#000000" // 指定刷新指示器下显示的文字的颜色(iOS)
                            colors={['#ff0000', '#00ff00', '#0000ff']} // 刷新指示器在刷新期间的过渡颜色(Android)
                            progressBackgroundColor="#ffffff" // 指定刷新指示器的背景色(Android)
                        />
                    }
                >
                    {this._renderList()}
                </ScrollView>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    viewTitle:{
        height:50,
        backgroundColor: "#f4511e",
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentTitle:{
        fontSize: 20,
        color:"#fff"
    },
    scrollView:{
        flex:1,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        //backgroundColor:"blue"
    },
    itemView:{
        height:70,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:"center",
        marginTop: 5,
    },
    itemText:{
        fontSize:20,
        color:"#000"
    }

})

