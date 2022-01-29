import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import {colors} from '../theme/appTheme';

export const Background = ({backgroundColor}: {backgroundColor?: string}) => {
  const {height, width} = useWindowDimensions();
  return (
    <View
      style={{
        backgroundColor: !!backgroundColor ? backgroundColor : colors.primary,
        width,
        height,
        position: 'absolute',
      }}
    />
  );
};
