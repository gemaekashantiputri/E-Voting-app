/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, TextInput, StatusBar, TouchableOpacity} from 'react-native';

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#6E85B7" />

        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffff',
          }}>
          <TouchableOpacity>
          <TextInput
              value={this.state.username}
              style={tampilan.inputtext}
              onChangeText={(value) => this.setState({username: value})}/>
          </TouchableOpacity>
          <TouchableOpacity
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#0A0A0A',
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderRadius: 30,
              alignContent: 'center',
              elevation: 7,
              width: 220,
            }}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                color: '#FFFF',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 15,
              }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Signin;
