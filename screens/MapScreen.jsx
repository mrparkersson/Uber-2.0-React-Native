import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/ Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';

const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            options={{
              headerShown: false,
            }}
            component={NavigateCard}
          />
          <Stack.Screen
            name="RideOptionsCard"
            options={{
              headerShown: false,
            }}
            component={RideOptionsCard}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
