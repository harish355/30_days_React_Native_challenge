import React from 'react';
import { Button,Image, StyleSheet,StatusBar, Text, View, Dimensions } from 'react-native';

const statusBarHeight= Math.round(StatusBar.currentHeight);
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Info({ navigation,route }) {
    return (
        <View style={{flex:1,marginTop:statusBarHeight,backgroundColor:'black'}}>
            <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'white'}}>{route.params.name}</Text>
            <Image   style={{resizeMode:'stretch',width: windowWidth, height: windowHeight*.75,}}
                    source={{uri:route.params.url}} />
            <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'white'}}>{route.params.model}</Text>
            <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'white'}}>${route.params.price}</Text>
            <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'white'}}>0-60 3.2Sec</Text>
            <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'white'}}>2020 Varient</Text>
            <View style={style.button}>
            <Button style={style.button} title="Back" onPress={()=>navigation.navigate("HomePage")} ></Button>
            </View>
        </View>
    )
}
const style=StyleSheet.create(
    {
        button: {
            flex: 1,
            justifyContent: 'flex-end',
          }
    }
)
