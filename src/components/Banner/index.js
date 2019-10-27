import React from 'react'

import Background from '../../images/background.jpg';

import './style.css';

export default function Banner () {
  return (
    <div className="banner">
      <img src={Background} alt="Banner" />
    </div>
  );
}