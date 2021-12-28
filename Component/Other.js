import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Detail from './Detail';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Review from './Review';
import Verification from './Verification';
import Data from './Data';
import DrawerContent from './DrawerContent';
import FetchData from './FetchData';
import ApiLogin from './ApiLogin';
import singleuser from './singleuser';

function Payment({navigation}) {
  return (
    <View style={{flex: 1, margin: 30}}>
      <Text style={{fontSize: 28, marginLeft: 25, fontWeight: 'bold'}}>
        Top Up FurPay
      </Text>
      <View>
        <Card containerStyle={style.card}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Balance</Text>
          <Text style={{fontWeight: 'bold', fontSize: 27, color: '#ebb134'}}>
            $124
          </Text>
        </Card>
      </View>

      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 19}}>
          Payment Methods
        </Text>

        <Card containerStyle={style.card}>
          <TouchableOpacity onPress={() => navigation.navigate('Verification')}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text>Mobile Banking</Text>
              <View style={{marginLeft: 150}}>
                <Icon name="chevron-right" color="#ebb134" size={15} />
              </View>
            </View>
          </TouchableOpacity>
        </Card>

        <Card containerStyle={style.card}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text>Debit Card</Text>
              <View style={{marginLeft: 180}}>
                <Icon name="chevron-right" color="#ebb134" size={15} />
              </View>
            </View>
          </TouchableOpacity>
        </Card>

        <Card containerStyle={style.card}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text>Internet Banking</Text>
            <View style={{marginLeft: 140}}>
              <Icon name="chevron-right" color="#ebb134" size={15} />
            </View>
          </View>
        </Card>

        <Card containerStyle={style.card}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text>SMS Banking</Text>
            <View style={{marginLeft: 160}}>
              <Icon name="chevron-right" color="#ebb134" size={15} />
            </View>
          </View>
        </Card>

        <Card containerStyle={style.card}>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text>Paypal</Text>
            <View style={{marginLeft: 200}}>
              <Icon name="chevron-right" color="#ebb134" size={15} />
            </View>
          </View>
        </Card>
      </View>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const style = StyleSheet.create({
  card: {
    borderRadius: 20,
    elevation: 8,
  },
});

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={require('../assets/furniture1.jpeg')}
    />
  );
}

export default function Other() {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Data"
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}>
      <Drawer.Screen name="Review" component={Review} />
      <Drawer.Screen name="Payment" component={Payment} />
      <Drawer.Screen name="Detail" component={Detail} />
      <Drawer.Screen name="Verification" component={Verification} />
      <Drawer.Screen name="Data" component={Data} />
      <Drawer.Screen name="FetchData" component={FetchData} />
      <Drawer.Screen name="ApiLogin" component={ApiLogin} />
      <Drawer.Screen name="singleuser" component={singleuser} />
    </Drawer.Navigator>
  );
}
