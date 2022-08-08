import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
//you can write your tailwind styles with the normal styling

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          resizeMode="contain"
          style={{ width: 100, height: 100 }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
