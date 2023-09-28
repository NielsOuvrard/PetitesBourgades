import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

import MyComponent from './src/screens/screen1';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <I18nextProvider i18n={i18n}>
        <MyComponent />
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
