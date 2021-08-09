import {Favorites} from './Favorites/Favorites'
import {Search} from './Search/Search'
import {Book} from './Content/Book'
import {useState} from 'react'
import {searchData} from '../../Fetch/SearchData'
import S from './Library.module.css'
import {Author} from './Content/Author'
import {Header} from './Header/Header'
import {useEffect} from 'react'


export const Library = (props) => {
  let elementDescription
  const [data, setData] = useState(searchData)
  const [sidebar, setSidebar] = useState(false)
  const [currentPage, setCurrentPage] = useState()
  const [des, setDes] = useState()
  const [favorites, setFavorites] = useState([])
  const [category, setCategory] = useState('books')
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
    if (category === 'favorites') {
      setData({docs: favorites.filter(el => el.page.key !== key).map(el => el.page)})
    }
  }


  if (currentPage && currentPage.type !== 'undefiend') {
    if (currentPage.type === 'work') {
      elementDescription =
        <Book removeFavorite={removeFavorite} favorites={favorites} onFavorites={onFavorites} page={currentPage}
              info={des} />
    } else if (currentPage.type === 'author') {
      elementDescription =
        <Author removeFavorite={removeFavorite} favorites={favorites} onFavorites={onFavorites} page={currentPage}
                info={des} />
    }
  }

  useEffect(() => {
    const data = localStorage.getItem('favorit')
    if (data) {
      setFavorites(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorit', JSON.stringify(favorites))
  })


  return (
    <div className={S.container}>
      <Header onSidebar={setSidebar} sidebar={sidebar} />
      <main onClick={() => setSidebar(false)} className={S.body}>
        <div onClick={e => e.stopPropagation()} className={sidebar ? S.sidebar + ' ' + S.active : S.sidebar}>
          <Favorites category={category} onCategory={setCategory} favoritesList={favorites} onData={changeData} />
        </div>
        <div className={S.content}>
          <Search favorites={favorites} page={currentPage} data={data} changePage={changePage} />
          {
            elementDescription
          }
        </div>
      </main>
    </div>
  )
}
