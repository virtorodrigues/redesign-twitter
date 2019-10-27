import React from 'react'

import Like from '../../images/like.svg';
import Tweet from '../../images/tweet.jpg';
import Avatar from '../../images/avatar.png';
import retweet from '../../images/retweet.svg';
import Arrow from '../../images/arrow-down.svg';
import Comments from '../../images/comments.svg';


import './style.css';

const itemList = (item) => (
  <>
    <img className="avatar-tweet" src={Avatar} alt="Avatar"/>
    <div className="info">
      <div className="header">
        <strong>{item.nickName}<span>{item.userName}</span></strong>
        <img className="img-arrow-down" src={item.img} alt="arrow-down" />
      </div>
      <p>{item.description}</p>

      <img className="img-tweet" src={Tweet} alt="img-tweet"/>
      <ul className="actions">
        <li>
          <img className="img-action" src={Comments} alt="Img-Action" />
        </li>
        <li>
          <img className="img-action" src={retweet} alt="Img-Action" />
        </li>
        <li>
          <img className="img-action" src={Like} alt="Img-Action" />
        </li>
      </ul>
    </div>
  </>
)

const tweets = [
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
  { nickName: 'Vitor Santos rodrigues',
    userName: '@virtorodrigues',
    description: 'kadita = perfeição',
    img: Arrow 
  },
]

export default function Feed () {

  const qtdItem = 10;

  return (
    <div className="feed">
      <nav>
        <a href="" className="active">Tweets</a>
        <a href="">Tweets and repaes</a>
        <a href="">Medias</a>
      </nav>

      <div className="tweets">
        <ul>

          { tweets.map((item, i) => 
            (<li key={i} className="tweet">
              { itemList(item) }
            </li>)
          )} 

        </ul>
      </div>
      
    </div>
  );
}