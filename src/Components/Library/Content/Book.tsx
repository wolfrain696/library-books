import S from './Content.module.css'
import heartImg from '../../../img/heart.svg'
import avatar from '../../../img/avatar_author-lg.png'
import favoriteActive from '../../../img/favoriteActive.svg'
import {ExitButton} from './ExitButoon/ExitButton'
import {FC} from 'react'
import {BookInfo, FavoritesType, PageType} from '../../../Types/Types'
import DescriptionStore from '../../../store/DescriptionStore'

interface BookProps {
  page: PageType,
  info: BookInfo,
  favorites: FavoritesType[],
  onFavorites: (page: PageType, info: BookInfo) => void,
  removeFavorite: (key: string) => void,
  changePage: (page: PageType | undefined, key: string) => void
}

export const Book: FC<BookProps> = ({
                                      page,
                                      info,
                                      onFavorites, favorites,
                                      removeFavorite,
                                      changePage,
                                    }) => {

  let favoriteStatus: boolean = favorites.filter(el => el.page.title === page.title).length === 1

  const addFavorites = () => {
    onFavorites(page, info)
  }
  const remove = (key: string) => {
    removeFavorite(key)
  }
  const windowWidth = () => {
    let w = window.innerWidth
    window.onresize = () => {
      w = window.innerWidth
    }
    return w
  }

  let description = info.description
  let text
  if (typeof description != 'undefined') {
    if (typeof description === 'string') {
      text = description
    } else {
      text = description.value
    }
  }

  const selectAuthor = (key: any) => {
    if (key) {
      DescriptionStore.setDescription(key[0].author.key)
    }
  }

  return (
    <div className={S.description}>
      {windowWidth() < 760 && <div>
        <ExitButton changePage={changePage} />
      </div>}
      <div className={S.top}>
        <div className={S.avatar}>
          {info.covers ?
            <img
              src={`http://covers.openlibrary.org/b/id/${info.covers[0]}-M.jpg`}
              alt='label'
              className={S.book} />
            :
            <img src={avatar} alt='автор' />
          }
        </div>
        <div className={S.content}>
          <h1 className={S.h1}>
            {info.title}
          </h1>
          <p onClick={() => selectAuthor(info.authors)}>Автор: {page.author_name}</p>
          {page.publish_date && <p>Дата публикации: {page.publish_date[0]}</p>}
          {favoriteStatus ?
            <button onClick={() => remove(page.key)}>
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
        description ?
          <p className={S.p}> {text} </p>
          :
          <h2>Описание отсутствует =(</h2>
      }

    </div>
  )
}

