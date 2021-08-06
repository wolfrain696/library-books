import S from './Book.module.css'
import heartImg from '../../../img/heart.svg'
import avatar from '../../../img/avatar_author-lg.png'


export const Book = ({page,info, onFavorites,favorites}) => {

  if (!page) {
    return (
      <h1>Выбери книгу</h1>
    )
  }
  const addFavorites = () =>{
    for(let i = 0; i < favorites.length; i++){
        if(favorites[i].page.key === page.key && favorites[i].info.key === info.key ) return
    }

     onFavorites(page,info)
  }

  return (
    <div className={S.description}>
      <div className={S.top}>
        <div className={S.avatar}>
          {page.cover_i?
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
            {page.title }
          </h1>
          <p>Автор: {page.author_name}</p>
          <p>Дата публикации: {page.publish_date[0]}</p>
        </div>
      </div>
      <button onClick={addFavorites}>
        <img src={heartImg} alt='like' className={S.like_book} />
      </button>
      <p className={S.p}> {info.description} </p>
    </div>
  )
}

