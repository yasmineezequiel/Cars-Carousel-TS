// eslint-disable-next-line
import React from 'react';
import { useEffect, useState } from 'react';
import { RechargedCar } from '../types/RechargedCar';
import { StyleProvider, ThemePicker } from 'vcc-ui';
import { Text, View } from 'vcc-ui';
import '../stlying/RechargedCars.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination } from 'swiper'
SwiperCore.use([Pagination]);

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
      {loading === true && <div>Loading</div>}
      <Swiper slidesPerView={'auto'} centeredSlides={true} spaceBetween={30} pagination={{ "clickable": true }} className="mySwiper">
        {volvos.map((volvo: any, index: number) => (
          <>
            <SwiperSlide key={index}>
              <StyleProvider>
                <ThemePicker>
                  <View>
                    <Text style={{ fontFamily: 'Volvo Novum', color: '#707070', fontSize: '12px', fontWeight: 'bold' }}>
                     {volvo.bodyType.toUpperCase()}
                    </Text>
                    <Text style={{ color: '#141414', fontWeight: 'bold', fontSize: '16px' }}>
                      {volvo.modelName}
                    </Text>
                    <Text style={{ fontFamily: 'Volvo Novum', color: '#707070', fontSize: '16px' }}>
                      {volvo.modelType}
                    <img src={volvo.imageUrl} alt='Volvo s60 img' style={{ width: '276.89px' }}/>
                    </Text>
                  </View>
                </ThemePicker>
              </StyleProvider>
            </SwiperSlide>
            ...
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default RechargedCars;
