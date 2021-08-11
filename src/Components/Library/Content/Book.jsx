import S from './Content.module.css'
import heartImg from '../../../img/heart.svg'
import avatar from '../../../img/avatar_author-lg.png'
import favoriteActive from '../../../img/favoriteActive.svg'
import {ExitButton} from './ExitButoon/ExitButton'

export const Book = ({page, info, onFavorites, favorites, removeFavorite, changePage}) => {

  let favoriteStatus = favorites.filter(el => el.page.title === page.title).length === 1

  if (!page) {
    return (
      <h1>Выбери книгу</h1>
    )
  }
  const addFavorites = () => {
    onFavorites(page, info)
  }
  const remove = (key) => {
    removeFavorite(key)
  }
  const windowWidth = () =>{
    let w = window.innerWidth
    window.onresize = () => {
      w = window.innerWidth
    }

    return w
  }
  return (
    <div className={S.description}>
      { windowWidth() < 760 && <div>
        <ExitButton changePage={changePage}/>
      </div>}
      <div className={S.top}>
        <div className={S.avatar}>
          {page.cover_i ?
            <img
              src={`http://covers.openlibrary.org/b/id/${page.cover_i}-M.jpg`}
              alt='label' align='left'
              className={S.book} />
            :
            <img src={avatar} alt='автор' />
          }
        </div>
        <div className={S.content}>
          <h1 className={S.h1}>
            {page.title}
          </h1>
          <p>Автор: {page.author_name}</p>
          <p>Дата публикации: {page.publish_date[0]}</p>
        </div>
      </div>

      {favoriteStatus ?
        <button onClick={() => remove(page.key)}>
          <img src={favoriteActive} alt='like' className={S.like_book} />
        </button>
        :
        <button onClick={addFavorites}>
          <img src={heartImg} alt='like' className={S.like_book} />
        </button>
      }
      <p className={S.p}> {info.description} </p>
    </div>
  )
}

