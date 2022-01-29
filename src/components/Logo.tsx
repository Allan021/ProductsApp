import React from 'react';
import {Image, useWindowDimensions, View} from 'react-native';

export const Logo = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View style={{alignItems: 'center', marginTop: 100}}>
      <Image
        style={{width: width / 1.5, height: height / 10}}
        source={require('../assets/ciruclarss.png')}
      />
    </View>
  );
};
