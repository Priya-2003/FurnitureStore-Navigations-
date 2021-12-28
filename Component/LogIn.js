import React, {useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {AuthContext} from './context';

function LogIn({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [emailerror, setEmailerror] = React.useState('');
  const [passworderror, setPassworderror] = React.useState('');
  const [message, setMessage] = React.useState('login');

  const signInn = async () => {
    if (email != '' && password != '') {
      await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          Accept: 'applications/json',
          'Content-type': 'applications/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(resData => {
          setMessage(resData.message);
        });
    } else {
      navigation.navigate('Profile');
    }
  };

  console.log('data=====>');
  const handleLoginpress = () => {
    if (!email) {
      setEmailerror('Please enter a valid email');
    } else if (!password) {
      setPassworderror('Please enter a valid password');
    } else {
      navigation.navigate('Profile');
    }
  };

  const {signIn} = React.useContext(AuthContext);

  return (
    <View style={Styles.container}>
      {/* <Text style={Styles.login}>LogIn</Text> */}
      <Text>{message}</Text>
      <TextInput
        style={Styles.textinput}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      {!email && <Text style={Styles.errortext}>{emailerror}</Text>}

      <TextInput
        style={Styles.textinput}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      {!password && <Text style={Styles.errortext}>{passworderror}</Text>}

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
      <TouchableOpacity
        style={Styles.button}
        // onPress={signInn}
        onPress={handleLoginpress}

        //onPress={() => navigation.navigate('Profile')}
      >
        <Text style={{fontWeight: 'bold'}}>Log In</Text>
      </TouchableOpacity>

      <View style={Styles.btn}>
        <TouchableOpacity>
          <View style={Styles.btn1}>
            <Text>LogIn</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <View style={Styles.btn1}>
            <Text>SignUp</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  login: {
    fontWeight: 'bold',
    fontSize: 25,
    margin: 20,
    marginTop: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    width: 350,
    backgroundColor: '#ebb134',
    borderRadius: 20,
    // margin: 20,
  },
  btn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //alignItems: 'center',
    justifyContent: 'space-between',
    margin: 40,
  },
  btn1: {
    fontSize: 20,
    margin: 20,
    width: 100,
    height: 35,
    textAlign: 'center',
    borderRadius: 20,
    borderColor: '#ebb134',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  errortext: {
    color: 'red',
    margin: 0,
    padding: 0,
  },
});
export default LogIn;
