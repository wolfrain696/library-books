import S from './Content.module.css'
import avatar from '../../../img/avatar_author-lg.png'
import heartImg from '../../../img/heart.svg'
import favoriteActive from '../../../img/favoriteActive.svg'
import {ExitButton} from './ExitButoon/ExitButton'
import {FC} from 'react'
import {AuthorInfo, FavoritesType, PageType} from '../../../Types/Types'
import DescriptionStore from '../../../store/DescriptionStore'


interface AuthorProps {
  page: PageType,
  info: AuthorInfo,
  favorites: FavoritesType[],
  onFavorites: (page: PageType, info: AuthorInfo) => void,
  removeFavorite: (key: string) => void,
  changePage: (page: PageType | undefined, key: string) => void
}

export const Author: FC<AuthorProps> = ({
                                          page,
                                          info,
                                          favorites,
                                          onFavorites,
                                          removeFavorite,
                                          changePage,
                                        }) => {

  let favoriteStatus: boolean = favorites.filter((el) => el.page.name === page?.name).length === 1

  const addFavorites = () => {
    onFavorites(page, info)
  }
  const windowWidth = () => {
    let w = window.innerWidth
    //todo зачем здесь? он ничего не изменит, если не использовать state или mobx
    //в идеале надо вынести это в стор
    window.onresize = () => {
      w = window.innerWidth
    }
    return w
  }

  const listOfWorks = (val: string ) => {
    DescriptionStore.addAuthorBooks(val)
  }

  let biography = info.bio
  let text
  if (typeof biography != 'undefined') {
    if (typeof biography === 'string') {
      text = biography
    } else {
      text = biography.value
    }
  }

  return (
    <div className={S.description}>
      {windowWidth() < 760 && <div>
        <ExitButton changePage={changePage} />
      </div>}
      <div className={S.top}>
        <div className={S.avatar}>
          {info?.photos ?
            <img
              src={`http://covers.openlibrary.org/b/id/${info.photos[0]}-M.jpg`}
              alt='label'
              className={S.book} />
            :
            <img src={avatar} alt='автор' />
          }
        </div>
        <div className={S.content}>
          <h1 className={S.h1}>
            {info?.name}
          </h1>
          <p>Дата рождения: {info?.birth_date}</p>
          <p className={S.link} onClick={() => listOfWorks(info?.name)}>
            Список работ
          </p>
          {favoriteStatus ?
            <button onClick={() => removeFavorite(page?.key)}>
              <img src={favoriteActive} alt='like' className={S.like_book} />
            </button>
            :
            <button onClick={addFavorites}>
              <img src={heartImg} alt='like' className={S.like_book} />
            </button>
          }
        </div>
      </div>
      {
        biography ?
          <p className={S.p}> {text} </p>
          :
          <h2>Описание отсутствует =(</h2>
      }
    </div>
  )
}
