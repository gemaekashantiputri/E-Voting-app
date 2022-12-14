/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import {Card, Button , Title ,Paragraph } from 'react-native-paper';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Flatlist,
} from 'react-native';

export default function Voting() {

  const [ data, setData ] = useState([]); 

  useEffect(() => {
    getData()
  }, [])
  
   const getData = async () => {
    try {
      const res = await axios.get('http://192.168.43.146:3000/voting');
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return  (
      <ScrollView style={tampilan.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#0A0A0A" />
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            color: '#0A0A0A',
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 50,
            marginLeft: 20,
          }}>
          Candidate
        </Text>
        <View>
        {data.map((item) => (
        <View key={item.id}>
          <Text>{item.title}</Text>
          <Text>{item.pin}</Text>
          <Text>{item.option.value}</Text>
        </View>
      ))}
        </View>
        <TouchableOpacity>
        {data.map((item) => (
        <Card key={item.id}>
          <Card style={tampilan.card2}>
            <Card.Content>
                {item.option && item.option.map(data => {
                  <Card key={item.id}>
                    {data.value}
                  </Card>
                })}
                <Title>{item.value}</Title>
            </Card.Content>
          </Card>
        </Card>
        ))}
        </TouchableOpacity>
        <TouchableOpacity
          style={tampilan.button}>
          <Text style={{
            color: '#ffff',
            fontWeight: 'bold',
            fontSize: 20}}>
            Start Voting
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }



const tampilan = StyleSheet.create({
  card2 :{
        alignContent:'center',
        margin:37
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

