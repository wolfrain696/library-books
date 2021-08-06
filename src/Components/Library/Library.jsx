import {Favorites} from './Favorites/Favorites';
import {Search} from './Search/Search';
import {Book} from './Content/Book';
import {useState} from 'react';
import {searchData} from '../../Fetch/SearchData';
import S from './Library.module.css';
import bookImg from '../../img/book.png';
import {Author} from './Content/Author'


export const Library = (props) => {
  const [data, setData] = useState(searchData)
  const [sidebar, setSidebar] = useState(false)
  const [currentPage, setCurrentPage] = useState()
  const [des, setDes] = useState()

  const changePage = (page,info) => {
    setCurrentPage(page)
    setDes(info)

  }

  const changeData = (newData) => {
    setData(newData)
  }

  console.log(des);

  return (
    <div className={S.container}>
      <header className={S.header}>
        <img src={bookImg} alt='label' />
        <h1 className={S.title}>Library</h1>

        <button onClick={() => setSidebar(!sidebar)} className={sidebar?S.burger + ' ' + S.active: S.burger}>
          <span></span>
        </button>
      </header>
      <main className={S.body}>
        <div className={sidebar?S.sidebar + ' ' + S.active: S.sidebar}>
          <Favorites onData={changeData} />
        </div>
        <div className={S.content}>
          <Search page={currentPage} data={data} changePage={changePage} />
          {
            currentPage && currentPage.type === 'work' ?
              <Book page={currentPage} info={des} />
              :
              <Author page={currentPage} info={des}/>
          }
        </div>
      </main>
    </div>
  );
};
