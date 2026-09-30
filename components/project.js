import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import mobileIcon from '../assets/mobile.png';
import weatherIcon from '../assets/weth.png';
import taskIcon from '../assets/task.png';

export default function Project() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MY PROJECTS</Text>

      <View style={styles.projects}>

        <View style={styles.card}>
          <Image source={mobileIcon} style={styles.icon} />
          <Text style={styles.projectTitle}>Mobile Shop</Text>
          <Text style={styles.projectType}>React Native App</Text>
        </View>

        <View style={styles.card}>
          <Image source={weatherIcon} style={styles.icon} />
          <Text style={styles.projectTitle}>Weather App</Text>
          <Text style={styles.projectType}>Mobile Application</Text>
        </View>

        <View style={styles.card}>
          <Image source={taskIcon} style={styles.icon} />
          <Text style={styles.projectTitle}>Task Manager</Text>
          <Text style={styles.projectType}>Productivity App</Text>
        </View>

      </View>

      <View style={styles.button}>
        <Text style={styles.buttonText}>SEE ALL PROJECTS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },

  projects: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },

  card: {
    backgroundColor: '#fff',
    width: '31%',
    minHeight: 190,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,

    elevation: 4,
  },

  icon: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 15,
  },

  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },

  projectType: {
    fontSize: 13,
    color: '#777',
    marginTop: 6,
    textAlign: 'center',
  },

  button: {
    alignSelf: 'center',
    backgroundColor: '#FFD400',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 25,
  },

  buttonText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
