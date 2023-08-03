import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import AppColors from './app/utils/AppColors';
import { Menu } from './app/components/Menu';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <Menu/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.system._default,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
