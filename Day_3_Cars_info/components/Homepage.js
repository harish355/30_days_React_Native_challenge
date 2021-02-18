import React,{useState} from 'react';
import { Button, StyleSheet, Text, View,StatusBar, Image, ScrollView,Dimensions, TouchableHighlight  } from 'react-native';

const statusBarHeight= Math.round(StatusBar.currentHeight);
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Homepage({ navigation }) {
    const [cars,setCarData]=useState([
        {
            key:1,
            name:'Audi',
            model:'R8',
            price:'50,000',
            url:'https://www.gtspiritmedia.com/gtspirit/uploads/2015/10/Black-Audi-R8-13.jpg'
        },
        {
            key:2,
            name:'Lamborghini',
            model:'Urus',
            price:'400,000',
            url:'https://c4.wallpaperflare.com/wallpaper/180/466/400/lamborghini-urus-wallpaper-preview.jpg'
        },
        {
            key:3,
            name:'Lamborghini',
            model:'Aventador',
            price:'250,000',
            url:'https://www.carscoops.com/wp-content/uploads/2020/01/mansory-carbonado-lamborghini-aventador-s-roadster-tuning-7-300x163.jpg'
        },
        {
            key:4,
            name:'Ferrari',
            model:'LaFerrari Aperta',
            price:'500,000',
            url:'https://www.supercars.net/blog/wp-content/uploads/2018/02/LaFerrari-Aperta.jpg'
        },
        {
            key:5,
            name:'Bugati',
            model:'Chiron',
            price:'1,50,00,000',
            url:'https://stimg.cardekho.com/images/carexteriorimages/930x620/Bugatti/Bugatti-Chiron/6524/1550828170128/front-left-side-47.jpg'
        },
        {
            key:6,
            name:'BMW',
            model:'M8',
            price:'125,00,000',
            url:'https://premiumtuning.hu/image.php?size=1000&imgName=1596353237-43088.jpg'
        }
    ]);
    return (
        <View style={style.container}>
            <View style={style.list}>
                <ScrollView  style={{ alignContent:'center',marginTop:10,}}>
                {cars.map((item)=>

                (<View key={item.key} style={style.item} >
            
                    <Text style={{textAlign:'center',fontSize:24,fontWeight:'bold',color:'white'}}>{item.name}</Text>
                    <TouchableHighlight onPress={()=>navigation.navigate('CarInfo',item)}>
                    <Image   style={{resizeMode: "stretch",width: windowWidth, height: windowHeight*.25,}}
                    source={{uri:item.url}} />
                    </TouchableHighlight>
                </View>
                )
                )}          
                </ScrollView>           
            </View>
        </View>
    )
}

const style=StyleSheet.create(
    {
       container:{
           backgroundColor:'black',
        marginTop:statusBarHeight,
        flex:1,
       },
       list:{
           flex:1,
           marginLeft:'5%',
           marginRight:'5%',
           height:'100%',
           width:'90%'
       },
       item:{
           marginBottom:15,
       }

    }
)