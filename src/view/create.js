/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import axios, { Axios } from 'axios';
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
  Button
} from 'react-native';

export default function Create ({navigation}){
    
    const [option, setOption] = useState([{key: '', value: ''}]);
    const [title, setTitle] = useState('');
    const [pin, setPin] = useState('');

    const addHandler = ()=>{
    const _option = [...option];
    _option.push({key: '', value: ''});
    setOption(_option);
    }
  
    const deleteHandler = (key)=>{
      const _option = option.filter((option,index) => index != key);
      setOption(_option);
    }

    const optionHandler = (text, key)=>{
      const _option = [...option];
      _option[key].value = text;
      _option[key].key   = key;
      setOption(_option);
      
    }

    const submit = () => {
      const data = {
        title,
        pin,
        option,
      }
      console.log('data before send:', data);
      axios.post('http://192.168.43.146:3000/voting', data)
      .then(res => {
        console.log('res:', res);
        setTitle('');
        setPin('');
      })
    }
    return  (
      <ScrollView style={tampilan.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#0A0A0A" />
        
        <TouchableOpacity
          style={tampilan.kontainerbox}
          onPress={() => console.log('Hello')}>
          <Image
            source={require('../images/create.png')}
            style={tampilan.box}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#0A0A0A',
            fontSize: 25,
            marginTop: -500,
            marginLeft: 100,
            fontWeight: 'bold',
            width: 200,
          }}>
           Create your Own Voting Now
        </Text>
        <TextInput
          value={title}
          onChangeText={(value) => setTitle(value)}
          style={{
            color: '#0A0A0A',
            fontSize: 15,
            marginTop: 20,
            marginLeft: 100,
          }}
          placeholder= 'Title'
        />
        <TextInput
          value={pin}
          onChangeText={(value) => setPin(value)}
          style={{
            color: '#0A0A0A',
            fontSize: 15,
            marginTop: 10,
            marginLeft: 100,
          }}
          placeholder= 'Pin Kode'
        />
         <View style={tampilan.container}>
          {option.map((item, key)=>(
          <View style={tampilan.inputContainer}>
          <TextInput placeholder={"Add Option"} value={item.value}  onChangeText={(text)=>optionHandler(text,key)}/>
          <TouchableOpacity onPress = {()=> deleteHandler(key)}>
            <Text style={{color: "red", fontSize: 13}}>Delete</Text>
          </TouchableOpacity> 
          <Button title="Add" onPress={addHandler} />
        </View>
      ))}
         </View>
        <TouchableOpacity
          style={tampilan.button}
          onPress={submit}>
          <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 20}}>
            Publish
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }


const tampilan = StyleSheet.create({
  inputsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#ffff',
    width: 200,
    marginLeft: 100,
  },
  button: {
    backgroundColor: '#0A0A0A',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 250,
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
    marginTop: 30,
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

