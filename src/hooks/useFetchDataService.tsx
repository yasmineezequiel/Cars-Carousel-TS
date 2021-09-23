import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { RechargedCar } from '../types/RechargedCar';

export interface RechargedCars {
  results: RechargedCar[]
}

const useFetchDataService = () => {
  const [cars, setCar] = useState<Service<RechargedCars>>({
    status: 'loading'
  });

  useEffect(() => {
      fetch('api/cars.json')
      .then(response => response.json())
      .then(response => setCar(response))
      .catch(error => setCar({ status: 'error', error}))
  }, [])
  return cars
};

export default useFetchDataService;
