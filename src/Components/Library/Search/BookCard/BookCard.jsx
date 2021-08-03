import React from 'react';
import {Button} from '../Button/Button';
import S from '../BookCard/BookCard.module.css';
import imageBook from '../../../../img/imagebook.png';
import favoriteSearchImg from '../../../../img/favoritesearch.svg';


export const BookCard = (props) => {
  return (
    <div className={S.card}>
      <img className={S.round} src={imageBook} alt="book card"/>
      <div className={S.textBox}>
        <div className={S.mainText}>
          Название длинное вообще жесть
        </div>
        <div className={S.secondaryTextBox}>
          <div className={S.secondaryText}>
            Какое-то описание тоже длинное многострочное и всё такое, зависит от конкретного источника данных
          </div>
          <Button
            className={S.buttonCard}
            onClick={() => {alert('Добавим в избранное?')}}
          >
            <img src={favoriteSearchImg} alt="filter"/>
          </Button>
        </div>
      </div>
    </div>
  );
};