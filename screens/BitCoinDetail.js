import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import Iconn from 'react-native-vector-icons/dist/Feather';
import BottomTabs from './BottomTabs';
import { Appbar } from 'react-native-paper';
const image = require('../images/bitCoin.png');
const BitCoinDetail = ({navigation}) => {
  return (
   
    <View style={{height:'100%',}}>
    <Appbar.Header style={{backgroundColor:'white'}}>
      <Appbar.BackAction onPress={() => {
                navigation.navigate('CardList');
              }} />
      <Appbar.Content style={{alignItems:'center'}} title="gigaaa Smart Card" />
    <TouchableOpacity>
    <Appbar.Action icon="dots-vertical"  />
    </TouchableOpacity>
      
    </Appbar.Header>
    
    <Text style={{alignSelf:'center',top:10, fontWeight: 'bold', color: 'skyblue'}}>
          Cards
        </Text>
        <View style={{alignSelf:'center', top: 10}}>
          <ImageBackground source={image} style={{height: 250,borderRadius:90, width: 380}}>
            <View style={{left: 5, top: 10}}>
              <Text style={{color: 'white', fontSize: 18}}>BitCoin Wallet</Text>
              <Text style={{color: 'white', fontSize: 18}}>
                [Public Address]
              </Text>
            </View>
            <View style={{top: 120, left: 5}}>
              <Text style={{color: 'white', fontSize: 18}}>240,00</Text>
              <Text style={{color: 'white', fontSize: 18}}>Euros</Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: 'right',
                  right: 30,
                  bottom: 50,
                }}>
                0,019
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 18,
                  textAlign: 'right',
                  right: 30,
                  bottom: 50,
                }}>
                BTC
              </Text>
            </View>
          </ImageBackground>
        </View>
        
        <View style={{top:10,alignSelf:'center',height:40,width:'85%',borderRadius:20,}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            top: 10,
            right: 10,
          }}>
          <View
            style={{
              backgroundColor: '#FF155A',
              right: 100,
              left: 5,
              height: 40,
              width: '50%',
              borderRadius: 20,
            }}>
            <TouchableOpacity
              style={{
                height: '80%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white'}}>Sell</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: '#715DFF',
              right: 100,
              left: 10,
              height: 40,
              width: '50%',
              borderRadius: 20,
            }}>
            <TouchableOpacity
              //  onPress={()=> navigation.navigate("Screen3")}
              style={{
                height: '80%',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white'}}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignSelf:'center',padding:10}}>
          <Text style={{top: 10, fontSize: 20, fontWeight: 'bold',alignSelf:'center'}}>
            Value
          </Text>
          <View style={{display: 'flex',flexWrap:'wrap',width:'80%', flexDirection: 'row', top: 10}}>
            <View style={{right: 60}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 20, color: '#0B9D88'}}>
                +12%
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 15, color: '#292F58'}}>
                6 MTH
              </Text>
            </View>
            <View style={{right: 20}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 20, color: '#FF155A'}}>
                -0.01%
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 15, color: '#292F58'}}>
                12 MTH
              </Text>
            </View>
            <View style={{left: 20}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 20, color: '#FF155A'}}>
                -1.99%
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 15, color: '#292F58'}}>
                18 MTH
              </Text>
            </View>
            <View style={{left: 50}}>
              <Text
                style={{fontWeight: 'bold', fontSize: 20, color: '#0B9D88'}}>
                +1.1%
              </Text>
              <Text
                style={{fontWeight: 'bold', fontSize: 15, color: '#292F58'}}>
                24 MTH
              </Text>
            </View>
          </View>
        </View>
         <View style={{alignSelf:'center',height:40,width:'95%',borderRadius:20,}}>
          
      <Text style={{fontWeight:'bold',alignSelf:'center',color:'#4D7099'}}>Last Transactions</Text>
          <View style={{padding:10}}>
              <Text>Receieved Transfer From Paypal</Text>
              <Text style={{textAlign:'right',bottom:20,color:'green'}}>+80.00€</Text>
              <Text style={{color:'#A6A8BA',bottom:10}}>13 April 2017  12:51</Text>
             
          </View>
          <View style={{padding:10,bottom:20}}>
              <Text>Bancomat Cash Withdrawl</Text>
              <Text style={{textAlign:'right',bottom:20,color:'grey'}}>-50.00€</Text>
              <Text style={{color:'#A6A8BA',bottom:10}}>13 April 2017  11:00</Text>
             </View>
             <View style={{padding:10,bottom:30}}>
              <Text>POS Payment Agora AVM</Text>
              <Text style={{color:'red'}}>Declined</Text>
              <Text style={{textAlign:'right',bottom:40,color:'pink'}}>-124.99€</Text>
              <Text style={{color:'#A6A8BA',bottom:10}}>13 April 2017  12:51</Text>
             
          </View>
          <View style={{padding:10,bottom:40}}>
              <Text>Receieved Transfer From Paypal</Text>
              <Text style={{textAlign:'right',bottom:20,color:'grey'}}>-50.00€</Text>
              <Text style={{color:'#A6A8BA',bottom:10}}>13 April 2017  11:00</Text>
             
          </View>
        
        </View>
       </View>
      
       
     
    <BottomTabs/>
    </View>
  );
};
export default BitCoinDetail;
