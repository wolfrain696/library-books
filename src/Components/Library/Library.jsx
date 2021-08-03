import {Favorites} from './Favorites/Favorites';
import {Search} from './Search/Search';
import S from './Library.module.css';
import bookImg from '../../img/book.png';


export const Library = (props) => {
    return (
        <div className={S.container}>
            <header className={S.header}>
                <img src={bookImg} alt="label"/>
                <h1 className={S.title}>Library</h1>
            </header>
            <main className={S.body}>
                <Favorites/>
                <Search/>
            </main>
        </div>
    );
};
