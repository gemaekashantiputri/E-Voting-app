/* eslint-disable prettier/prettier */
import React, {useState, useEffect, Component} from 'react';
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

const Voting = () => {
  const [dataServer, setDataServer] = useState([]);
  useEffect(() => {
    ambilData();
  }, []);

  function ambilData() {
    fetch('http://192.168.1.4:3000/voting')
    .then(response => response.json)
    .then(json => {
      setDataServer(json);
      console.log(json);
    })
    .catch(error => {
      console.error(error);
    });
  }

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
          data={dataServer}
          renderItem={({item, index}) => {

          <><Image
            source={item.option1}
            style={tampilan.card} /><Image
            source={item.option1}
            style={tampilan.card} /><Image
            source={item.option1}
            style={tampilan.card} /><Image
            source={item.option1}
            style={tampilan.card} /></>
          }}
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
export default Voting;
