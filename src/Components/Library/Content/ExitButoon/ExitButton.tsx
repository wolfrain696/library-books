import exitIcon from './../../../../img/exit.png'
import S from './ExitButton.module.css'
import {FC} from 'react'
import {PageType} from '../../../../Types/Types'

interface ExitButtonProps {
  changePage: (page: PageType | undefined, key: string) => void
}

export const ExitButton: FC<ExitButtonProps> = ({changePage}) => {
  return <button className={S.exit} onClick={() => changePage(undefined, '')}><img src={exitIcon} alt='exit' /></button>
}

