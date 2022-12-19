/* eslint-disable prettier/prettier */
import React, { useState, Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
import { user_login } from '../api/user_api';

export default function Signin({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

 const handleCheckEmail = text => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };

  const checkPasswordValidity = value => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return 'Password must not contain Whitespaces.';
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return 'Password must have at least one Uppercase Character.';
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return 'Password must have at least one Lowercase Character.';
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return 'Password must contain at least one Digit.';
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return 'Password must be 8-16 Characters Long.';
    }

    // const isContainsSymbol =
    //   /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    // if (!isContainsSymbol.test(value)) {
    //   return 'Password must contain at least one Special Symbol.';
    // }

    return null;
  };

  const handleLogin = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
      user_login({
        email: email.toLocaleLowerCase(),
        password: password,
      })
        .then(result => {
          console.log(result);
          if (result.status == 200) {
            AsyncStorage.setItem('AccessToken', result.data.token);
            navigation.replace('Home');
          }
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      alert(checkPassowrd);
    }
  };

    return  (
      <ScrollView style={tampilan.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#0A0A0A" />
        <Text
          style={{
            color: '#0A0A0A',
            fontSize: 40,
            fontWeight: 'bold',
            marginTop: 80,
            marginLeft: 20,
          }}>
          Welcome
        </Text>
        <Text
          style={{
            color: '#0A0A0A',
            fontSize: 20,
            marginTop: 10,
            marginLeft: 20,
          }}>
         Sign in to continue
        </Text>
        <Text
          style={{
            color: '#0A0A0A',
            fontSize: 15,
            marginTop: 10,
            marginLeft: 20,
          }}>
         Username
        </Text>
        <TextInput
           style={tampilan.input}
          placeholder="Email"
          value={email}
          onChangeText={text => handleCheckEmail(text)}
        />
        {checkValidEmail ? (
        <Text style={tampilan.textFailed}>Wrong format email</Text>
      ) : (
        <Text style={tampilan.textFailed}> </Text>
      )}
        <Text
          style={{
            color: '#0A0A0A',
            fontSize: 15,
            marginTop: 10,
            marginLeft: 20,
          }}>
         Password
        </Text>
        <TextInput
           style={tampilan.input}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
        />

         {email === '' || password === '' || checkValidEmail === true ? (
        <TouchableOpacity
          style={tampilan.button}
          onPress={handleLogin}>
          <Text style={{
            color: '#ffff',
            fontSize: 20,
          }}>Login
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={tampilan.button} onPress={handleLogin}>
          <Text style={{
            color: '#ffff',
            fontSize: 20,
          }}>Login
          </Text>
        </TouchableOpacity>
      )}
      </ScrollView>
    );
  }


const tampilan = StyleSheet.create({
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
  buttonDisable: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 5,
    marginTop: 25,
  },
  button: {
    backgroundColor: '#0A0A0A',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
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
    width: 300,
    height: 300,
    marginTop: 10,
    marginHorizontal: 55,
  },
  kontainergambar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
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
    backgroundColor: '#ffff',
  },
  
});

