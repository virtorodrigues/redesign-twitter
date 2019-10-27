import React from 'react'

import Home from '../../images/home.svg';
import Logo from '../../images/logo.svg';
import Avatar from '../../images/avatar.png';
import Message from '../../images/message.svg';
import Notification from '../../images/notification.svg';

import './style.css';

export default function Header () {
  return (
    <header className="main-header">
      <div className="content">
        <nav className="menu">
          <ul>
            <li>
              <img src={Home} alt="Avatar" /> Home
            </li>
            <li>
              <img src={Message} alt="Avatar" /> Notifications
            </li>
            <li>
              <img src={Notification} alt="Avatar" />Messages
            </li>
          </ul>
        </nav>
        <img src={Logo} alt="logo"/>
        <div className="actions">
          <input placeholder="Search on Twitter" type="text" />
          <img src={Avatar} alt="avatar"/>
          <button>Tweet</button>
        </div>
      </div>
    </header>
  );
}