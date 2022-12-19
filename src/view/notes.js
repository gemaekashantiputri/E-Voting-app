<ScrollView style={tampilan.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#0A0A0A" />
       
        <Text
          style={{
            color: '#0A0A0A',
            fontSize: 20,
            marginTop: 100,
            marginLeft: 20,
          }}>
         Create your Own Voting Now
        </Text>
        
        <TextInput
          value={title}
          onChangeText={(value) => setTitle(value)}
           style={{
            color: '#0A0A0A',
            fontSize: 15,
            marginTop: -500,
            marginLeft: 100,
          }}
          placeholder="Title"
          
        />
        <TextInput
        value={pin}
          onChangeText={(value) => setPin(value)}
           style={{
            color: '#0A0A0A',
            fontSize: 15,
            marginTop: -10,
            marginLeft: 100,
          }}
          placeholder="Pin Kode"
        />
         <TouchableOpacity
          style={tampilan.kontainerbox}
          onPress={() => console.log('Hello')}>
          <Image
            source={require('../images/create.png')}
            style={tampilan.box}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={tampilan.button}
          onPress={submit}>
          <Text style={{color: '#ffff', fontWeight: 'bold', fontSize: 20}}>
            Publish
          </Text>
        </TouchableOpacity>
      </ScrollView>