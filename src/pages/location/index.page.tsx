import React, { useEffect, useState } from 'react';
import { Layout, Loading, Pagination, Title } from '@/components';
import { useCounterPage } from '@/hooks';
import { LocationCard } from './components';
import { locationService } from '@/services';
import { useDispatch, useSelector } from 'react-redux';
import { locationsSlice } from '@/redux/slices';
import locationAdapter from '@/adapters/locationAdapter';
import { Location } from '@/models';
import { AppStore } from '@/redux/store';
import styles from './location.module.scss';

const Locations = () => {
  const dispatch = useDispatch();
  const { counterPage, handleCounterNext, handleCounterPrev } = useCounterPage();
  const locations: Location[] = useSelector((store: AppStore) => store.locations);
  const [isLoader, setIsLoader] = useState(true);
  const getLocations = async () => {
    const results = await locationService.getLocationsService(setIsLoader);
    dispatch(locationsSlice.readLocations(results.map((result) => locationAdapter(result))));
  };
  useEffect(() => {
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
