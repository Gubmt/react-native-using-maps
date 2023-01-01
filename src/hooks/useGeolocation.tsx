/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from 'react';
import axios from 'axios';

type User = {
  location?: LocationType;
  address?: string;
  error?: string;
};

type Provider = User & {
  duration?: string;
  distance?: string;
  price?: string;
};

export type LocationType = {
  latitude: number;
  longitude: number;
};

type ILocationContextData = {
  userLocationInfo: User;
  providerLocationInfo: Provider;
  setProviderLocationInfo: Dispatch<SetStateAction<Provider>>;
  setUserLocationInfo: Dispatch<SetStateAction<User>>;
  getLocationByAddress(address: string): Promise<any>;
  getAddressByLocation(): Promise<any>;
};

interface ILocationProvider {
  children: ReactNode;
}

const LocationContext = createContext({} as ILocationContextData);

function LocationProvider({children}: ILocationProvider) {
  const [userLocationInfo, setUserLocationInfo] = useState({} as User);
  const [providerLocationInfo, setProviderLocationInfo] = useState(
    {} as Provider,
  );

  const getLocationByAddress = async (address: string) => {
    return axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyA7Ef0CvwLwFPEAfwMt57RSzP0LYXtanEI`,
      )
      .then(data => {
        console.log(data.data);
        if (data.data.results.length) {
          const {geometry, formatted_address} = data.data.results[0];
          setUserLocationInfo({
            location: {
              latitude: geometry.location.lat,
              longitude: geometry.location.lng,
            },
            address: formatted_address,
          });
        } else {
          setUserLocationInfo({
            error: data.data.status,
          });
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  const getAddressByLocation = async () => {
    if (userLocationInfo.location) {
      const lat = userLocationInfo.location.latitude + 0.01;
      const lng = userLocationInfo.location.longitude + 0.01;

      return axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyA7Ef0CvwLwFPEAfwMt57RSzP0LYXtanEI`,
        )
        .then(data => {
          if (data.data.results.length) {
            const {formatted_address} = data.data.results[0];
            setProviderLocationInfo({
              location: {
                latitude: lat,
                longitude: lng,
              },
              address: formatted_address,
            });
          } else {
            setProviderLocationInfo({
              error: data.data.status,
            });
          }
        })
        .catch(error => {
          throw new Error(error);
        });
    }
  };

  useEffect(() => {
    if (userLocationInfo.location) {
      getAddressByLocation();
    }
  }, [userLocationInfo.location]);

  return (
    <LocationContext.Provider
      value={{
        providerLocationInfo,
        userLocationInfo,
        setUserLocationInfo,
        setProviderLocationInfo,
        getLocationByAddress,
        getAddressByLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

const useGeolocation = () => {
  const context = useContext(LocationContext);
  return context;
};

export {LocationProvider, useGeolocation};
