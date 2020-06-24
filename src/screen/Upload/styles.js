import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: "80%",
    height: "60%",
    marginLeft: 60,
    marginTop: 60
  },
  deleteIcon: {
    position: 'absolute',
    right: 55,
    top: -15
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;