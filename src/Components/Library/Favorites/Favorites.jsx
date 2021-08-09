import S from './Favorites.module.css'
import heartImg from '../../../img/heart.svg'
import {AuthorsJSON} from '../../../Fetch/Authors'
import {searchData} from '../../../Fetch/SearchData'


export const Favorites = ({onData, favoritesList, onCategory, category}) => {
  const favorites = favoritesList?.map(el => el.page)
  const selectCategory = (obj, key) => {
    onData(obj)
    onCategory(key)
  }
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

