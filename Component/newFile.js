import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

const Data = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      });
  }, []);

  const [name, setName] = useState('priya');

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <View
      style={{justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
      <BlogList blogs={blogs} title="All Reviews" handleDelete={handleDelete} />
      <TouchableOpacity onPress={() => setName('archit')}>
        <View style={style.button}>
          {/* <Text style={style.buttonText}>Chage Review</Text> */}
        </View>
      </TouchableOpacity>
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
