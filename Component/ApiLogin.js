import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const ApiLogin = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [emailerror, setEmailerror] = React.useState('');
  const [passworderror, setPassworderror] = React.useState('');
  const [logindata, setLogindata] = useState([]);

  // useEffect(() => {
  //   fetch('https://reqres.in/api/login')
  //     .then(response => response.json())
  //     .then(json => setLogindata(json.data[0]))
  //     .catch(error => console.error(error));
  // }, []);
  // console.log('hsajfbsd==login', logindata.name);

  const handleLoginpress = () => {
    if (logindata.name !== email) {
      setEmailerror('Please enter a valid email');
    } else if (logindata.pantone_value !== password) {
      setPassworderror('Please enter a valid password');
    } else {
      navigation.navigate('FetchData');
    }
  };
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.sign}>Sign in</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      {logindata.name !== email && (
        <Text style={styles.errortext}>{emailerror}</Text>
      )}
      <TextInput
        style={styles.textinput}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      {logindata.pantone_value !== password && (
        <Text style={styles.errortext}>{passworderror}</Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: 50,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text>Remember me</Text>
        </View>
        <Text style={{paddingLeft: 100}}>Forgot Password?</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLoginpress}>
        <Text style={{fontWeight: 'bold'}}>Sign In</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 30,
        }}>
        <Text>Don't have Account?</Text>
        <Text style={styles.create}>Create Account</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    padding: 10,
    width: 350,
    backgroundColor: '#ebb134',
    borderRadius: 20,
    margin: 40,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    margin: 55,
  },
  textinput: {
    height: 40,
    margin: 12,
    borderRadius: 20,
    borderColor: '#ebb134',
    borderWidth: 1,
    textAlign: 'center',
    width: 350,
  },
  lorem: {
    fontSize: 20,
    margin: 30,
    width: 100,
    height: 35,
    textAlign: 'center',
    borderRadius: 20,
    borderColor: '#ebb134',
    borderWidth: 1,
  },
  create: {
    fontWeight: 'bold',
  },
  sign: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 50,
  },
  errortext: {
    color: 'red',
    margin: 0,
    padding: 0,
  },
});

export default ApiLogin;
