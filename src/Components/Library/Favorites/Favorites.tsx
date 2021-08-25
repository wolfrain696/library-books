import S from './Favorites.module.css'
import heartImg from '../../../img/heart.svg'
import {FC} from 'react'
import classNames from 'classnames'
import DescriptionStore from '../../../store/DescriptionStore'
import {Category} from '../../../Types/Types'

interface FavoritesProps {
  category: string
}

export const Favorites: FC<FavoritesProps> = ({category}) => {


  const selectCategory = (key: Category) => {
      DescriptionStore.changeCategory(key)
  }

  return (
    <div className={S.container}>
      <div className={S.favorites} onClick={() => selectCategory('favorites')}>
        <img src={heartImg} alt='favorites icon' />
        <span className={classNames(S.title, [category === 'favorites' && S.active])}>Избранное</span>
      </div>
      <div className={S.category}>
        <ul className={S.category__list}>
          <li className={classNames(S.category__item, [category === 'authors' && S.active])}
              onClick={() => selectCategory('authors')}>
            Авторы
          </li>
          <li className={classNames(S.category__item, [category === 'books' && S.active])}
              onClick={() => selectCategory('books')}>
            Книги
          </li>
        </ul>
      </div>
    </div>
  )
}

