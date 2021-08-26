import S from './Content.module.css'
import avatar from '../../../img/avatar_author-lg.png'
import heartImg from '../../../img/heart.svg'
import favoriteActive from '../../../img/favoriteActive.svg'
import {ExitButton} from './ExitButoon/ExitButton'
import {FC} from 'react'
import {AuthorInfo, FavoritesType, PageType} from '../../../Types/Types'
import DescriptionStore from '../../../store/DescriptionStore'
import FavoritesStore from '../../../store/FavoritesStore'


interface AuthorProps {
  page: PageType,
  info: AuthorInfo,
  favorites: FavoritesType[],
}

export const Author: FC<AuthorProps> = ({
                                          page,
                                          info,
                                          favorites,
                                        }) => {

  let favoriteStatus: boolean = favorites.filter((el) => el.page.name === page?.name).length === 1


  const listOfWorks = (val: string) => {
    DescriptionStore.addAuthorBooks(val)
    window.innerWidth < 800 &&
    DescriptionStore.removeDescription()
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
      {window.innerWidth < 760 && <div>
        <ExitButton />
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
            <button onClick={() => FavoritesStore.removeFavorites(page?.key)}>
              <img src={favoriteActive} alt='like' className={S.like_book} />
            </button>
            :
            <button onClick={() => FavoritesStore.addFavorite(page, info)}>
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
