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
class App extends Component {
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
        <Text
          style={{
            color: '#0A0A0A',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 50,
            marginLeft: 20,
          }}>
          Candidate
        </Text>
        <TouchableOpacity
          style={tampilan.kontainercard} 
          onPress={() => console.log('Hello')}>
          <Image
            source={require('../images/card.png')}
            style={tampilan.card}
          />
          <Image
            source={require('../images/card.png')}
            style={tampilan.card}
          /><Image
            source={require('../images/card.png')}
            style={tampilan.card}
          /><Image
            source={require('../images/card.png')}
            style={tampilan.card}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={tampilan.button}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 20}}>
            Start Voting
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
    width: 300,
    height: 300,
    marginTop: 10,
    marginHorizontal: 55,
  },
  kontainercard: {
    flexDirection: 'row',
    marginTop: 30,
    marginLeft: 25,
    flexWrap: 'wrap',
  },
  card: {
    marginLeft: 10,
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
    backgroundColor: '#ffff',
  },
  
});
export default App;
