import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Entypo';
import Iconn from 'react-native-vector-icons/dist/AntDesign';
import BottomTabs from './BottomTabs'; 
import { Appbar } from 'react-native-paper';
const CardImage = ({navigation}) => {


    return (
       <View style={{flex:1}}>
         <ScrollView>
         <Appbar.Header style={{backgroundColor:'white'}}>
    <TouchableOpacity><Appbar.BackAction style={{color:'black',}} /></TouchableOpacity>  
      <Appbar.Content style={{alignItems:'center'}} title="Wallet" />
      <View style={{display:'flex', flexDirection:'row',right:10}}>
           <TouchableOpacity><Icon  name="share" size={20} color="black" /></TouchableOpacity>
         <TouchableOpacity><View style={{paddingLeft:30}}><Icon  name="plus" size={20} color="black" /></View>
         </TouchableOpacity>
         </View>
    </Appbar.Header>
    <Appbar.Header style={{backgroundColor:'white'}}>
      <View style={{display:'flex',flexDirection:'row',}}>
    <TouchableOpacity><Icon name="lock" size={20} color="#f542b6" /></TouchableOpacity>  
    <TouchableOpacity><Text style={{color:'#f542b6'}}>Data Protection</Text></TouchableOpacity>
    </View>
    <Appbar.Content style={{alignItems:'center',right:30}} title="Cards" />
      
      <View style={{display:'flex',flexDirection:'row',right:10}}>
       <TouchableOpacity><Iconn  name="eyeo" size={20} color="blue" /></TouchableOpacity>
           <TouchableOpacity><Text style={{paddingLeft:10,color:'blue'}}>Show Info</Text></TouchableOpacity>
       </View>
        
    </Appbar.Header>
         
       <TouchableOpacity style={{alignSelf:'center'}}
      onPress={()=> {navigation.navigate('CardList')}} 
    >

         <Image style={{height:500,width:300,top:10,borderRadius:30}} source={require('../images/card.jpeg')}/>
    
         </TouchableOpacity>
         </ScrollView>
     <BottomTabs/>

  </View>
    );
  };

  
  export default CardImage;
  