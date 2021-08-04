import React from 'react';
import {Button} from '../Button/Button';
import S from '../BookCard/BookCard.module.css';
import imageBook from '../../../../img/imagebook.png';
import favoriteSearchImg from '../../../../img/favoritesearch.svg';


export const BookCard = ({title, img}) => {
  return (
    <div className={S.card}>
      <img className={S.round} src={`http://covers.openlibrary.org/b/olid/${img}-M.jpg`} alt="book card"/>
      <div className={S.textBox}>
        <div className={S.mainText}>
          {title}
        </div>
        <div className={S.secondaryTextBox}>
          <div className={S.secondaryText}>
            {title}
          </div>
          <Button
            className={S.buttonCard}
            onClick={() => {alert('Добавим в избранное?')}}
          >
            <img src={`favoriteSearchImg`} alt="filter"/>
          </Button>
        </div>
      </div>
    </div>
  );
};