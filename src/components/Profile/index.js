import React from 'react'

import Url from '../../images/url.svg';
import Born from '../../images/born.svg';
import Place from '../../images/place.svg';
import Images from '../../images/images.svg';
import Avatar from '../../images/avatar.png';
import Joined from '../../images/joined.svg';
import Followers from '../../images/followers.svg';

import './style.css';

export default function Profile () {
  return (
    <div className="profile">

      <img className="avatar-profile" src={Avatar} alt="Avatar"/>

      <strong>Vitor Santos Rodrigues</strong>
      <span>@virtorodrigues</span>
      <p>bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla</p>
    
      <ul className="infos">
        <li>
          <img src={Place}/> São paulo, São paulo
        </li>
        <li>
          <img src={Url} /> github.com
        </li>
        <li>
          <img src={Joined}/> Joined June 2017
        </li>
        <li>
          <img src={Born}/> Born the 17th of April 1996
        </li>
      </ul>

      <div className="widget followers">

        <strong>
          <img src={Followers} alt="Followers" /> 73 followers that you know
        </strong>

        <ul>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
        </ul>

      </div>

      <div className="widget media">

        <strong>
          <img src={Images} alt="Images"/> 265 Photos and videos
        </strong>

        <ul>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
          <li><img /></li>
        </ul>
        
      </div>
    </div>
  );
}