import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card} from 'react-native-elements';

const BlogList = ({blogs, title, handleDelete}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{margin: 10, fontSize: 20}}>{title}</Text>
      {blogs.map(blog => (
        <View
          style={{
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 20,
          }}
          key={blog.id}>
          <Text
            style={{
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {blog.title}
          </Text>
          <Text>Written by {blog.author}</Text>

          <TouchableOpacity onPress={() => handleDelete(blog.id)}>
            <View style={style.button}>
              <Text style={style.buttonText}>Delete Review</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  buttton: {
    // marginBottom: 2,
    borderRadius: 6,
    width: 60,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: '#FFF',
    borderWidth: 1,
    // marginTop: 20,
    padding: 14,
    backgroundColor: '#ebb134',
  },
});

export default BlogList;
