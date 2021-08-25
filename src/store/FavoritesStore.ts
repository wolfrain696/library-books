import {makeAutoObservable} from 'mobx'
import {AuthorInfo, BookInfo, FavoritesType, PageType} from '../Types/Types'
import {filterByAuthorName, filterByTitle, isAuthor, isBook} from '../Components/Library/Search/FunctionSearch'


class FavoritesStore {
  favorites: FavoritesType[] = []
  data: string | null = localStorage.getItem('favorite')
  filteredFavorites: PageType[] = this.favorites.map(el => el.page)
  filterField: string ='filtrAll'

  constructor() {
    makeAutoObservable(this)
    this.addFavoritesFromLocal()
    this.filteredFavorites = this.favorites.map(el => el.page)
  }

  filterFavorite(text: string) {
    this.filteredFavorites = this.favorites.map(el => el.page).filter((element: PageType) => {
      switch (this.filterField){
        case 'filtrAll':{
          return (
            isBook(element) && filterByTitle(element, text)) || (isAuthor(element) && filterByAuthorName(element, text)
          )
        }
        case 'filtrAuthor':{
          return (
            isAuthor(element) && filterByAuthorName(element, text)
          )
        }
        case 'filtrBook':{
          return (
            isBook(element) && filterByTitle(element, text)
          )
        }
      }
    })
  }

  changeSearch(value: string) {
    this.filterField = value
  }

  filtrAuthorFavorite() {
    this.filteredFavorites = this.favorites.map(el => el.page).filter((element: PageType) => {
      return (
        isAuthor(element)
      )
    })
  }

  filtrBookFavorite() {
    this.filteredFavorites = this.favorites.map(el => el.page).filter((element: PageType) => {
      return (
        isBook(element)
      )
    })
  }

  filtrAllFavorite() {
    return this.filteredFavorites = this.favorites.map(el => el.page)
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

