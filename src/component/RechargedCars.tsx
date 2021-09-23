// eslint-disable-next-line
import React from 'react';
import { useEffect, useState } from 'react';
import { RechargedCar } from '../types/RechargedCar';
import '../stlying/RechargedCars.css';

export interface Props {
  results: RechargedCar[]
}

const RechargedCars: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false)
  const [volvos, setVolvos] = useState([])

  const fetchData = async () => {
    try {
      const res = await fetch('api/cars.json')
      const txt = await res.json()
      setLoading(true)
      setVolvos(txt)
      setLoading(false)
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
      <div>
        {loading === true && <div>Loading...</div>}
        {volvos.map((volvo: any, index) => (volvo.bodyType))}
      </div>
  );
};

export default RechargedCars;
