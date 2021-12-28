import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Card} from 'react-native-elements';

function singleuser() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState('');
  console.log(data);
  console.log('hsajfbsd==', Object.values(data));

  useEffect(() => {
    fetch('https://reqres.in/api/users/2')
      .then(response => response.json())
      .then(json => setData(json.data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView style={{flex: 1, padding: 10}}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            // justifyContent: 'space-between',
          }}>
          {data &&
            [data].map(res => (
              <>
                <Card
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 18, color: 'black'}}>{res.id}</Text>
                  <Text style={{fontSize: 18, color: 'black'}}>
                    {res.first_name}
                  </Text>
                  <Text style={{fontSize: 18, color: 'green'}}>
                    {res.last_name}
                  </Text>
                  <Text
                    style={{fontSize: 18, color: 'green', marginBottom: 12}}>
                    {res.email}
                  </Text>
                  <Image
                    style={{width: 30, height: 30}}
                    source={{
                      uri: res.avatar,
                    }}
                  />
                </Card>
              </>
            ))}
        </View>
      )}
    </ScrollView>
  );
}

export default singleuser;
