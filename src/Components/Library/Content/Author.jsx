import S from './Book.module.css'
import avatar from '../../../img/avatar_author-lg.png'
import heartImg from '../../../img/heart.svg'

export const Author = ({page,info, favorites,onFavorites}) => {
  if (!page) {
    return (
      <h1>Выбери автора</h1>
    )
  }

  const addFavorites = () =>{
    for(let i = 0; i < favorites.length; i++){
      if(favorites[i].page.key === page.key ) return
    }

    onFavorites(page,info)
  }
  return (
    <div className={S.description}>
      <div className={S.top}>
        <div className={S.avatar}>
          {info.photos ?
            <img
              src={`http://covers.openlibrary.org/b/id/${info.photos[0]}-M.jpg`}
              alt='label' align='left'
              className={S.book} />
            :
            <img src={avatar} alt='автор' />
          }
        </div>
        <div className={S.content}>
          <h1 className={S.h1}>
            {page.name}
          </h1>
          <p>Дата рождения: {info.birth_date}</p>
          <p>Лучшая работа: {page.top_work} </p>
        </div>
      </div>
      <button>
        <img src={heartImg} alt='like' className={S.like_book} onClick={addFavorites}/>
      </button>
      <p className={S.p}>{info.bio.value} </p>
    </div>
  )
}