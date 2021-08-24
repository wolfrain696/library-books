import {makeAutoObservable} from 'mobx'
import {AuthorInfo, BookInfo, FavoritesType, PageType} from '../Types/Types'
import {filterByAuthorName, filterByTitle, isAuthor, isBook} from '../Components/Library/Search/FunctionSearch'


class FavoritesStore {
  favorites: FavoritesType[] = []
  data: string | null = localStorage.getItem('favorite')
  filteredFavorites : PageType[] = this.favorites.map(el => el.page)
  constructor() {
    makeAutoObservable(this)
    this.addFavoritesFromLocal()
    this.filteredFavorites = this.favorites.map(el => el.page)
  }

  filterFavorite(text : string) {
    this.filteredFavorites = this.favorites.map(el => el.page).filter((element: PageType) => {
      return (
        isBook(element) && filterByTitle(element, text)) || (isAuthor(element) && filterByAuthorName(element, text)
      )
    })
  }

  addFavorite(page: PageType, des: BookInfo | AuthorInfo) {
    this.favorites = [{page: {...page}, info: {...des}}, ...this.favorites]
    this.setLocalStorage()
  }

  removeFavorites(key: string) {
    this.favorites = this.favorites.filter(el => el.page.key !== key)
    this.setLocalStorage()
  }

  addFavoritesFromLocal() {
    if (this.data != null)
      this.favorites = [...JSON.parse(this.data)]
  }

  setLocalStorage() {
    localStorage.setItem('favorite', JSON.stringify(this.favorites))
  }
}

export default new FavoritesStore()

