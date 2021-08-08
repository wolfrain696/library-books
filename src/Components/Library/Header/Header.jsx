import S from './Header.module.css'
import bookImg from '../../../img/book.png'


export const Header = ({sidebar,onSidebar}) => {
  return (
    <header className={S.header}>
      <img src={bookImg} alt='label' />
      <h1 className={S.title}>Library</h1>
      <button onClick={() => onSidebar(!sidebar)} className={sidebar ? S.burger + ' ' + S.active : S.burger}>
        <span></span>
      </button>
    </header>
  )
}

