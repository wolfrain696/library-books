import { makeAutoObservable, runInAction } from 'mobx'

import { AuthorInfo, BookInfo, Category, PageType } from '../Types/Types'
import {
    DefaultBook,
    DescriptionData,
    SearchFetch,
    SearchFetchAuthor,
    AuthorBooks,
} from '../Fetch/SearchFetch'

class DescriptionStore {
    currentPage: PageType | undefined
    description: BookInfo | AuthorInfo | undefined
    searchValue: string = ''
    searchData: PageType[] = []
    defaultBooks: PageType[] = []
    loading: boolean = false
    searchField: boolean = false
    countPage: number = 1
    fetching: boolean = false
    searchAuthor: PageType[] = []
    category: Category = 'default'
    offset: number = 0
    totalCount: number = 0

    constructor() {
        makeAutoObservable(this)
        this.addDefaultBooks()
    }

    setCurrentPage(page: PageType | undefined) {
        this.currentPage = page
    }

    setDescription(key: string) {
        this.description = undefined
        DescriptionData(key).then((response) =>
            runInAction(() => (this.description = { ...response }))
        )
    }

    addData() {
        if (this.searchValue !== '') this.loading = true
        this.searchField = false
        SearchFetch(this.searchValue, 1)
            .then((response) =>
                runInAction(() => {
                    this.searchData = [...response.docs]
                    this.totalCount = response.numFound
                })
            )
            .then(() => runInAction(() => (this.loading = false)))
            .then(() => runInAction(() => (this.countPage = 1)))
    }

    addAuthorBooks(val: any) {
        this.category = 'books'
        this.searchData = []
        this.loading = true
        this.countPage = 1
        this.searchValue = val
        AuthorBooks(val, 1)
            .then((response) =>
                runInAction(() => {
                    this.searchData = [...response.docs]
                    this.totalCount = response.numFound
                })
            )
            .then(() => runInAction(() => (this.loading = false)))
            .then(() => runInAction(() => (this.searchField = true)))
    }

    lazyData() {
        if (this.searchData.length > 0 && this.category === 'books') {
            this.countPage += 1
            this.loading = true
            SearchFetch(this.searchValue, this.countPage, this.searchField)
                .then((response) =>
                    runInAction(
                        () =>
                            (this.searchData = [
                                ...this.searchData,
                                ...response.docs,
                            ])
                    )
                )
                .then(() => runInAction(() => (this.loading = false)))
                .then(() => runInAction(() => (this.fetching = false)))
        }
        if (this.category === 'default') {
            this.offset += 15
            this.loading = true
            DefaultBook(this.offset)
                .then((response) =>
                    runInAction(
                        () =>
                            (this.defaultBooks = [
                                ...this.defaultBooks,
                                ...response.works,
                            ])
                    )
                )
                .then(() => runInAction(() => (this.loading = false)))
                .then(() => runInAction(() => (this.fetching = false)))
        }
        if (this.category === 'authors') {
            this.offset += 10
            this.loading = true
            SearchFetchAuthor(this.searchValue, this.offset)
                .then((response) =>
                    runInAction(
                        () =>
                            (this.searchAuthor = [
                                ...this.searchAuthor,
                                ...response.docs,
                            ])
                    )
                )
                .then(() => runInAction(() => (this.loading = false)))
                .then(() => runInAction(() => (this.fetching = false)))
        }
    }

    addAuthors() {
        if (this.searchValue !== '') this.loading = true
        SearchFetchAuthor(this.searchValue, 0)
            .then((response) =>
                runInAction(() => (this.searchAuthor = [...response.docs]))
            )
            .then(() => runInAction(() => (this.loading = false)))
            .then(() => runInAction(() => (this.offset = 0)))
    }

    addDefaultBooks() {
        this.loading = true
        DefaultBook(0)
            .then((response) =>
                runInAction(() => {
                    this.defaultBooks = [...response.works]
                    this.totalCount = response.numFound
                })
            )
            .then(() => runInAction(() => (this.loading = false)))
    }

    changeSearchValue(value: string) {
        this.searchValue = value
    }

    changeFetching(val: boolean) {
        this.fetching = val
    }

    changeCategory(val: Category) {
        this.category = val
    }

    removeDescription() {
        this.description = undefined
    }
}

export default new DescriptionStore()
