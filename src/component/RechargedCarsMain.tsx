// eslint-disable-next-line
import React from 'react';
import { useEffect, useState } from 'react';
import { RechargedCarDataType } from '../types/RechargedCarDataTypes';
import { StyleProvider, ThemePicker, Link } from 'vcc-ui';
import { Text, View } from 'vcc-ui';
import '../stlying/RechargedCars.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation]);

export interface Props {
  results: RechargedCarDataType[]
}

const RechargedCarsMain: React.FC<Props> = () => {
  const [loading, setLoading] = useState(false)
  const [volvos, setVolvos] = useState([])

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

  return (
    <div>
      {loading === true && <div>Loading</div>}
      <div className="app" style={{ paddingTop: '15%' }}>
        <Swiper slidesPerView={1} spaceBetween={15} navigation
          pagination={{ "clickable": true
          }} breakpoints={{
            "@0.00": {
              "slidesPerView": 1.3,
              "spaceBetween": 9,
            },
            "@0.75": {
              "slidesPerView": 2,
              "spaceBetween": 20,
            },
            "@1.00": {
              "slidesPerView": 3,
              "spaceBetween": 40,
            },
            "@1.50": {
              "slidesPerView": 4,
              "spaceBetween": 50,
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
                      <div className='parent' style= {{ textAlign: 'left', display: 'inline-block', width: '100%' }}>
                        <Text style={{ color: '#141414', fontWeight: 'bold', fontSize: '16px' }}>
                          {volvo.modelName}
                            <Text style={{ fontFamily: 'Volvo Novum', color: '#707070', fontSize: '16px', paddingLeft: '2px' }}>
                            {volvo.modelType}
                            </Text>
                        </Text>
                        <img src={volvo.imageUrl} alt='Volvo s60 img' style={{ width: '276.89px' }}/>
                      </div>
                      <div className='links' style={{ padding: '12px', lineHeight: '1.375rem', justifyContent: 'center', display: 'inline-flex', margin: '7px' }}>
                        <Link href={`/learn/${volvo.id}`} arrow="right" style={{paddingRight: '15px' }}>LEARN</Link>
                        <Link href={`/shop/${volvo.id}`} arrow="right">SHOP</Link>
                      </div>
                    </View>
                  </ThemePicker>
                </StyleProvider>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RechargedCarsMain;
