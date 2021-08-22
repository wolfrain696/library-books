import {makeAutoObservable, runInAction} from 'mobx'
import {BooksData, DescriptionTypes, FavoritesType, PageType} from '../Types/Types'
import {DescriptionData, SearchFetch, SearchFetchAuthor} from '../Fetch/SearchFetch'
import FavoritesStore from './FavoritesStore'


class DescriptionStore {
  currentPage: PageType | undefined
  description: DescriptionTypes | undefined = {}
  searchValue: string = ''
  searchData: BooksData[] | PageType[] = []
  loading: boolean = false
  countPage: number = 1
  fetching: boolean = false
  searchAuthot: PageType[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentPage(page: PageType | undefined) {
    this.currentPage = page
  }

  setDescription(key: string) {
    this.description = {}
    DescriptionData(key).then(response => runInAction(() => this.description = {...response}))
  }

  changeDataList(data: BooksData[] | PageType[]) {
    this.searchData = data
    this.searchAuthot = data
  }

  addData() {
    if (this.searchValue != '')
      this.loading = true
    SearchFetch(this.searchValue, 1)
      .then(response => runInAction(() => this.searchData = [...response.docs]))
      .then(() => runInAction(() => this.loading = false))
      .then(() => runInAction(() => (this.countPage = 1)))
  }

  lazyData() {
    if (this.searchData.length > 0) {
      this.countPage += 1
      this.loading = true
      SearchFetch(this.searchValue, this.countPage)
        .then(response =>
          runInAction(() =>
            this.searchData = [...this.searchData, ...response.docs],
          ),
        )
        .then(() => runInAction(() => this.loading = false))
        .then(() => runInAction(() => this.fetching = false))
    }
  }

  addAuthors() {
    if (this.searchValue != '')
      this.loading = true
    SearchFetchAuthor(this.searchValue, 1)
      .then(response => this.searchAuthot = [...response.docs])
      .then(() => this.loading = false)
      .then(() => this.countPage = 1)

    console.log(this.searchAuthot.length)
  }

  lazyDataAuthors() {
    if (this.searchAuthot.length > 0) {
      this.countPage += 1
      this.loading = true
      SearchFetchAuthor(this.searchValue, this.countPage)
        .then(respon => this.searchAuthot = [...this.searchAuthot, ...respon.docs])
        .then(() => this.loading = false)
        .then(() => this.fetching = false)
    }
  }

  changeSearchValue(value: string) {
    this.searchValue = value
  }

  changeFetching(val: boolean) {
    this.fetching = val
  }
}

export default new DescriptionStore()