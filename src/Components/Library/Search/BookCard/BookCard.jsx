import React from 'react'
import {Button} from '../Button/Button'
import S from '../BookCard/BookCard.module.css'
import favoriteSearchImg from '../../../../img/favoritesearch.svg'
import avatar from '../../../../img/avatar_author-lg.png'
import {description} from '../../../../Fetch/description'
import {Author} from '../../../../Fetch/Authors'


export const BookCard = ({title, img, name, authorPhoto, item, changePage, page, info, favorites}) => {
  const des = description.filter(el => el.key === item.key)
  const author = Author.filter(el => el.name === item.name)
  return (
    <li className={page === item ? S.card + ' ' + S.active : S.card}
        onClick={() => changePage(item, item.type === 'work' ? des[0] : author[0] )}
    >

      <div className={S.avatarBox}>
        <img className={S.avatar}
             src={`http://covers.openlibrary.org/${img ? 'b' : 'a'}/olid/${img ? img : authorPhoto}-M.jpg`}
             alt='book card' />
        <img className={S.defaultAvatar} src={avatar} alt='avatar' />
      </div>

      <div className={S.textBox}>
        <div onClick={() => changePage(item)} className={S.mainText}>
          {title ? title : name}
        </div>
        <div className={S.secondaryTextBox}>
          <div className={S.secondaryText}>
            {title}
          </div>
          {/*<Button className={S.buttonCard}>*/}
          {/*  <img src={favoriteSearchImg} alt='asd' />*/}
          {/*</Button>*/}
        </div>
      </div>
    </li>
  )
}