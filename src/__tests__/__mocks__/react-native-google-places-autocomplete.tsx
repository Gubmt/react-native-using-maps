import React from 'react';
import {View} from 'react-native';

const GooglePlacesAutocomplete = React.forwardRef(({children, ...props}) => {
  return <View {...props}>{children}</View>;
});

export {GooglePlacesAutocomplete};
