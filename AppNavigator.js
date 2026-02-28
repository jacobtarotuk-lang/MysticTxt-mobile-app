import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AnotherScreen from './screens/AnotherScreen';
import LegacyHomeScreen from './screens/LegacyHomeScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Another" component={AnotherScreen} />
      <Stack.Screen name="Legacy Home" component={LegacyHomeScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;