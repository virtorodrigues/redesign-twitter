import React from 'react'

import Avatar from '../../images/avatar.png';

import './style.css';

export default function MoreInformations () {
  return (
    <div className="informations">
      <strong>Você também pode gostar</strong>
      <button type="button">Atualizar</button>

      <ul>
        <li className="item">
          <img src={Avatar} alt="Avatar" />
          <div className="info">
            <strong>Carlos Henrique</strong>
            <span>@xcarlos</span>
          </div>
        </li>
        <li className="item">
          <img src={Avatar} alt="Avatar" />
          <div className="info">
            <strong>Carlos Henrique</strong>
            <span>@xcarlos</span>
          </div>
        </li>
        <li className="item">
          <img src={Avatar} alt="Avatar" />
          <div className="info">
            <strong>Carlos Henrique</strong>
            <span>@xcarlos</span>
          </div>
        </li>
        <li className="item">
          <img src={Avatar} alt="Avatar" />
          <div className="info">
            <strong>Carlos Henrique</strong>
            <span>@xcarlos</span>
          </div>
        </li>
      </ul>
    </div>
  );
}