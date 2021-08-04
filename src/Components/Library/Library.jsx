import S from './Library.module.css'
import {Favorites} from "./Favorites/Favorites";
import bookImg from '../../img/book.png'
import {Search} from './Search/Search'
import {Book} from './Book/Book'
import {useState} from 'react'


export const Library = (props) => {
      const [data, setData] = useState([])

      const changeData = (newData) =>{
        setData(newData)
       console.log(data)
      }
    return (
        <div className={S.container}>
            <header className={S.header}>
                <img src={bookImg} alt="label"/>
                <h1 className={S.title}>Library</h1>
            </header>
            <main className={S.body}>
                <Favorites onData={changeData}/>
                <div className={S.content}>
                  <Search/>
                  <Book/>
                </div>
            </main>
        </div>
    );
};
