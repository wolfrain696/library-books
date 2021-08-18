import S from './Favorites.module.css'
import heartImg from '../../../img/heart.svg'
import {AuthorsJSON} from '../../../Fetch/Authors'
import {searchData} from '../../../Fetch/SearchData'
import {FC} from 'react'
import {FavoritesType} from '../../../Types/Types'
import classNames from 'classnames'
import FavoritesStore from '../../../store/FavoritesStore'

//todo типы улучшать надо, никаких any и {}
interface FavoritesProps {
  onData: (obj: {}) => void,
  favoritesList: FavoritesType[],
  onCategory: (category: string) => void,
  category: string
}

export const Favorites: FC<FavoritesProps> = ({onData, favoritesList, onCategory, category}) => {
  const favorites = favoritesList?.map(el => el.page)
  const selectCategory = (obj : {}, key: string) => {

    onData(obj)
    onCategory(key)
  }
  return (
    <div className={S.container}>
      <div className={S.favorites} onClick={() => selectCategory({docs: favorites}, 'favorites')}>
        <img src={heartImg} alt='favorites icon' />
        <span className={classNames(S.title, [category === 'favorites' && S.active])}>Избранное</span>
      </div>
      <div className={ S.category}>
        <ul className={S.category__list}>
          <li className={classNames(S.category__item, [category === 'authors' && S.active])}
              onClick={() => selectCategory(AuthorsJSON, 'authors')}>
            Авторы
          </li>
          <li className={classNames(S.category__item, [category === 'books' && S.active])}
              onClick={() => selectCategory(searchData, 'books')}>
            Книги
          </li>
        </ul>
      </div>
    </div>
  )
}

