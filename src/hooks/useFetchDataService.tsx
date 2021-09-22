import { useEffect, useState } from 'react';
import { Service } from '../types/Service';
import { RechargedCar } from '../types/RechargedCar';

export interface RechargedCars {
  results: RechargedCar[]
}

const useFetchDataService = () => {
  const [car, setCar] = useState<Service<RechargedCars>>({
    status: 'loading'
  });

  useEffect(() => {
      fetch('api/cars.json')
      .then(response => response.json())
      .then(response => setCar(response))
      .catch(error => setCar({ status: 'error', error}))
  }, [])
  return car
};

export default useFetchDataService;
