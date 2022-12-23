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

  /*const showSnackbar = () => { 
 Snackbar.show({
  text: 'Login Successed',
  duration: Snackbar.LENGTH_INDEFINITE,
  action: {
    text: 'Ok',
    textColor: 'green',
    onPress: () => { /* Do something.  },
  },
});
};
*/
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
            marginTop: -400,
            textAlign: 'center'
          }}>
          Join E-Voting
        </Text>
        <TextInput
          value={this.state.password}
          style={tampilan.inputtext}
          onChangeText={value => this.setState({password: value})}
          textAlign={'center'}
          placeholder='Input Pin Kode'
        />
        <TouchableOpacity 
          style={tampilan.button}
          onPress={() => this.props.navigation.navigate('Voting')}>
          <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 15}}>
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tampilan.kontainerbutton}
          onPress={() => console.log('Hello')}>
          <Image
            source={require('../images/result_btn.png')}
            style={tampilan.resultbtn}
          />
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Create')}>
          <Image
            source={require('../images/voting_btn.png')}
            style={tampilan.votingbtn}
          />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
          <Image
            source={require('../images/prof_btn.png')}
            style={tampilan.profbtn}></Image>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const tampilan = StyleSheet.create({
  button: {
    backgroundColor: '#C69B7B',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 3,
    width: 120,
    marginLeft: 150,
  },
  inputtext: {
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: '#F1F1F1',
    color: '#000B49',
    width: 200,
    marginLeft: 110,
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
  kontainerbutton: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-around',
  },
   shape: {
    width: 415,
    marginTop: 10,
  },
  
  resultbtn: {
    marginTop: 10,

  },
  
  votingbtn: {
    marginTop: 10,
  },
  
  profbtn: {
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
