import Router from 'next/router';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    Router.push('/home');
  }, []);
};

export default Index;
