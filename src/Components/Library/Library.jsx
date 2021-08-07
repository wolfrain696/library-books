import {Favorites} from './Favorites/Favorites'
import {Search} from './Search/Search'
import {Book} from './Content/Book'
import {useState} from 'react'
import {searchData} from '../../Fetch/SearchData'
import S from './Library.module.css'
import bookImg from '../../img/book.png'
import {Author} from './Content/Author'


export const Library = (props) => {
  const [data, setData] = useState(searchData)
  const [sidebar, setSidebar] = useState(false)
  const [currentPage, setCurrentPage] = useState()
  const [des, setDes] = useState()
  const [favorites, setFavorites] = useState([])

  const changePage = (page, info) => {
    setCurrentPage(page)
    setDes(info)

  }
  const changeData = (newData) => {
    setData(newData)
  }
  const onFavorites = (page, info) => {
    setFavorites([{page: {...page}, info: {...info}}, ...favorites])
  }
  const removeFavorite = (key) => {
    setFavorites(favorites.filter(el => el.page.key !== key))
  }

  return (
    <div className={S.container}>
      <header className={S.header}>
        <img src={bookImg} alt='label' />
        <h1 className={S.title}>Library</h1>

        <button onClick={() => setSidebar(!sidebar)} className={sidebar ? S.burger + ' ' + S.active : S.burger}>
          <span></span>
        </button>
      </header>
      <main className={S.body}>
        <div className={sidebar ? S.sidebar + ' ' + S.active : S.sidebar}>
          <Favorites favoritesList={favorites} onData={changeData} />
        </div>
        <div className={S.content}>
          <Search favorites={favorites} page={currentPage} data={data} changePage={changePage} />
          {
            currentPage && currentPage.type === 'work' ?
              <Book removeFavorite={removeFavorite} favorites={favorites} onFavorites={onFavorites} page={currentPage}
                    info={des} />
              :
              <Author removeFavorite={removeFavorite} favorites={favorites} onFavorites={onFavorites} page={currentPage}
                      info={des} />
          }
        </div>
      </main>
    </div>
  )
}
