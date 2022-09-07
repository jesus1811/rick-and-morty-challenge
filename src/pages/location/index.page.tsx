import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, Loading, Pagination, Title } from '@/components';
import { Location } from '@/models';
import { useCounterPage } from '@/hooks';
import { AppStore } from '@/redux/store';
import { getLocationsService } from '@/services';
import { readLocations } from '@/redux/slices';
import { locationAdapter } from '@/adapters';
import { LocationCard } from './components';
import styles from './location.module.scss';

const Locations = () => {
  const dispatch = useDispatch();
  const locations: Location[] = useSelector((store: AppStore) => store.locations);
  const [isLoader, setIsLoader] = useState<boolean>(true);
  const { counterPage, handleCounterNext, handleCounterPrev } = useCounterPage(setIsLoader);
  useEffect(() => {
    const getLocations = async () => {
      const results = await getLocationsService(setIsLoader, counterPage);
      dispatch(readLocations(results.map((result) => locationAdapter(result))));
    };
    getLocations();
  }, [dispatch, counterPage]);
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
