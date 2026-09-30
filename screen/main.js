import React from 'react';
import { View, StyleSheet } from 'react-native';

import Personal from '../components/personal';
import Project from '../components/project';

export default function Main() {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Personal />
        <Project />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F4F1E8',
  },

  container: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingVertical: 30,
  },
});


