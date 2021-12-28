import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            marginBottom: 30,
            marginTop: 0,
            fontWeight: 'bold',
          }}>
          ONLINE FURNITURE STORE
        </Text>

        <Image
          source={require('../assets/couch.png')}
          style={(styles.logoImage, {width: 300, height: 200})}
        />
      </View>

      <View style={styles.secondContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.text}>Dont have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.text1}>Sign in here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    // flex: 2,
    padding: 10,
    margin: 0,
    fontSize: 16,
    //justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: 'orange',
    color: 'white',
  },
  topContainer: {
    //flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 90,
  },
  secondContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  logoImage: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    marginTop: 30,
  },
  buttton: {
    marginBottom: 22,
    backgroundColor: 'white',
    borderRadius: 8,
    //paddingVertical: 14,
    // paddingHorizontal: 10,
    // padding: 12,
  },
  buttonText: {
    color: 'blue',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    fontSize: 15,
    margin: 10,
    //width: 100,
    //height: 35,
    padding: 7,
    backgroundColor: '#FFF',
  },
  text: {
    marginTop: 16,
    color: '#FFF',
    fontSize: 15,
  },
  text1: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    color: '#FFF',
    fontSize: 20,
    marginTop: 6,
  },
});
export default Home;
