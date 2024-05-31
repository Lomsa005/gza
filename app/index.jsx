import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FirstPage } from './Componets/FirstPage';
export default function Index() {
  return (
    <View style={styles.appContainer}>
      <FirstPage />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});
