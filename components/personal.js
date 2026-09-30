import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Personal() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>HELLO, I'M</Text>

      <Text style={styles.name}>ARON K.</Text>

      <Text style={styles.job}>FRONT-END DEVELOPER</Text>

      <Text style={styles.description}>
        I enjoy building modern and simple applications
        with React Native and creating great user experiences.
      </Text>

      <View style={styles.button}>
        <Text style={styles.buttonText}>VIEW PROFILE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8D6',
    margin: 20,
    padding: 35,
    borderRadius: 25,
    alignItems: 'center',
  },

  greeting: {
    fontSize: 15,
    color: '#777',
    marginBottom: 5,
  },

  name: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
  },

  job: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginTop: 5,
  },

  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    lineHeight: 24,
    marginTop: 18,
    maxWidth: 500,
  },

  button: {
    backgroundColor: '#222',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
    marginTop: 22,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

