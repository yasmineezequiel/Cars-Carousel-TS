// eslint-disable-next-line
import React from 'react';
import useFetchDataService from '../hooks/useFetchDataService';

const RechargedCars: React.FC<{}> = () => {
  const service = useFetchDataService();

  return (
    <>
      <div>
        {service.status === 'loading' && <div>Loading...</div>}
        {JSON.stringify(service)}
        {service.status === 'error' && (
            <div>Error, the backend drove off the road.</div>
          )}
      </div>
    </>
  );
};

export default RechargedCars;
