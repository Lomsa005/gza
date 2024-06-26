import React from 'react';
import { View, StyleSheet } from 'react-native';
import FirstPage from './Componets/FirstPage';
import SecondPage from "./Componets/SecondPage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <View style={styles.appContainer}>
      <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={FirstPage} options={{ headerShown: false }}/>
        <Stack.Screen name="SecondPage" component={SecondPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1
  }
});
