import React, {FC} from 'react'
import S from './BookCard.module.css'
import favoriteActive from '../../../../img/favoriteActive.svg'
import avatar from '../../../../img/avatar_author-lg.png'
import {DescriptionTypes, FavoritesType, PageType} from '../../../../Types/Types'

interface ListProps {
  title: string,
  img: string,
  name: string,
  authorPhoto: string,
  item: PageType,
  changePage: (page: PageType, key: string) => void,
  page: PageType | undefined,
  favorites: FavoritesType[],
  url: string,
  category: 'books' | 'favorites' | 'authors'
}

export const ListItem: FC<ListProps> = ({
                                          title,
                                          img,
                                          name,
                                          authorPhoto,
                                          item,
                                          changePage,
                                          page,
                                          favorites,
                                          url,
                                          category,
                                        }) => {

  let favoriteStatus = favorites.filter(el => el.page.key === item.key).length === 1

  return (
    <li className={page === item ? S.card + ' ' + S.active : S.card}
        onClick={() => changePage(item, url)}
    >

      <div className={S.avatarBox}>
        <img className={S.avatar}
             src={`http://covers.openlibrary.org/${img ? 'b' : 'a'}/olid/${img ? img : authorPhoto}-M.jpg`}
             alt='book card' />
        <img className={S.defaultAvatar} src={avatar} alt='avatar' />
      </div>

      <div className={S.textBox}>
        <div className={S.mainText}>
          {title ? title : name}
        </div>
        <div className={S.secondaryTextBox}>
          <div className={S.secondaryText}>
            {title}
          </div>
          {favoriteStatus && category != 'favorites' && <button className={S.buttonCard}>
            <img src={favoriteActive} alt='asd' />
          </button>}
        </div>
      </div>
    </li>
  )
}
