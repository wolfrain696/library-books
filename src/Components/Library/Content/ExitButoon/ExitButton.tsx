import exitIcon from './../../../../img/exit.png'
import S from './ExitButton.module.css'
import {FC} from 'react'
import {DescriptionTypes, PageType} from '../../../../Types/Types'

interface ExitButtonProps {
  changePage: (page: PageType | undefined, info: DescriptionTypes | undefined) => void
}

export const ExitButton: FC<ExitButtonProps> = ({changePage}) => {
  return <button className={S.exit} onClick={() => changePage(undefined, undefined)}><img src={exitIcon} alt='exit' /></button>
}

