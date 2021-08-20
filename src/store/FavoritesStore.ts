import {makeAutoObservable} from 'mobx'
import {DescriptionTypes, FavoritesType, PageType} from '../Types/Types'


class FavoritesStore {
  favorites: FavoritesType[] = []
  data: string | null = localStorage.getItem('favorite')

  constructor() {
    makeAutoObservable(this)
    this.addFavoritesFromLocal()

  }

  addFavorite(page: PageType, des: DescriptionTypes) {
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

