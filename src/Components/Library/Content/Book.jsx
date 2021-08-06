import S from './Book.module.css'
import heartImg from '../../../img/heart.svg'
import avatar from '../../../img/avatar_author-lg.png'


export const Book = ({page,info}) => {

  if (!page) {
    return (
      <h1>Выбери книгу</h1>
    )
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
      <button>
        <img src={heartImg} alt='like' className={S.like_book} />
      </button>
      <p className={S.p}> {info.description} </p>
    </div>
  )
}

