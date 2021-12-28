import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function CartScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <Text
        style={{margin: 20, marginLeft: 30, fontSize: 30, fontWeight: 'bold'}}>
        Add Card Detail
      </Text>
      <View style={{marginTop: 10, marginLeft: 20, justifyContent: 'center'}}>
        <Image
          source={require('../assets/card1.png')}
          style={(style.logoImage, {width: 350, height: 200})}
        />
      </View>

      <View style={style.detail}>
        <Text style={{fontSize: 19, fontWeight: 'bold'}}>Add New Card</Text>
        <TextInput style={style.textinput} placeholder="CardHolder Name" />
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            margin: 5,
          }}
        />

        <Text style={{fontSize: 19, fontWeight: 'bold', marginTop: 9}}>
          Card Number
        </Text>
        <TextInput style={style.textinput} placeholder=" 000000000000" />
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            margin: 5,
          }}
        />
      </View>
      <View
        style={{
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={style.button}>
            <Text style={style.buttonText}>Add Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  logoImage: {
    position: 'absolute',
    marginTop: 20,
  },
  detail: {
    margin: 30,
    marginLeft: 30,
  },
  textinput: {
    height: 40,
    width: 350,
    fontSize: 17,
  },
  buttton: {
    // marginBottom: 2,
    borderRadius: 6,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: '#FFF',
    borderWidth: 1,
    // marginTop: 20,
    padding: 18,
    backgroundColor: '#ebb134',
  },
});

export default CartScreen;
