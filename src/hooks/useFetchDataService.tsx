import React from 'react';
import { useEffect, useState } from 'react';
import { RechargedCarDataType } from '../types/RechargedCarDataTypes';

export interface Props {
  results: RechargedCarDataType[]
}

const useFetchDataService = () => {
  const [loading, setLoading] = useState(false)
  const [volvos, setVolvos] = useState([])
  // const [tag, setTag] = useState('all');


  const fetchData = async () => {
    try {
      const res = await fetch('api/cars.json')
      const data = await res.json()
      setLoading(true)
      setVolvos(data)
      setLoading(false)
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
};

export default useFetchDataService;
