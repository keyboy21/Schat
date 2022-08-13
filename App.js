import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';
import Home from './Screens/Home';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import Addchat from './Screens/Addchat';
import ChatScreen from './Screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const GlobalScreenOptions = {
    headerStyle: { backgroundColor: '#F97100' },
    headerTitleStyle: { color: 'white' },
    headerTinColor: "white",
    headerTitleAlign: 'center',
  }
  return (
    <SafeAreaProvider>
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={GlobalScreenOptions}>
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='addChat' component={Addchat} />
            <Stack.Screen name='chatScreen' component={ChatScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

