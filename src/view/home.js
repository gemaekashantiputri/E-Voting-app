/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
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
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      },,
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
    return  (
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
        <TouchableOpacity
          style={tampilan.kontainershape}
          onPress={() => console.log('Hello')}>
          <Image
            source={require('../images/shape.png')}
            style={tampilan.shape}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#ffff',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: -200,
            textAlign: 'center'
          }}>
          Join E-Voting
        </Text>
        <TouchableOpacity style={tampilan.button}>
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
    width: 150,
    height: 150,
    marginTop: 30,
    marginHorizontal: 55,
  },
  kontainergambar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
   shape: {
    width: 415,
    marginTop: 10,
  },
  kontainershape: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -130,
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
export default Home;
