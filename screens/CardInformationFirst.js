import * as React from 'react';
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
import { Checkbox } from 'react-native-paper';
import { Value } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';
const CardInformationFirst= ({navigation}) => {
    
    const [checked, setChecked] = React.useState(false);
    const [checkedd, setCheckedd] = React.useState(false);
  return (
     <View style={{flex:1,height:'100%'}}>
        <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {
                navigation.navigate('CardList');
              }} />
      <Appbar.Content style={{alignItems:'center'}} title="Card Information" />
    <TouchableOpacity>
    <Appbar.Action icon="dots-vertical"  />
    </TouchableOpacity>
      
    </Appbar.Header>
      <View style={{top:10,alignSelf:'center'}}>
           <TouchableOpacity>
         <View style={{display:'flex',flexDirection:'row'}}>
           <View >
           <Icon  name="lock" size={20} color="#715DFF" />
           </View>
         <Text style={{color:'#715DFF'}}>Data Protection</Text>
       </View>
         </TouchableOpacity>
         </View>
         <View style={{left:20,top:70}}>
             <Text style={{fontWeight:'bold',fontSize:20,color:'#4D7099'}}>Card Name <Text style={{color:'red'}}>*</Text></Text>
             <TextInput  
                    style={{height: 60,width:'90%', borderWidth:1,borderRadius:20, fontSize: 20}}  
                    placeholder="gigaaa smart card"  
                     
                /> 
                 <View style={{display:'flex',flexDirection:'row'}}> 
                <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
   
                 <Text style={{top:10}}>Mark as my default payment method </Text>        
               </View>
                 
                
                <Text style={{fontWeight:'bold',fontSize:20,color:'#4D7099'}}>Billing Address<Text style={{color:'red'}}>*</Text></Text>
                <View style={{display:'flex',flexDirection:'row'}}> 
                <Checkbox
      status={checkedd ? 'checked' : 'unchecked'}
      onPress={() => {
        setCheckedd(!checkedd);
      }}
    />
   
                 <Text style={{top:10}}>Use my billing address from my profile </Text>        
               </View>
              <TextInput  
                    style={{height: 60,width:'90%', borderWidth:1,borderRadius:20, fontSize: 20}}  
                    placeholder="Via garibaldi 12,20159 Milano MI"  
                     
                /> 
                <Text style={{fontWeight:'bold',fontSize:20,color:'#4D7099'}}>Card Holder<Text style={{color:'red'}}>*</Text></Text>
             <TextInput  
                    style={{height: 60,width:'90%', borderWidth:1,borderRadius:20, fontSize: 20}}  
                    placeholder="John Doe"  
                     
                /> 
         </View>
         <View style={{top:200,backgroundColor:'#715DFF',left:30, height:50,width:'85%',borderRadius:20,}}>
     <TouchableOpacity style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
   
         <Text style={{color:'white'}}>Next</Text>
         
     </TouchableOpacity>
     </View>
       <BottomTabs/>
    </View>
  );
};
export default CardInformationFirst;
