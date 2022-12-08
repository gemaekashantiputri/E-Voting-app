/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  BackHandler,
} from 'react-native';

class Load extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Home',
      value: true,
      username: '',
    };
  }

  jikaKembali = () => {
    Alert.alert('Warning', 'Apakah Mau Keluar Aplikasi?', [
      {
        text: 'Tidak',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'Iya',
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  componentDidMount() {
    this.BackHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.jikaKembali,
    );
  }

  componentWillUnmount() {
    this.BackHandler.remove();
  }

  render() {
    return (
      <ScrollView style={tampilan.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#0A0A0A" />
        <TouchableOpacity
          style={tampilan.kontainergambar}
          onPress={() => console.log('Hello')}>
          <Image
            source={require('../images/voting.png')}
            style={tampilan.gambar}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#0A0A0A',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 30,
          }}>
          E-Voting
        </Text>
        <Text
          style={{
            color: '#0A0A0A',
            textAlign: 'center',
            fontSize: 15,
            TextStyle: 'center',
          }}>
          Aplikasi pemilihan suara online berbasis android
        </Text>
        <TouchableOpacity
          style={tampilan.button}
          onPress={() => this.props.navigation.navigate('Signin')}>
          <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 20}}>
            Sign in
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const tampilan = StyleSheet.create({
  button: {
    backgroundColor: '#0A0A0A',
    paddingVertical: 20,
    width: 220,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 95,
    borderRadius: 50,
    elevation: 3,
  },
  inputtext: {
    borderWidth: 1,
    borderColor: '#93FFD8',
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: '#93FFD8',
    color: '#000B49',
  },
  switch: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  gambar: {
    width: 150,
    height: 150,
    marginTop: 40,
    marginHorizontal: 55,
  },
  kontainergambar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
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
export default Load;
