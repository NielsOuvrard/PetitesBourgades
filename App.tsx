import React from 'react';
import { StyleSheet, View } from 'react-native';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import Home from './src/screens/HomeScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
