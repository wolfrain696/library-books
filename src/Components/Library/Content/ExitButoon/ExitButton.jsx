import exitIcon from './../../../../img/exit.png'
import S from './ExitButton.module.css'



export const ExitButton = ({changePage}) => {
  return <button className={S.exit} onClick={() => changePage([],[])}><img src={exitIcon} alt='exit'/></button>
}

