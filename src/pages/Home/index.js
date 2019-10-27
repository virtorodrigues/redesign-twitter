import React, { Component } from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import InfoBar from '../../components/InfoBar';
import Profile from '../../components/Profile';
import Feed from '../../components/Feed';
import MoreInformations from '../../components/MoreInformations';

import './style.css';

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <InfoBar />
      <div className="content">
        <Profile />
        <Feed />
        <div>
          <MoreInformations />
          <MoreInformations />
          <MoreInformations />
        </div>
      </div>
    </>
  );
}