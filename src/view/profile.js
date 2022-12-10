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
class Profile extends Component {
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
            source={require('../images/me.png')}
            style={tampilan.gambar}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#ffff',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: -100,
            marginLeft: 20,
          }}>
         Reyna Liam
        </Text>
        <Text
          style={{
            color: '#ffff',
            textAlign: 'center',
            fontSize: 15,
            marginTop: 10,
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

        <TouchableOpacity
          style={tampilan.button}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 20}}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const tampilan = StyleSheet.create({
  button: {
    backgroundColor: '#0A0A0A',
    paddingVertical: 10,
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
export default Profile;
