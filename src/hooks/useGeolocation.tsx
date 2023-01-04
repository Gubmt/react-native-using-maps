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
};

type Provider = User & {
  duration?: string;
  durationInSeconds?: number;
  distance?: string;
  price?: string;
};

export type LocationType = {
  latitude: number;
  longitude: number;
  placeId?: string;
};

type ILocationContextData = {
  userLocationInfo: User;
  providerLocationInfo: Provider;
  setProviderLocationInfo: Dispatch<SetStateAction<Provider>>;
  setUserLocationInfo: Dispatch<SetStateAction<User>>;
  getAddressByLocation(): Promise<any>;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

interface ILocationProvider {
  children: ReactNode;
}

const LocationContext = createContext({} as ILocationContextData);

function LocationProvider({children}: ILocationProvider) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [userLocationInfo, setUserLocationInfo] = useState({} as User);
  const [providerLocationInfo, setProviderLocationInfo] = useState(
    {} as Provider,
  );

  const {GOOGLE_MAPS_APIKEY} = process.env;

  const getAddressByLocation = async () => {
    if (userLocationInfo.location) {
      const lat = userLocationInfo.location.latitude + 0.01;
      const lng = userLocationInfo.location.longitude + 0.01;

      return axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_APIKEY}`,
        )
        .then(data => {
          if (data.data.results.length) {
            const {formatted_address, place_id} = data.data.results[0];
            setProviderLocationInfo({
              location: {
                latitude: lat,
                longitude: lng,
                placeId: place_id,
              },
              address: formatted_address,
            });
          } else {
            setError(data.data.status);
          }
          setLoading(false);
        })
        .catch(err => {
          setLoading(false);
          throw new Error(err);
        });
    }
  };

  useEffect(() => {
    if (userLocationInfo.location) {
      setLoading(true);
      setTimeout(() => getAddressByLocation(), 3000);
    }
  }, [userLocationInfo.location]);

  return (
    <LocationContext.Provider
      value={{
        providerLocationInfo,
        userLocationInfo,
        setUserLocationInfo,
        setProviderLocationInfo,
        getAddressByLocation,
        error,
        setError,
        loading,
        setLoading,
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
