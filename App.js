import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native</Text>
        <Text style={styles.postDescription}>
          Cillum eiusmod laboris nostrud non id velit sunt minim do eiusmod
          laborum aliqua. Anim ipsum dolore excepteur velit nulla anim ex anim
          consectetur eiusmod consectetur aliqua duis. Velit incididunt dolore
          dolor velit. Excepteur mollit et enim velit in ea reprehenderit mollit
          pariatur mollit culpa. Duis proident sit amet eiusmod incididunt
          voluptate duis tempor velit sint.
        </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native</Text>
        <Text style={styles.postDescription}>
          Cillum eiusmod laboris nostrud non id velit sunt minim do eiusmod
          laborum aliqua. Anim ipsum dolore excepteur velit nulla anim ex anim
          consectetur eiusmod consectetur aliqua duis. Velit incididunt dolore
          dolor velit. Excepteur mollit et enim velit in ea reprehenderit mollit
          pariatur mollit culpa. Duis proident sit amet eiusmod incididunt
          voluptate duis tempor velit sint.
        </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native</Text>
        <Text style={styles.postDescription}>
          Cillum eiusmod laboris nostrud non id velit sunt minim do eiusmod
          laborum aliqua. Anim ipsum dolore excepteur velit nulla anim ex anim
          consectetur eiusmod consectetur aliqua duis. Velit incididunt dolore
          dolor velit. Excepteur mollit et enim velit in ea reprehenderit mollit
          pariatur mollit culpa. Duis proident sit amet eiusmod incididunt
          voluptate duis tempor velit sint.
        </Text>
      </View>
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>Estudando React Native</Text>
        <Text style={styles.postDescription}>
          Cillum eiusmod laboris nostrud non id velit sunt minim do eiusmod
          laborum aliqua. Anim ipsum dolore excepteur velit nulla anim ex anim
          consectetur eiusmod consectetur aliqua duis. Velit incididunt dolore
          dolor velit. Excepteur mollit et enim velit in ea reprehenderit mollit
          pariatur mollit culpa. Duis proident sit amet eiusmod incididunt
          voluptate duis tempor velit sint.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF',
  },
  postContainer:{
    marginVertical:10,
    marginHorizontal:20,
    padding:2,
    backgroundColor:"#FFF",
    borderRadius:3
  },
  postTitle:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:5,
  },
  postDescription:{
    color:"#666"
  }
});

export default App;
