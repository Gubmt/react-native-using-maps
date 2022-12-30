import React, {
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
  getLocationByAddress(address: string): Promise<any>;
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
        const {geometry, formatted_address} = data.data.results[0];
        setUserLocationInfo({
          location: {
            latitude: geometry.location.lat,
            longitude: geometry.location.lng,
          },
          address: formatted_address,
        });

        setProviderLocationInfo({
          location: {
            latitude: geometry.location.lat + 0.09,
            longitude: geometry.location.lng + 0.09,
          },
          address: formatted_address,
        });
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        providerLocationInfo,
        userLocationInfo,
        setProviderLocationInfo,
        getLocationByAddress,
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
