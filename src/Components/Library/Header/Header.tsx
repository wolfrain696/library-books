import S from './Header.module.css'
import bookImg from '../../../img/book.png'
import {FC} from 'react'
import classNames from 'classnames'
import FavoritesStore from '../../../store/FavoritesStore'

interface PropsType {
  sidebar: boolean,

}

export const Header: FC<PropsType> = ({sidebar}) => {
  return (
    <header className={S.header}>
      <img src={bookImg} alt='label' />
      <h1 className={S.title}>Library</h1>
      <button onClick={() => FavoritesStore.changeSidebar(!sidebar)} className={classNames(S.burger, [sidebar && S.active])}>
        <span></span>
      </button>
    </header>
  )
}
