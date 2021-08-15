import {makeAutoObservable} from 'mobx'
import {DescriptionTypes, FavoritesType, PageType} from '../Types/Types'


class FavoritesStore{
    favorites : FavoritesType[] = []
    constructor() {
      makeAutoObservable(this)
    }
    addFavorite(page: PageType, des: DescriptionTypes){
      this.favorites = [{page: {...page}, info: {...des}}, ...this.favorites]
    }
    removeFavorites(key : string) {
      this.favorites = this.favorites.filter(el => el.page.key !== key)
    }
    //todo это лучше делать в конструкторе сразу, вместе с загрузкой из localStorage
    addFavoritesFromLocal(data: FavoritesType[]){

       this.favorites = [...data]
    }

}

export default new FavoritesStore()


