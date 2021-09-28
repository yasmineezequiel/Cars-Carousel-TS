// eslint-disable-next-line
import React from 'react';
import useViewport from '../hooks/useViewport';
import "swiper/swiper-bundle.css";
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation]);


interface ResponsiveLayoutProps {
    breakpoint: 760;
}

const MobileComponent = () => <p>"Hmmm... Why is your screen so small?"</p>;
const DesktopComponent = () => <p>"Wow, your screen is big!"</p>;

export const ResponsiveLayout: React.FC<ResponsiveLayoutProps> = ({
  breakpoint
}) => {
  const { width } = useViewport();

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};
