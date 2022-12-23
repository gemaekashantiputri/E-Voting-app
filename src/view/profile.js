/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Snackbar from 'react-native-snackbar';
import React, { useEffect, useState, Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  TextInput,
  ScrollView,
  StyleSheet,
  Alert,
  BackHandler,
} from 'react-native';

export default function Profile ({navigation}){
  
const showSnackbar = () => { 
 Snackbar.show({
  text: 'Its Your Profile',
  duration: Snackbar.LENGTH_INDEFINITE,
  action: {
    text: 'Ok',
    textColor: 'green',
    onPress: () => { /* Do something. */ },
  },
});
};

  const [ data, setData ] = useState([]); 

  useEffect(() => {
    getData()
  }, [])
  
   const getData = async () => {
    try {
      const res = await axios.get('http://192.168.1.6:3000/api');
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const Signout = async () => {
    try {
      await AsyncStorage.removeItem('AccessToken');
      navigation.replace('Load');
    } catch (error) {
      console.error(error);
    }
  };
    return  (
      <ScrollView style={tampilan.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#0A0A0A" />
        <TouchableOpacity
          style={tampilan.kontainergambar}
          onPress={showSnackbar}>
          <Image
            source={require('../images/me.png')}
            style={tampilan.gambar}
          />
        </TouchableOpacity>
        <View>
          <Text 
          style={{
              color: '#ffff',
              fontSize: 20,
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: -100,
              marginLeft: 20,
            }}>gemaeka1@gmail.com</Text>
        </View>
        <Text
          style={{
            color: '#ffff',
            textAlign: 'center',
            fontSize: 15,
            marginTop: -55,
            marginLeft: 20,
          }}>
         Student
        </Text>
        <TouchableOpacity
          style={tampilan.kontainerbox}
          onPress={() => console.log('Hello')}>
          <Image
            source={require('../images/box.png')}
            style={tampilan.box}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#0A0A0A',
            fontSize: 15,
            marginTop: -300,
            marginLeft: 100,
          }}>
          Edit Profile
        </Text>
        <Text
          style={{
            color: '#0A0A0A',
            fontSize: 15,
            marginTop: 20,
            marginLeft: 100,
          }}>
          Edit Bio
        </Text>
        <Text
          style={{
            color: '#0A0A0A',
            fontSize: 15,
            marginTop: 20,
            marginLeft: 100,
          }}>
          Change Password
        </Text>
        <TouchableOpacity
          style={tampilan.button}
          onPress={Signout}>
          <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 20}}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }


const tampilan = StyleSheet.create({
  button: {
    backgroundColor: '#0A0A0A',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
    width: 300,
    marginLeft: 50,
  },
  inputtext: {
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: '#F1F1F1',
    color: '#000B49',
  },
  switch: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  gambar: {
    width: 415,
    height: 220,
    marginTop: 10,
    marginHorizontal: 55,
  },
  kontainergambar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -10,
  },
  kontainerbox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  headcop: {
    backgroundColor: '#FFABE1',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  container: {
    flex: 0.5,
    backgroundColor: '#F5F5F5',
  },
  
});

