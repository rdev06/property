import 'react-native-gesture-handler';
import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import RootNav from './src/RootNav';


export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider theme={MD3LightTheme}>
        <RootNav />
      </PaperProvider>
    </NavigationContainer>
  );
}