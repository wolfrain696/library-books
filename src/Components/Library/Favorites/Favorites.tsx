import S from './Favorites.module.css'
import heartImg from '../../../img/heart.svg'
import {FC} from 'react'
import {BooksData, FavoritesType, PageType} from '../../../Types/Types'
import classNames from 'classnames'
import DescriptionStore from '../../../store/DescriptionStore'

//todo типы улучшать надо, никаких any и {}
interface FavoritesProps {
  onData: (obj: BooksData[] | PageType[]) => void,
  favoritesList: FavoritesType[],
  category: string
}

export const Favorites: FC<FavoritesProps> = ({onData, favoritesList, category}) => {


  const selectCategory = (key: 'books' | 'favorites' | 'authors') => {
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

