import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { darkConflowerBlue } from '../constants/Colors';

export default function HeartScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff', fontSize: 34, fontWeight: 'bold' }}>
        Welcome to HEART SCREEN!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkConflowerBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
