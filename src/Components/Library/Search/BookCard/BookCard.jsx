import React from 'react';
import {Button} from '../Button/Button';
import S from '../BookCard/BookCard.module.css';
import favoriteSearchImg from '../../../../img/favoritesearch.svg';
import avatar from '../../../../img/avatar_author-lg.png';


export const BookCard = ({title, img, name, authorPhoto, item, changePage, page}) => {

  return (
    <li className={page === item?S.card + " " + S.active: S.card}>

      <div className={S.avatarBox} onClick={() => changePage(item)}>
        <img className={S.avatar}
                src={`http://covers.openlibrary.org/${img ? 'b' : 'a'}/olid/${img ? img : authorPhoto}-M.jpg`}
                alt='book card' />
        <img className={S.defaultAvatar} src={avatar} alt='avatar'/>
      </div>

      <div className={S.textBox}>
        <div onClick={() => changePage(item)} className={S.mainText}>
          {title ? title : name}
        </div>
        <div className={S.secondaryTextBox}>
          <div className={S.secondaryText}>
            {title}
          </div>
          <Button
            className={S.buttonCard}
            onClick={() => {
              alert('Добавим в избранное?')
            }}
          >
            <img src={favoriteSearchImg} alt='filter' />
          </Button>
        </div>
      </div>
    </li>
  )
}