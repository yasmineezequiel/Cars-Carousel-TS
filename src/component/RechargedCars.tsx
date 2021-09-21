// eslint-disable-next-line
import React from 'react';
import useFetchDataService from '../hooks/useFetchDataService';

const RechargedCars: React.FC<{}> = () => {
  const service = useFetchDataService();

  return (
    <>
      <div>
        {service.status === 'loading' && <div>Loading...</div>}
        {service.status === 'loaded' &&
          service.payload.results.map(item => (
            <div key={item.id}>{item.modelName}</div>
          ))}
          {service.status === 'error' && (
            <div>Error, the backend drove off the road.</div>
          )}
      </div>
    </>
  );
};

export default RechargedCars;
