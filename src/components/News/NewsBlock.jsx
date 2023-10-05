import React from 'react';
import { News } from './News';
import { NewsNav } from './NewsNav';
import { Rates } from './Rates';

const newsData = [
  {
    id: 1,
    src: 'http://calfnote.com/images/html.jpg',
    text: 'Text news',
    link: '#',
  },
  {
    id: 2,
    src: 'http://calfnote.com/images/html.jpg',
    text: 'Text news 2',
    link: '#',
  },
];

const date = new Date();

//Создание блока с новостями + отрисовка списка курсов валют

export const NewsBlock = () => {
  return (
    <div className="news-block">
      <NewsNav />
      <span className="news-block-date">{date.toLocaleDateString()}</span>
      <ul className="news-block-list">
        {newsData.map((data) => (
          <News {...data} key={data.id} />
        ))}
      </ul>
      <Rates />
    </div>
  );
};
