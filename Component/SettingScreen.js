import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-elements';

function SettingScreen({navigation}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={style.container}>
      <Text style={{fontSize: 30, marginLeft: 20, fontWeight: 'bold'}}>
        Notifications
      </Text>
      <Card containerStyle={{borderRadius: 16, elevation: 8}}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Product update
            </Text>
            <Text style={{marginBottom: 10}}>
              show the detail of the product
            </Text>
          </View>

          <View style={{marginLeft: 90, marginTop: 13}}>
            <Switch
              trackColor={{false: '#767577', true: '#ebb134'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              // ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <Card.Divider />

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Comments</Text>
            <Text style={{marginBottom: 10}}>
              Advertising relatopnship v/s business
            </Text>
          </View>
          <View style={{marginLeft: 43, marginTop: 13}}>
            <Switch
              trackColor={{false: '#767577', true: '#ebb134'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              android_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <Card.Divider />

        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={{display: 'flex', flexDirection: 'column'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Offer Updates
            </Text>
            <Text style={{marginBottom: 10}}> A right media can makes</Text>
          </View>
          <View style={{marginLeft: 120, marginTop: 13}}>
            <Switch
              trackColor={{false: '#767577', true: '#ebb134'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              android_backgroundColor="#3e3e3e"
              // onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <Card.Divider />

        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Notifiactions</Text>
        <Text style={{marginBottom: 10}}>
          Creating remarkabale Possible prints
        </Text>
      </Card>

      <View
        style={{
          marginTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={style.button}>
            <Text style={style.buttonText}>Update Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  buttton: {
    marginBottom: 22,
    // backgroundColor: 'red',
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
    marginTop: 20,
    padding: 18,
    backgroundColor: '#ebb134',
  },
});
export default SettingScreen;
