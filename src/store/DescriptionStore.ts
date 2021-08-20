import {makeAutoObservable} from 'mobx'
import {BooksData, DescriptionTypes, FavoritesType, PageType} from '../Types/Types'
import {DescriptionData, SearchFetch} from '../Fetch/SearchFetch'
import FavoritesStore from './FavoritesStore'


class DescriptionStore {
  currentPage: PageType | undefined
  description: DescriptionTypes | undefined = {}
  searchValue: string = ''
  searchData: BooksData[] | PageType[] = []
  loading: boolean = false
  countPage: number = 1
  fetching: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentPage(page: PageType | undefined) {
    this.currentPage = page
  }

  setDescription(key: string) {
    DescriptionData(key).then(response => this.description = {...response})
  }

  changeDataList(data: BooksData[] | PageType[]) {
    this.searchData = data
  }

  addData() {
    if (this.searchValue != '')
      this.loading = true
    SearchFetch(this.searchValue, 1)
      .then(response => this.searchData = [...response.docs])
      .then(() => this.loading = false)
      .then(() => this.countPage = 1)
  }

  lazyData() {
    if (this.searchData.length > 0) {
      this.countPage += 1
      this.loading = true
      SearchFetch(this.searchValue, this.countPage)
        .then(response => this.searchData = [...this.searchData, ...response.docs])
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