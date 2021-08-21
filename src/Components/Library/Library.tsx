import {Favorites} from './Favorites/Favorites'
import {Search} from './Search/Search'
import {Book} from './Content/Book'
import {FC, useState} from 'react'
import S from './Library.module.css'
import {Author} from './Content/Author'
import {Header} from './Header/Header'
import {BooksData, DescriptionTypes, PageType} from '../../Types/Types'
import FavoritesStore from '../../store/FavoritesStore'
import {observer} from 'mobx-react-lite'
import classNames from 'classnames'
import DescriptionStore from '../../store/DescriptionStore'
import {toJS} from 'mobx'


export const Library: FC = observer(() => {
    let elementDescription
    const favorites = FavoritesStore.favorites
    const currentPage = DescriptionStore.currentPage
    const description = DescriptionStore.description
    const [sidebar, setSidebar] = useState(false)
    const [category, setCategory] = useState('books')

    let data
    switch (category) {
      case 'books': {
        data = DescriptionStore.searchData
        break
      }
      case 'favorites': {
        data = favorites.map(el => el.page)
        // console.log(toJS(favorites))
        // console.log(toJS(data))
        break
      }
      default : {
        data = DescriptionStore.searchAuthot
      }
    }

    const changePage = (page: PageType | undefined, key: string) => {
      DescriptionStore.setCurrentPage(page)
      DescriptionStore.setDescription(key)
    }

    // console.log(toJS(data))

    const changeData = (newData: BooksData[] | PageType[]) => {
      DescriptionStore.changeDataList(newData)
    }

    const onFavorites = (page: PageType, info: DescriptionTypes) => {
      FavoritesStore.addFavorite(page, info)
    }

    const removeFavorite = (key: string) => {
      FavoritesStore.removeFavorites(key)
    }


    if (currentPage && currentPage.type !== 'undefined' && description) {
      if (currentPage.type === 'work') {
        elementDescription =
          <Book removeFavorite={removeFavorite} favorites={favorites} onFavorites={onFavorites} page={currentPage}
                info={description} changePage={changePage}  />
      } else if (currentPage.type === 'author') {
        elementDescription =
          <Author removeFavorite={removeFavorite} favorites={favorites} onFavorites={onFavorites} page={currentPage}
                  info={description} changePage={changePage} />
      }
    }
    return (
      <div className={S.container}>
        <Header onSidebar={setSidebar} sidebar={sidebar} />
        <main onClick={() => setSidebar(false)} className={S.body}>
          <div onClick={e => e.stopPropagation()} className={classNames(S.sidebar, [sidebar && S.active])}>
            <Favorites category={category} onCategory={setCategory} favoritesList={favorites} onData={changeData} />
          </div>
          <div className={S.content}>
            {window.innerWidth >= 761 &&
            <Search category={category} favorites={favorites} page={currentPage} data={data}
                    changePage={changePage}
                    // onCategory={setCategory}
            />}
            {currentPage?.type === undefined && window.innerWidth <= 760 ?
              <Search category={category} favorites={favorites} page={currentPage} data={data}
                      changePage={changePage}
                      // onCategory={setCategory}
              />
              : null
            }
            {
              elementDescription
            }
          </div>
        </main>
      </div>
    )
  },
)
