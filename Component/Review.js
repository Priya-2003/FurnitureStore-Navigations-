import React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardDivider} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Rating, AirbnbRating} from 'react-native-elements';

function Review({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{margin: 30}}>
        <Card containerStyle={style.card}>
          <View style={{flexDirection: 'row'}}>
            <Icon name={'face-profile'} size={40} />
            <View style={{flexDirection: 'column'}}>
              <Text style={{marginLeft: 10, fontSize: 16}}>Priya Singh</Text>
              <Rating
                type="custom"
                //ratingImage={WATER_IMAGE}
                ratingColor="#ebb134"
                ratingBackgroundColor="#c8c7c8"
                ratingCount={5}
                imageSize={15}
                //onFinishRating={this.ratingCompleted}
                //style={{paddingVertical: 10}}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              margin: 10,
            }}></View>
          <Text>Good products</Text>
        </Card>

        <Card containerStyle={style.card}>
          <View style={{flexDirection: 'row'}}>
            <Icon name={'face-profile-woman'} size={40} />
            <View style={{flexDirection: 'column'}}>
              <Text style={{marginLeft: 10, fontSize: 16}}>John Doe</Text>
              <Rating
                type="custom"
                //ratingImage={WATER_IMAGE}
                ratingColor="#ebb134"
                ratingBackgroundColor="#c8c7c8"
                ratingCount={4}
                imageSize={15}
                //onFinishRating={this.ratingCompleted}
                //style={{paddingVertical: 10}}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              margin: 10,
            }}></View>
          <Text>Product qualtiy is good and fast services</Text>
        </Card>

        <Card containerStyle={style.card}>
          <View style={{flexDirection: 'row'}}>
            <Icon name={'face-profile-woman'} size={40} />
            <View style={{flexDirection: 'column'}}>
              <Text style={{marginLeft: 10, fontSize: 16}}>Mark</Text>

              <Rating
                type="custom"
                //ratingImage={WATER_IMAGE}
                ratingColor="#ebb134"
                ratingBackgroundColor="#c8c7c8"
                ratingCount={5}
                imageSize={15}
                //onFinishRating={this.ratingCompleted}
                style={{paddingVertical: 10}}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              margin: 10,
            }}></View>
          <Text>webiste is working fine, and products quality is good</Text>
        </Card>

        <Card containerStyle={style.card}>
          <View style={{flexDirection: 'row'}}>
            <Icon name={'face-profile'} size={40} />
            <View style={{flexDirection: 'column'}}>
              <Text style={{marginLeft: 10, fontSize: 16}}>Arav</Text>
              <Rating
                type="custom"
                //ratingImage={WATER_IMAGE}
                ratingColor="#ebb134"
                ratingBackgroundColor="#c8c7c8"
                ratingCount={2}
                imageSize={15}
                //onFinishRating={this.ratingCompleted}
                //style={{paddingVertical: 10}}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'black',
              margin: 10,
            }}></View>
          <Text>
            There was a time when shopping online was just a dream for people.
          </Text>
        </Card>

        <View style={{textAlign: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Data')}>
            <View style={style.button}>
              <Text style={style.buttonText}>Show more Review</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  card: {
    borderRadius: 20,
    elevation: 8,
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

export default Review;
