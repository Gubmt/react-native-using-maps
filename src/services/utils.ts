import {LocationType} from '../hooks/useGeolocation';

export const isObjectEmpty = (object: {}) => {
  return Object.keys(object).length === 0;
};

export const getHeadingFromLocation = (
  locationX: LocationType,
  locationY: LocationType,
) => {
  if (locationX && locationY) {
    const deltaL = locationY.longitude - locationX.longitude;
    const x = Math.cos(locationY.latitude) * Math.sin(deltaL);
    const y =
      Math.cos(locationX.latitude) * Math.sin(locationY.latitude) -
      Math.sin(locationX.latitude) *
        Math.cos(locationY.latitude) *
        Math.cos(deltaL);
    const rad = Math.atan2(x, y);
    const heading = (180 * rad) / Math.PI;
    return heading;
  }
};
