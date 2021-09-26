// eslint-disable-next-line
import React from 'react';
import { useEffect, useState } from 'react';
import { RechargedCar } from '../types/RechargedCar';
import { StyleProvider, ThemePicker, Link } from 'vcc-ui';
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
      <div className="app" style={{ paddingTop: '15%' }}>
        <Swiper slidesPerView={1} spaceBetween={15}
          pagination={{ "clickable": true
          }} breakpoints={{
            "@0.00": {
              "slidesPerView": 1.3,
              "spaceBetween": 9
            },
            "@0.75": {
              "slidesPerView": 2,
              "spaceBetween": 20
            },
            "@1.00": {
              "slidesPerView": 3,
              "spaceBetween": 40
            },
            "@1.50": {
              "slidesPerView": 4,
              "spaceBetween": 50
            }
          }} className="mySwiper">
          {volvos.map((volvo, i) => (
            <>
              <SwiperSlide key={i}>
                <StyleProvider>
                  <ThemePicker>
                    <View>
                      <Text style={{ fontFamily: 'Volvo Novum', color: '#707070', fontSize: '12px', fontWeight: 'bold', textAlign: 'left' }}>
                      {volvo.bodyType.toUpperCase()}
                      </Text>
                      <div className='second-row' style= {{ textAlign: 'left', display: 'inline-block' }}>
                        <Text style={{ color: '#141414', fontWeight: 'bold', fontSize: '16px' }}>
                          {volvo.modelName}
                          <Text style={{ fontFamily: 'Volvo Novum', color: '#707070', fontSize: '16px', paddingLeft: '5px' }}>
                          {volvo.modelType}
                        </Text>
                        </Text>
                        <img src={volvo.imageUrl} alt='Volvo s60 img' style={{ width: '276.89px' }}/>
                      </div>
                      <div className='links' style={{ padding: '12px', lineHeight: '1.375rem', justifyContent: 'center', display: 'inline-flex', margin: '2px' }}>
                        <Link href={`/learn/${volvo.id}`} arrow="right">LEARN</Link>
                        <Link href={`/shop/${volvo.id}`} arrow="right">SHOP</Link>
                      </div>
                    </View>
                  </ThemePicker>
                </StyleProvider>
              </SwiperSlide>
              ...
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RechargedCars;
