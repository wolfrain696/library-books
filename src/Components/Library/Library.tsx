import {Favorites} from './Favorites/Favorites'
import {Search} from './Search/Search'
import {Book} from './Content/Book'
import {FC} from 'react'
import S from './Library.module.css'
import {Author} from './Content/Author'
import {Header} from './Header/Header'
import {AuthorInfoGuard, BookInfoGuard} from '../../Types/Types'
import FavoritesStore from '../../store/FavoritesStore'
import {observer} from 'mobx-react-lite'
import classNames from 'classnames'
import DescriptionStore from '../../store/DescriptionStore'


export const Library: FC = observer(() => {

    const favorites = FavoritesStore.favorites
    const filteredFavorites = FavoritesStore.filteredFavorites
    const currentPage = DescriptionStore.currentPage
    const description = DescriptionStore.description
    const sidebar = FavoritesStore.sidebar
    const category = DescriptionStore.category
    let elementDescription
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

    if (description && description.type?.key !== undefined && currentPage) {

      if (description.type.key === '/type/work' && BookInfoGuard(description)) {
        elementDescription =
          <Book favorites={favorites} page={currentPage} info={description} />
      } else if (description.type.key === '/type/author' && AuthorInfoGuard(description)) {
        elementDescription =
          <Author favorites={favorites} page={currentPage} info={description} />
      }

    }

    return (
      <div className={S.container}>
        <Header sidebar={sidebar} />
        <main onClick={() => FavoritesStore.changeSidebar(false)} className={S.body}>
          <div onClick={e => e.stopPropagation()} className={classNames(S.sidebar, [sidebar && S.active])}>
            <Favorites category={category} />
          </div>
          <div className={S.content}>
            {window.innerWidth >= 761 &&
            <Search category={category} favorites={favorites} page={currentPage} data={data} />}
            {(currentPage?.type === undefined && description === undefined) && window.innerWidth <= 760 ?
              <Search category={category} favorites={favorites} page={currentPage} data={data} />
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
