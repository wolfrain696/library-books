import S from './Header.module.css'
import bookImg from '../../../img/book.png'
import {FC} from 'react'
import classNames from 'classnames'

interface PropsType {
  sidebar: boolean,
  onSidebar: (open: boolean) => void,
}

export const Header: FC<PropsType> = ({sidebar, onSidebar}) => {
  return (
    <header className={S.header}>
      <img src={bookImg} alt='label' />
      <h1 className={S.title}>Library</h1>
      <button onClick={() => onSidebar(!sidebar)} className={classNames(S.burger, [sidebar && S.active])}>
        <span></span>
      </button>
    </header>
  )
}
