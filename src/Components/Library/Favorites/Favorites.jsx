import S from './Favorites.module.css'
import heartImg from '../../../img/heart.svg'
import {AuthorsJSON} from '../../../Fetch/Authors'
import {searchData} from '../../../Fetch/SearchData'


export const Favorites = ({onData,favoritesList}) => {
    const favorites = favoritesList?.map(el => el.page)
    return (
        <div className={S.container }>
            <div className={S.favorites} onClick={() => onData({docs:favorites})} >
                <img src={heartImg} alt="favorites icon"/>
                <span className={S.title}>Избранное</span>
            </div>
            <div className={S.category}>
                <ul className={S.category__list}>
                    <li className={S.category__item} onClick={() => onData(AuthorsJSON)}>
                        Авторы
                    </li>
                    <li className={S.category__item} onClick={() => onData(searchData)}>
                        Книги
                    </li>
                </ul>
            </div>
        </div>
    );
};

