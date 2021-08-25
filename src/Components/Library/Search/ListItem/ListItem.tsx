import React, {FC} from 'react'
import S from './BookCard.module.css'
import favoriteActive from '../../../../img/favoriteActive.svg'
import avatar from '../../../../img/avatar_author-lg.png'
import {Category, FavoritesType, PageType} from '../../../../Types/Types'
import DescriptionStore from '../../../../store/DescriptionStore'

interface ListProps {
  title?: string,
  img?: string,
  name?: string,
  authorPhoto: string,
  item: PageType,
  page: PageType | undefined,
  favorites: FavoritesType[],
  url: string,
  category: Category
}

export const ListItem: FC<ListProps> = ({
                                          title,
                                          img,
                                          name,
                                          authorPhoto,
                                          item,
                                          page,
                                          favorites,
                                          url,
                                          category,
                                        }) => {

  let favoriteStatus = favorites.filter(el => el.page.key === item.key).length === 1

  const changePage = (page: PageType | undefined, key: string) => {
    DescriptionStore.setCurrentPage(page)
    if (page?.type === 'author') {
      DescriptionStore.setDescription('/authors/' + key)
    } else {
      DescriptionStore.setDescription(key)
    }
  }
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
          {favoriteStatus && category !== 'favorites' && <button className={S.buttonCard}>
            <img src={favoriteActive} alt='asd' />
          </button>}
        </div>
      </div>
    </li>
  )
}
