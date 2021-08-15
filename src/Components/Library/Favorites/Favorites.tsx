import S from './Favorites.module.css'
import heartImg from '../../../img/heart.svg'
import {AuthorsJSON} from '../../../Fetch/Authors'
import {searchData} from '../../../Fetch/SearchData'
import {FC} from 'react'
import {FavoritesType} from '../../../Types/Types'

//todo типы улучшать надо, никаких any и {}
interface FavoritesProps {
  onData: (obj: {}) => void,
  favoritesList: FavoritesType[],
  onCategory: any,
  category: any
}

export const Favorites: FC<FavoritesProps> = ({onData, favoritesList, onCategory, category}) => {
  const favorites = favoritesList?.map(el => el.page)
  const selectCategory = (obj : {}, key: string) => {
    onData(obj)
    onCategory(key)
  }

  //TODO используй classnames, Люк!
  //вместо category === 'authors' ? S.category__item + ' ' + S.active : S.category__item
  //будет classnames(S.category__item, [category === 'authors' && S.active])
  //ещё category и category__list классы не существуют

  return (
    <div className={S.container}>
      <div className={S.favorites} onClick={() => selectCategory({docs: favorites}, 'favorites')}>
        <img src={heartImg} alt='favorites icon' />
        <span className={category === 'favorites' ? S.title + ' ' + S.active : S.title}>Избранное</span>
      </div>
      <div className={S.category}>
        <ul className={S.category__list}>
          <li className={category === 'authors' ? S.category__item + ' ' + S.active : S.category__item}
              onClick={() => selectCategory(AuthorsJSON, 'authors')}>
            Авторы
          </li>
          <li className={category === 'books' ? S.category__item + ' ' + S.active : S.category__item}
              onClick={() => selectCategory(searchData, 'books')}>
            Книги
          </li>
        </ul>
      </div>
    </div>
  )
}

