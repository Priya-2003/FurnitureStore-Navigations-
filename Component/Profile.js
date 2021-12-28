import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingScreen from './SettingScreen';
import Other from './Other';
import CartScreen from './CartScreen';
import ShoppingScreen from './ShoppingScreen';
import {Title, Caption} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import {List, Switch} from 'react-native-paper';
import * as themeActions from '../Redux/actions/theme.action';
import {useDispatch, useSelector} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import Icon2 from 'react-native-vector-icons/Ionicons';
// import Icon2 from 'react-native-vector-icons/FontAwesome5';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function ProfileScreen({navigation}) {
  const dispatch = useDispatch();
  const themeReducer = useSelector(({themeReducer}) => themeReducer);

  return (
    <View style={{backgroundColor: '#FFF'}}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: 50,
        }}
        onPress={() => {
          ImagePicker.openPicker({
            width: 30,
            height: 40,
            cropping: true,
          }).then(image => {
            console.log(image);
          });
        }}>
        <FontAwesome5 name={'user-circle'} style={styles.icon} size={60} />
      </TouchableOpacity>
      <View>
        <Title
          style={[
            styles.title,
            {
              marginTop: 15,
              marginBottom: 5,
            },
          ]}>
          Priya
        </Title>
        <Caption style={styles.caption}>P@_01</Caption>
      </View>

      <View style={styles.userInfoSection}>
        <TouchableOpacity>
          <View style={styles.row}>
            <Icon name="email" color="#777777" size={30} />
            <Text style={{color: '#000', marginLeft: 20, fontSize: 20}}>
              Message
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <View style={styles.row}>
            <Icon name="bell-outline" color="#777777" size={30} />
            <Text style={{color: '#000', marginLeft: 20, fontSize: 20}}>
              Notification
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.row}>
            <Icon name="account" color="#777777" size={30} />
            <Text style={{color: '#000', marginLeft: 20, fontSize: 20}}>
              Account Details
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
          <View style={styles.row}>
            <Icon1 name="settings" color="#777777" size={30} />
            <Text style={{color: '#000', marginLeft: 20, fontSize: 20}}>
              Settings
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <List.Item
          title="Dark Mode"
          left={() => <List.Icon icon="brightness-4" />}
          right={() => (
            <Switch
              value={themeReducer.theme}
              onValueChange={val => dispatch(themeActions.ToggleTheme(val))}
            />
          )}
        />
      </View>
    </View>
  );
}

function Profile() {
  return (
    <Tab.Navigator
      theme={DarkTheme}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Profile') {
            //iconName = focused ? 'Profile' : 'user-alt';
            iconName = 'user-alt';
            size = focused ? 25 : 20;
            color = focused ? 'orange' : '#555';
          } else if (route.name === 'Setting') {
            iconName = 'cog';
            size = focused ? 25 : 20;
            color = focused ? 'orange' : '#555';
          } else if (route.name === 'Shopping') {
            iconName = 'shopping-basket';
            size = focused ? 25 : 20;
            color = focused ? 'orange' : '#555';
          } else if (route.name === 'Other') {
            iconName = 'info-circle';
            size = focused ? 25 : 20;
            color = focused ? 'orange' : '#555';
          } else if (route.name === 'Cart') {
            iconName = 'shopping-cart';
            size = focused ? 25 : 20;
            color = focused ? 'orange' : '#555';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'orange',
        inactiveTintColor: '#FFF',
        activeBackgroundColor: '#999',
        inactiveBackgroundColor: '#fff',
        showLabel: true,
        labelStyle: {fontSize: 3},
      }}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        // options={{headerShown: false}}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Icon
              name="user-alt"
              size={25}
              backgroundColor="#0000"
              onPress={() => navigation.openDrawer()}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        // options={{headerShown: false}}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Icon
              name="user-alt"
              size={25}
              backgroundColor="#0000"
              onPress={() => navigation.openDrawer()}></Icon>
          ),
        }}
      />
      <Tab.Screen
        name="Shopping"
        component={ShoppingScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Other"
        component={Other}
        options={{
          title: 'Overview',
          headerLeft: () => (
            <Icon2.Button
              name="ios-menu"
              size={25}
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}></Icon2.Button>

            // <Icon2
            //   name="user-alt"
            //   size={25}
            //   backgroundColor="blue"
            //   onPress={() => navigation.openDrawer()}></Icon2>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    justifyContent: 'center',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    textAlign: 'center',
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    // marginLeft: 20,
    // marginTop: 30,
    backgroundColor: '#F5F5F5',
    height: 40,
    padding: 6,
    margin: 20,
  },
  text: {
    marginLeft: 16,
    fontSize: 20,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    // marginBottom: 25,
    margin: 40,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 30,
    margin: 20,
    marginLeft: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
  },
});

export default Profile;
