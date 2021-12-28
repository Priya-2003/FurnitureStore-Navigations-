import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const Data = () => {
  const [blogs, setBlogs] = useState([
    {title: 'Product is good', body: 'lorem ipsum...', author: 'mario', id: 1},
    {
      title: 'Qualtiy is not good',
      body: 'lorem ipsum...',
      author: 'yoshi',
      id: 2,
    },
    {
      title: 'sometime app crash',
      body: 'lorem ipsum...',
      author: 'priya',
      id: 3,
    },
  ]);

  const [name, setName] = useState('priya');

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [name]);

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
      <BlogList
        blogs={blogs}
        style={{fontSize: 20}}
        title="All Reviews"
        handleDelete={handleDelete}
      />
      <TouchableOpacity onPress={() => setName('archit')}>
        <View style={style.button}>
          {/* <Text style={style.buttonText}>Chage Review</Text> */}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
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
  buttton: {
    // marginBottom: 2,
    borderRadius: 6,
    width: 60,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 15,
    borderColor: '#FFF',
    borderWidth: 1,
    // marginTop: 20,
    padding: 18,
    backgroundColor: '#ebb134',
  },
});

export default Data;
