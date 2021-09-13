import { makeAutoObservable } from 'mobx'
import { AuthorInfo, BookInfo, FavoritesType, PageType } from '../Types/Types'
import {
    filterByAuthorName,
    filterByTitle,
    isAuthor,
    isBook,
} from '../Components/Library/Search/FunctionSearch'

class FavoritesStore {
    favorites: FavoritesType[] = []
    data: string | null = localStorage.getItem('favorite')
    filteredFavorites: PageType[] = this.favorites.map((el) => el.page)
    filterField: string = 'filterAll'
    sidebar: boolean = false

    constructor() {
        makeAutoObservable(this)
        this.addFavoritesFromLocal()
        this.filteredFavorites = this.favorites.map((el) => el.page)
    }

    changeSidebar(status: boolean) {
        this.sidebar = status
    }

    filterFavorite(text: string) {
        this.filteredFavorites = this.favorites
            .map((el) => el.page)
            .filter((element: PageType) => {
                switch (this.filterField) {
                    case 'filterAll': {
                        return (
                            filterByTitle(element, text) ||
                            filterByAuthorName(element, text)
                        )
                    }
                    case 'filterAuthor': {
                        return (
                            isAuthor(element) &&
                            filterByAuthorName(element, text)
                        )
                    }

                    case 'filterBook': {
                        return isBook(element) && filterByTitle(element, text)
                    }
                    default:
                        return element
                }
            })
    }

    changeSearch(value: string) {
        this.filterField = value
    }

    filterAuthorFavorite() {
        this.filteredFavorites = this.favorites
            .map((el) => el.page)
            .filter((element: PageType) => {
                return isAuthor(element)
            })
    }

    filterBookFavorite() {
        this.filteredFavorites = this.favorites
            .map((el) => el.page)
            .filter((element: PageType) => {
                return isBook(element)
            })
    }

    filterAllFavorite() {
        return (this.filteredFavorites = this.favorites.map((el) => el.page))
    }

    addFavorite(page: PageType, des: BookInfo | AuthorInfo) {
        this.favorites = [
            { page: { ...page }, info: { ...des } },
            ...this.favorites,
        ]
        this.setLocalStorage()
        this.filteredFavorites = this.favorites.map((el) => el.page)
    }

    removeFavorites(key: string) {
        this.favorites = this.favorites.filter((el) => el.page.key !== key)
        this.setLocalStorage()
        this.filteredFavorites = this.favorites.map((el) => el.page)
    }

    addFavoritesFromLocal() {
        if (this.data != null) this.favorites = [...JSON.parse(this.data)]
    }

    setLocalStorage() {
        localStorage.setItem('favorite', JSON.stringify(this.favorites))
    }
}

export default new FavoritesStore()
