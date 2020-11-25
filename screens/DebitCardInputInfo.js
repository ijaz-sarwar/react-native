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
  Button,
} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {Value} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import TebBankDetail from './TebBankDetail';
import { Appbar } from 'react-native-paper';
const image = require('../images/debitCard.png');

const DebitCardInputInfo = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);
  const [checkedd, setCheckedd] = React.useState(false);
  return (
    <View style={{flex:1}}>
       <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {
                navigation.navigate('DebitCardDetail');
              }} />
      <Appbar.Content style={{alignItems:'center'}} title="gigaaa Smart Card" />
    
      <TouchableOpacity>
      <Appbar.Action icon="dots-vertical"  />
      </TouchableOpacity>
    </Appbar.Header>
        <View
          style={{
            alignSelf:'center',
            top: 20,
          }}>
          <ImageBackground source={image} style={{height: 200, width: 285}}>
            <View style={{left: 5, top: 10}}>
              <Text style={{color: 'white', fontSize: 18}}>Giga Shares</Text>
            </View>
            <View style={{top: 120, left: 5}}>
              <Text style={{color: 'white', fontSize: 18}}>20.000</Text>
              <Text style={{color: 'white', fontSize: 18}}>Euros</Text>
            </View>
          </ImageBackground>
        
      </View> 
      <View style={{alignSelf:'center', top: 30}}>
        <TouchableOpacity>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View>
              <Icon name="lock" size={20} color="#715DFF" />
            </View>
            <Text style={{color: '#715DFF'}}>Data Protection</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{left: 20, top: 30}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#4D7099'}}>
          Card Name <Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          style={{
            height: 40,
            width: '90%',
            borderWidth: 1,
            borderRadius: 20,
            fontSize: 14,
          }}
          placeholder="gigaaa smart card"
        />
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />

          <Text style={{top: 10}}>Mark as my default payment method </Text>
        </View>

        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#4D7099'}}>
          Card Number<Text style={{color: 'red'}}>*</Text>
        </Text>
        <TextInput
          style={{
            height: 40,
            width: '90%',
            borderWidth: 1,
            borderRadius: 20,
            fontSize: 14,
          }}
          placeholder="...7703"
        />
        <Text style={{fontWeight: 'bold', fontSize: 20, color: '#4D7099'}}>
          Billing Address<Text style={{color: 'red'}}>*</Text>
        </Text>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Checkbox
            status={checkedd ? 'checked' : 'unchecked'}
            onPress={() => {
              setCheckedd(!checkedd);
            }}
          />

          <Text style={{top: 10}}>Use my billing address from my profile </Text>
        </View>
        <TextInput
          style={{
            height: 40,
            width: '90%',
            borderWidth: 1,
            borderRadius: 20,
            fontSize: 14,
          }}
          placeholder="Via garibaldi 12,20159 Milano MI"
        />
      </View>
      <TouchableOpacity style={{top: 40,alignSelf:'center'}}>
        <Text style={{color: '#4D7099'}}>
          Read Privacy Policy and Terms & Conditions
        </Text>
      </TouchableOpacity>
      <View
        style={{
          top: 60,
          backgroundColor: '#715DFF',
          alignSelf:'center',
          height: 50,
          width: '85%',
          borderRadius: 20,
        }}>
        <TouchableOpacity
          style={{
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white'}}>Save</Text>
        </TouchableOpacity>
      </View>
      
      <BottomTabs/>
    </View>
  );
};
export default DebitCardInputInfo;
