import React from 'react'

import More from '../../images/more.svg';

import './style.css';

export default function InfoBar () {
  return (
    <div className="bar">
      <div className="content">
        <ul>
          <li class="active">
            <span>Tweets</span>
            <strong>545</strong>
          </li>
          <li>
            <span>Followings</span>
            <strong>545</strong>
          </li>
          <li>
            <span>Followers</span>
            <strong>545</strong>
          </li>
          <li>
            <span>Favorites</span>
            <strong>545</strong>
          </li>
        </ul>

        <div className="actions">
          <button type="button">Follow</button>
          <img src={More} alte="More" />
        </div>
      </div>
    
    </div>
  );
}