import React from 'react';
import {View} from 'react-native';

const MapView = React.forwardRef(({children, ...props}, ref) => {
  return <View {...props}>{children}</View>;
});

const Marker = React.forwardRef(({children, ...props}, ref) => {
  return <View {...props}>{children}</View>;
});

const Animated = React.forwardRef(({children, ...props}, ref) => {
  return <View {...props}>{children}</View>;
});

const MarkerAnimated = React.forwardRef(({children, ...props}, ref) => {
  return <View {...props}>{children}</View>;
});

class AnimatedRegion {}

export default MapView;

export {Marker, Animated, MarkerAnimated, AnimatedRegion};
