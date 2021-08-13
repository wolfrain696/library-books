import {makeAutoObservable} from 'mobx'


class FavoritesStore{

    constructor() {
      makeAutoObservable(this)
    }
}

export default new FavoritesStore()


