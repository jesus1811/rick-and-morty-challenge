import React, { useEffect, useState } from 'react';
import { Layout, Loading, Pagination, Title } from '@/components';
import { useCounterPage } from '@/hooks';
import { LocationCard } from './components';
import styles from './location.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { Location } from '@/models';
import { locationsSlice } from '@/redux/slices';
import { locationService } from '@/services';
import locationAdapter from '@/adapters/locationAdapter';

const Locations = () => {
  const dispatch = useDispatch();
  const locations: Location[] = useSelector((store: AppStore) => store.locations);
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const { counterPage, handleCounterNext, handleCounterPrev } = useCounterPage(setIsLoader);
  useEffect(() => {
    const getLocations = async () => {
      const results = await locationService.getLocationsService(setIsLoader, counterPage);
      dispatch(locationsSlice.readLocations(results.map((result) => locationAdapter(result))));
    };
    getLocations();
  }, [counterPage]);
  return (
    <Layout
      title="Rickvana | Locations"
      description="Plataforma de rick and morty para ver la serie e informarse"
    >
      <Title variant="primary">Locations</Title>
      <Pagination
        counterPage={counterPage}
        handleCounterNext={handleCounterNext}
        handleCounterPrev={handleCounterPrev}
      />
      {isLoader ? (
        <Loading />
      ) : (
        <div className={styles.cards}>
          {locations.map((location) => (
            <LocationCard key={location.id} location={location} />
          ))}
        </div>
      )}
      <Pagination
        counterPage={counterPage}
        handleCounterNext={handleCounterNext}
        handleCounterPrev={handleCounterPrev}
      />
    </Layout>
  );
};

export default Locations;
