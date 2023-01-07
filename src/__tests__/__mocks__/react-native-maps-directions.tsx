import React from 'react';
import {View} from 'react-native';

const MapViewDirections = React.forwardRef(({children, ...props}, ref) => {
  return <View {...props}>{children}</View>;
});

export default MapViewDirections;
