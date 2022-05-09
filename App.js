import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Navigation from './src/navigation/Navigation';
import Login from './src/Screen/Login';
import { RecoilRoot  } from 'recoil';

export default function App() {
    return (
        <>
            <StatusBar barStyle='dark-content' />
            <RecoilRoot>
                <Navigation />
            </RecoilRoot>
            
        </>
    
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
