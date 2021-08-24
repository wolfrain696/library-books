import {Favorites} from './Favorites/Favorites'
import {Search} from './Search/Search'
import {Book} from './Content/Book'
import {FC, useState} from 'react'
import S from './Library.module.css'
import {Author} from './Content/Author'
import {Header} from './Header/Header'
import {
  AuthorInfo,
  AuthorInfoGuard,
  BookInfo,
  BookInfoGuard,
  PageType,
} from '../../Types/Types'
import FavoritesStore from '../../store/FavoritesStore'
import {observer} from 'mobx-react-lite'
import classNames from 'classnames'
import DescriptionStore from '../../store/DescriptionStore'
import {toJS} from 'mobx'


export const Library: FC = observer(() => {
    let elementDescription
    const favorites = FavoritesStore.favorites
    const filteredFavorites = FavoritesStore.filteredFavorites
    const currentPage = DescriptionStore.currentPage
    const description = DescriptionStore.description
    const [sidebar, setSidebar] = useState(false)
    const category = DescriptionStore.category

    let data
    switch (category) {
      case 'books': {
        data = DescriptionStore.searchData
        break
      }
      case 'favorites': {
        data = filteredFavorites
        break
      }
      case 'default': {
        data = DescriptionStore.defaultBooks
        break
      }
      default : {
        data = DescriptionStore.searchAuthor
      }
    }
      console.log(toJS(data))
    const changePage = (page: PageType | undefined, key: string) => {
      DescriptionStore.setCurrentPage(page)
      if (page?.type === 'author')
        DescriptionStore.setDescription('/authors/' + key)
      else {
        DescriptionStore.setDescription(key)
      }
    }


    const onFavorites = (page: PageType, info: BookInfo | AuthorInfo) => {
      FavoritesStore.addFavorite(page, info)
    }

    const removeFavorite = (key: string) => {
      FavoritesStore.removeFavorites(key)
    }
    if (description && description.type?.key !== undefined && currentPage) {
      if (description.type.key === '/type/work' && BookInfoGuard(description)) {
        elementDescription =
          <Book removeFavorite={removeFavorite} favorites={favorites} onFavorites={onFavorites} page={currentPage}
                info={description} changePage={changePage} />
      } else if (description.type.key === '/type/author' && AuthorInfoGuard(description)) {
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
            <Favorites category={category} />
          </div>
          <div className={S.content}>
            {window.innerWidth >= 761 &&
            <Search category={category} favorites={favorites} page={currentPage} data={data} changePage={changePage} />}
            {currentPage?.type === undefined && window.innerWidth <= 760 ?
              <Search category={category} favorites={favorites} page={currentPage} data={data} changePage={changePage} />
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
