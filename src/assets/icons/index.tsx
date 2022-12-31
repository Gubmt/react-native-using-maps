import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import svg from './svg';

export type IconProps = {
  name?: string;
  width: string;
  height: string;
  fill?: string;
};

const Icon = (props: IconProps) => <SvgIcon {...props} svgs={svg} />;

export default Icon;
