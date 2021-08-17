import {makeAutoObservable} from 'mobx'
import {DescriptionTypes, FavoritesType, PageType} from '../Types/Types'
import {useEffect} from 'react'


class FavoritesStore{
    favorites : FavoritesType[] = []
    data : string | null = localStorage.getItem('favorite')
    constructor() {
      makeAutoObservable(this)
      this.addFavoritesFromLocal()

    }
    addFavorite(page: PageType, des: DescriptionTypes){
      this.favorites = [{page: {...page}, info: {...des}}, ...this.favorites]
    }
    removeFavorites(key : string) {
      this.favorites = this.favorites.filter(el => el.page.key !== key)
    }

    addFavoritesFromLocal(){
        if(this.data != null)
       this.favorites = [...JSON.parse(this.data)]
    }

}

export default new FavoritesStore()

