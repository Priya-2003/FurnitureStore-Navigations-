import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {AuthContext} from './context';

const DrawerContent = props => {
  const {signOut, toggleTheme} = React.useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>@j_doe</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  80
                </Paragraph>
                <Caption style={styles.caption}>Following</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>
                  100
                </Paragraph>
                <Caption style={styles.caption}>Followers</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon1 name="rate-review" color={color} size={size} />
              )}
              label="Review"
              onPress={() => {
                props.navigation.navigate('Review');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon1 name="payments" color={color} size={size} />
              )}
              label="Payment"
              onPress={() => {
                props.navigation.navigate('Payment');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon1 name="details" color={color} size={size} />
              )}
              label="Detail"
              onPress={() => {
                props.navigation.navigate('Detail');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon1 name="domain-verification" color={color} size={size} />
              )}
              label="Verification"
              onPress={() => {
                props.navigation.navigate('Verification');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon1 name="data-usage" color={color} size={size} />
              )}
              label="Data"
              onPress={() => {
                props.navigation.navigate('Data');
              }}
            />

            <DrawerItem
              icon={({color, size}) => (
                <Icon1 name="data-usage" color={color} size={size} />
              )}
              label="FetchData"
              onPress={() => {
                props.navigation.navigate('FetchData');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon1 name="data-usage" color={color} size={size} />
              )}
              label="ApiLogin"
              onPress={() => {
                props.navigation.navigate('ApiLogin');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon1 name="domain-verification" color={color} size={size} />
              )}
              label="singleuser"
              onPress={() => {
                props.navigation.navigate('singleuser');
              }}
            />
          </Drawer.Section>

          {/* <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>ApiLogin
            </TouchableRipple>
          </Drawer.Section> */}
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
};
export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
