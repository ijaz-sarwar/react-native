import React from 'react';
import {
  SafeAreaw,
  StyleSheet,
  ScrollView, 
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import TebBankDetail from './TebBankDetail';
import { Appbar } from 'react-native-paper';
const image=require('../images/debitCard.png');


const CardInformation= ({navigation}) => {
    
    
  return (
     <View style={{flex:1}}>
      <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {
                navigation.navigate('CardList');
              }} />
      <Appbar.Content style={{alignItems:'center'}} title="Card Information" />
    <TouchableOpacity>
    <Appbar.Action icon="dots-vertical"  />
    </TouchableOpacity>
      
    </Appbar.Header>
      
      <View style={{top:20}}>
           <TouchableOpacity>
         <View style={{display:'flex',alignSelf:'center',flexDirection:'row'}}>
           <View >
           <Icon  name="lock" size={20} color="#715DFF" />
           </View>
         <Text style={{color:'#715DFF'}}>Data Protection</Text>
       </View>
         </TouchableOpacity>
         </View>
         <View style={{left:20,top:70}}>
             <Text style={{fontWeight:'bold',fontSize:20,color:'#4D7099'}}>Card Number<Text style={{color:'red'}}>*</Text></Text>
             <TextInput  
                    style={{height: 60,width:'90%', borderWidth:1,borderRadius:20, fontSize: 20}}  
                    placeholder="1249 2011 1041 4241"  
                     
                /> 
                </View>
                <View style={{left:20,top:70}}>
             <Text style={{fontWeight:'bold',fontSize:20,color:'#4D7099'}}>Expiration Date<Text style={{color:'red'}}>*</Text></Text>
             <TextInput  
                    style={{height: 60,width:'90%', borderWidth:1,borderRadius:20, fontSize: 20}}  
                    placeholder="09/22"  
                     
                /> 
                </View>
                <View style={{left:20,top:70}}>
             <Text style={{fontWeight:'bold',fontSize:20,color:'#4D7099'}}>CCV<Text style={{color:'red'}}>*</Text></Text>
             <TextInput  
                    style={{height: 60,width:'90%', borderWidth:1,borderRadius:20, fontSize: 20}}  
                    placeholder="041"  
                     
                /> 
                </View>
                <TouchableOpacity style={{top:140,left:40}}>
         <Text style={{color:'#4D7099'}}>Read Privacy Policy and Terms & Conditions</Text>
         </TouchableOpacity>
         <View style={{top:180,backgroundColor:'#715DFF',left:20, height:50,width:'85%',borderRadius:20,}}>
     <TouchableOpacity style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
   
         <Text style={{color:'white'}}>Add Payment Method</Text>
         
     </TouchableOpacity>
     </View>
    
     <BottomTabs/>
    </View>
  );
};
export default CardInformation;
