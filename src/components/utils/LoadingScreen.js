import React from 'react';
import LoadingMask from 'react-loadingmask';
import 'react-loadingmask/dist/react-loadingmask.css';

const LoadingScreen = () => (
  <LoadingMask loading={true} text={'loading...'}>
    <div style={{ width: 50, height: 50 }}></div>
  </LoadingMask>
);

export default LoadingScreen;
