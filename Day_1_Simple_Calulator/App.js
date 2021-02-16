import React,{useState} from 'react';
import {StatusBar} from 'react-native';
import { StyleSheet,SafeAreaView, Text, View ,TextInput} from 'react-native';

const statbarheight=Math.round(StatusBar.currentHeight);

export default function App() {

  const [input,setIntput]=useState('');


  const cal=()=>{
    try{
      let res=eval(input);
      setIntput(res.toString());
    }
    catch (e){
      console.log("Error")
      setIntput('');
    }
      
  }
  const reset=()=>{
    setIntput('');
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.input_container}>
        <TextInput style={styles.input} placeholder="Enter to Calculate" value={input} onChangeText={input=>setIntput(input)} />
        <Text style={styles.input_grid} onPress={reset}>AC</Text>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.column_grid} onPress={()=>{setIntput(input+'1')}}>1</Text>
          <Text style={styles.column_grid} onPress={()=>{setIntput(input+'2')}}>2</Text>
          <Text style={styles.column_grid} onPress={()=>{setIntput(input+'3')}}>3</Text>
          <Text style={styles.column_grid} onPress={()=>{setIntput(input+'+')}}>+</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
            <Text style={styles.column_grid} onPress={()=>{setIntput(input+'4')}}>4</Text>
            <Text style={styles.column_grid} onPress={()=>{setIntput(input+'5')}}>5</Text>
            <Text style={styles.column_grid} onPress={()=>{setIntput(input+'6')}}>6</Text>
            <Text style={styles.column_grid} onPress={()=>{setIntput(input+'-')}}>-</Text>
          </View>
      </View>

      <View style={styles.row}>
        <View style={styles.column}>
            <Text style={styles.column_grid} onPress={()=>{setIntput(input+'7')}}>7</Text>
            <Text style={styles.column_grid} onPress={()=>{setIntput(input+'8')}}>8</Text>
            <Text style={styles.column_grid} onPress={()=>{setIntput(input+'9')}}>9</Text>
            <Text style={styles.column_grid} onPress={()=>{setIntput(input+'*')}}>*</Text>
          </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
            <Text style={styles.column_grid} onPress={()=>{setIntput(input+'0')}}>0</Text>
            <Text style={styles.column_grid} onPress={()=>{setIntput(input+'.')}}>.</Text>
            <Text style={styles.column_grid} onPress={()=>{setIntput(input+'/')}}>/</Text>
            <Text style={styles.column_grid} onPress={cal}>=</Text>
          </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:statbarheight,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_container:{
    width:'100%',
    height:'20%',
    flexDirection:'row',
    flex:1,
  },
  input:{
    width:'80%',
    flex:1,
    // borderWidth:3,
    // borderColor:'black',
  },
  row:{
    width:'100%',
    height:'20%',
    // borderColor:'grey',
    // borderWidth:5,
  },
  column:{
    flexDirection:'row',
    flex:1,
  },
  column_grid:{
    width:'25%',
    flex:1,
    height:'100%',
    textAlign:'center',
    borderWidth:1,
    borderColor:'black',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
  },
  input_grid:{
    width:'20%',
    flex:1, 
    height:'100%',
    textAlign:'center',
    borderWidth:1,
    borderColor:'black',
  },
});
