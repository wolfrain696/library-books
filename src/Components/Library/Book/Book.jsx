import S from './Book.module.css'
import bookImg from '../../../img/book.png'
import heartImg from '../../../img/heart.svg'


export const Book = (props) => {
  return (
    <div className={S.description}>
      <img src={bookImg} alt='label' align='left' className={S.book} />
      <h1 className={S.h1}>Соображения высшего порядка
        <input className={S.like_book} type='image' src={heartImg} alt='like'/>
      </h1>
      <br />
      <h5 className={S.h5}>С другой стороны постоянное информационно-техническое обеспечение нашей деятельности требует
        определения и уточнения соответствующих условий активизации? Дорогие друзья, рамки и место обучения кадров
        способствует подготовке и реализации соответствующих условий активизации. </h5>
    </div>
  )
}

