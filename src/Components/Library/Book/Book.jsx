import S from './Book.module.css'
// import bookImg from '../../../img/book.png'
import heartImg from '../../../img/heart.svg'
import {BookJSON} from '../../../Fetch/BookData'
import {description} from '../../../Fetch/description'


export const Book = (props) => {

  let Book = BookJSON.docs
  let descriptionBook = description.description

  return (
    <div className={S.description}>
      <img src={`http://covers.openlibrary.org/b/id/${Book.cover_i}-M.jpg`} alt='label' align='left'
           className={S.book} />
      <h1 className={S.h1}>{Book.title}
        <input className={S.like_book} type='image' src={heartImg} alt='like' />
      </h1>
      <br />
      <p className={S.p}>{descriptionBook.value} </p>
    </div>
  )
}

