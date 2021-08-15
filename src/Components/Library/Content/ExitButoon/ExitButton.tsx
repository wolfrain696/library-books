import exitIcon from './../../../../img/exit.png'
import S from './ExitButton.module.css'
import {FC} from 'react'

interface ExitButtonProps {
  //todo тип улучшить
  changePage: any
}

export const ExitButton: FC<ExitButtonProps> = ({changePage}) => {
  return <button className={S.exit} onClick={() => changePage({}, {})}><img src={exitIcon} alt='exit' /></button>
}

