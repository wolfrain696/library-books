import exitIcon from './../../../../img/exit.png'
import S from './ExitButton.module.css'
import { FC } from 'react'
import DescriptionStore from '../../../../store/DescriptionStore'

export const ExitButton: FC = () => {
    return (
        <button
            className={S.exit}
            onClick={() => {
                DescriptionStore.removeDescription()
                DescriptionStore.setCurrentPage(undefined)
            }}
        >
            <img src={exitIcon} alt="exit" />
        </button>
    )
}
