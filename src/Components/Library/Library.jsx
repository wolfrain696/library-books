import {Favorites} from './Favorites/Favorites';
import {Search} from './Search/Search';
import {Book} from './Book/Book';
import {useState} from 'react';
import {BookJSON} from '../../Fetch/BookData';
import S from './Library.module.css';
import bookImg from '../../img/book.png';


export const Library = (props) => {
  const [data, setData] = useState(BookJSON)

  const [currentPage, setCurrentPage] = useState()

  const changePage = (page) => {
    setCurrentPage(page)
  }

  const changeData = (newData) => {
    setData(newData)
  }

  return (
    <div className={S.container}>
      <header className={S.header}>
        <img src={bookImg} alt='label' />
        <h1 className={S.title}>Library</h1>
      </header>
      <main className={S.body}>
        <Favorites onData={changeData} />
        <div className={S.content}>
          <Search data={data} changePage={changePage} />
          <Book />
        </div>
      </main>
    </div>
  );
};
