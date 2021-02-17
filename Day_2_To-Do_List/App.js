import React,{useState,useEffect} from 'react';
import {Button, StatusBar} from 'react-native';
import { StyleSheet, Text, View,TextInput,ScrollView } from 'react-native';
import Swipeout from 'react-native-swipeout';

const statusBarHeoght= Math.round(StatusBar.currentHeight);
export default function App() {
  const [input,setInput]=useState('');
  const [goals,setGoals]=useState([]);
  const [visible,setDiag]=useState(false);
  const add=()=>{
    if(input!=''){
      setGoals([...goals,{key:Math.random(1000),data:input}])
      setInput('');  
    }
  }
  const del=(key)=>{
    const newlist=goals.filter((item)=>item.key!==key);
    setGoals(newlist);
  }
  return (
    <View style={styles.container}> 
      <View style={{justifyContent:'center',width:'80%',height:'10%',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:20,fontWeight:'bold',fontFamily:'italic'}}>To Do List</Text>
      </View>
        <View style={styles.input_container}>
            <TextInput style={{color:'white',width:'70%',marginRight:25,borderColor:'white',borderWidth:0.5,fontSize:20}} placeholder="Enter Goal" value={input}
            onChangeText={input=>setInput(input)}
            />
            <Button style={{width:'10%',textAlign:'center'}} title="Add to Goal" onPress={add}></Button>
        </View>
      <View style={styles.goal_container}>
      <ScrollView style={styles.center}>
      {
        goals.map((item)=>
          (   
          <Swipeout  autoClose='true'
          backgroundColor= 'transparent' right={
            [{
              text: 'Delete',
              backgroundColor: 'red',
              underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
              onPress: () => { del(item.key) }
            },
          ]
          }>
                <View key={item.key} style={{flexDirection:'row',flex:1,borderWidth:1,borderColor:'blue',marginTop:10,width:'100%'}}>
                  <ScrollView  key={item.key} horizontal>
                      <Text style={{color:'white',marginBottom:10,fontSize:25}} key={item.key+'1'}>{item.data}</Text>
                  </ScrollView>
                </View>
              </Swipeout>
            )
        )
      }</ScrollView>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:statusBarHeoght,
    flex: 1,
    backgroundColor: 'black',
  },
  input_container:{
    flexDirection:'row',
    height:'10%',
    width:'80%',
    marginHorizontal:'10%',
  },
  goal_container:{
    marginHorizontal:'10%',
    flexDirection:'column',
    height:'80%',
    width:'80%'
  },
  center:{
    alignContent:'center',
    marginTop:10,
  }
});
