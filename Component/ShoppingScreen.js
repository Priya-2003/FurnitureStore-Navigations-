import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class ShoppingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({clicks: this.state.clicks + 1});
  };
  DecreaseItem = () => {
    this.setState({clicks: this.state.clicks - 1});
  };

  render() {
    return (
      <ScrollView>
        <Card containerStyle={styles.card}>
          <View style={styles.content}>
            <Card.Image
              source={require('../assets/chair1.jpg')}
              style={{width: 60, height: 60}}></Card.Image>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: 40,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chair</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: 12,
                }}>
                <TouchableOpacity
                  style={styles.floatingButton}
                  // onPress={this.IncrementItem}
                >
                  <Icon name="plus" size={20} color="#000" />
                </TouchableOpacity>

                <Text style={styles.text}>0</Text>

                <TouchableOpacity
                  style={styles.floatingButton}
                  // onPress={this.DecreaseItem}
                >
                  <Icon name="minus" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontSize: 30,
                marginTop: 30,
                marginLeft: 30,
                color: '#ebb134',

                fontWeight: 'bold',
              }}>
              $234
            </Text>
          </View>
        </Card>

        <Card containerStyle={styles.card}>
          <View style={styles.content}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Detail')}>
              <Card.Image
                source={require('../assets/sofa.png')}
                style={{width: 60, height: 60}}></Card.Image>
            </TouchableOpacity>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: 40,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sofa</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: 12,
                }}>
                <TouchableOpacity
                  style={styles.floatingButton}
                  onPress={this.IncrementItem}>
                  <Icon name="plus" size={20} color="#000" />
                </TouchableOpacity>

                <Text style={styles.text}>{this.state.clicks}</Text>

                <TouchableOpacity
                  style={styles.floatingButton}
                  onPress={this.DecreaseItem}>
                  <Icon name="minus" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontSize: 30,
                marginTop: 30,
                marginLeft: 30,
                color: '#ebb134',
                fontWeight: 'bold',
              }}>
              $134
            </Text>
          </View>
        </Card>

        <Card containerStyle={styles.card}>
          <View style={styles.content}>
            <Card.Image
              source={require('../assets/sofa1.jpeg')}
              style={{width: 60, height: 60}}></Card.Image>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: 40,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>sofa</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: 12,
                }}>
                <TouchableOpacity
                  style={styles.floatingButton}
                  // onPress={this.IncrementItem}
                >
                  <Icon name="plus" size={20} color="#000" />
                </TouchableOpacity>
                <Text style={styles.text}>0</Text>

                <TouchableOpacity
                  style={styles.floatingButton}
                  // onPress={this.DecreaseItem}
                >
                  <Icon name="minus" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontSize: 30,
                marginTop: 30,
                marginLeft: 30,
                color: '#ebb134',

                fontWeight: 'bold',
              }}>
              $340
            </Text>
          </View>
        </Card>

        <Card containerStyle={styles.card}>
          <View style={styles.content}>
            <Card.Image
              source={require('../assets/chair1.jpg')}
              style={{width: 60, height: 60}}></Card.Image>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: 40,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chair</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: 12,
                }}>
                <TouchableOpacity style={styles.floatingButton}>
                  <Icon name="plus" size={20} color="#000" />
                </TouchableOpacity>

                <Text style={styles.text}>0</Text>

                <TouchableOpacity
                  style={styles.floatingButton}
                  // onPress={this.DecreaseItem}
                >
                  <Icon name="minus" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontSize: 30,
                marginTop: 30,
                marginLeft: 30,
                color: '#ebb134',
                fontWeight: 'bold',
              }}>
              $234
            </Text>
          </View>
        </Card>

        <Card containerStyle={styles.card}>
          <View style={styles.content}>
            <Card.Image
              source={require('../assets/chair1.jpg')}
              style={{width: 60, height: 60}}></Card.Image>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: 40,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Chair</Text>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  margin: 12,
                }}>
                <TouchableOpacity
                  style={styles.floatingButton}
                  onPress={this.IncrementItem}>
                  <Icon name="plus" size={20} color="#000" />
                </TouchableOpacity>

                <Text style={styles.text}>{this.state.clicks}</Text>

                <TouchableOpacity
                  style={styles.floatingButton}
                  onPress={this.DecreaseItem}>
                  <Icon name="minus" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontSize: 30,
                marginTop: 30,
                marginLeft: 30,
                color: '#ebb134',
                fontWeight: 'bold',
              }}>
              $450
            </Text>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {margin: 10},
  content: {
    flexDirection: 'row',
    marginLeft: 7,
  },

  floatingButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 9,
  },
  text: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
    backgroundColor: '#fff',
    borderRadius: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  card: {
    borderRadius: 20,
    elevation: 8,
  },
});

export default ShoppingScreen;
