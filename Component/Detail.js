import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Card} from 'react-native-elements';

function Detail({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginTop: 20,
          marginLeft: 20,
        }}>
        Detail
      </Text>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: 80,
        }}>
        <Image
          source={require('../assets/furniture1.jpeg')}
          style={(style.logoImage, {width: 200, height: 200})}
        />
      </View>

      <View style={style.content}>
        <Card containerStyle={style.card}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 30,
              }}>
              <Text style={{fontWeight: 'bold', fontSize: 25}}>Sofa</Text>
              <Text
                style={{
                  fontSize: 25,
                  color: '#ebb134',
                  fontWeight: 'bold',
                  marginTop: 16,
                }}>
                $566
              </Text>
            </View>

            <View style={{flexDirection: 'column', marginLeft: 90}}>
              <View style={{flexDirection: 'column'}}>
                <FontAwesome5 name={'heart-o'} style={style.icon} size={30} />
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                <View>
                  <Text style={style.buttonText}>Buy Now</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>

      <View>
        <View style={{margin: 30, marginBottom: 10, flexDirection: 'row'}}>
          <Icon name={'description'} style={style.icon} size={30} />
          <Text style={{marginLeft: 9, fontSize: 20}}>Description</Text>
        </View>
        <View
          style={{
            marginLeft: 30,
            marginRight: 30,
            textAlign: 'justify',
            lineHeight: 30,
          }}>
          <Text style={{fontSize: 16}}>
            A sofa can be defined as an upholstered bench with cushions, two
            arms, and space for several people to sit.“Sofa” is the commonly
            accepted word for the type of seating that fits this description.
          </Text>
        </View>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  logoImage: {
    textAlign: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    marginTop: 20,
  },
  content: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: '#FFF',
    borderWidth: 1,
    marginTop: 15,
    padding: 10,
    backgroundColor: '#ebb134',
  },
  card: {
    borderRadius: 20,
    elevation: 8,
  },
});

export default Detail;
