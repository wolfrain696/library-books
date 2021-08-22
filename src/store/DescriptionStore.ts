import {makeAutoObservable, runInAction} from 'mobx'
import {AuthorInfo, BookInfo, BooksData, Category, PageType} from '../Types/Types'
import {DefaultBook, DescriptionData, SearchFetch, SearchFetchAuthor} from '../Fetch/SearchFetch'


class DescriptionStore {
  currentPage: PageType | undefined
  description: BookInfo | AuthorInfo | undefined
  searchValue: string = ''
  searchData: BooksData[] | PageType[] = []
  defaultBooks: BooksData[] | PageType[] = []
  loading: boolean = false
  countPage: number = 1
  fetching: boolean = false
  searchAuthot: PageType[] = []
  category: Category = 'default'
  offset: number = 0

  constructor() {
    makeAutoObservable(this)
    this.addDefaultBooks()
  }

  setCurrentPage(page: PageType | undefined) {
    this.currentPage = page
  }

  setDescription(key: string) {
    this.description = undefined
    DescriptionData(key).then(response => runInAction(() => this.description = {...response}))
  }

  changeDataList(data: BooksData[] | PageType[]) {
    this.searchData = data
    this.searchAuthot = data
  }

  addData() {
    if (this.searchValue !== '')
      this.loading = true
    SearchFetch(this.searchValue, 1)
      .then(response => runInAction(() => this.searchData = [...response.docs]))
      .then(() => runInAction(() => this.loading = false))
      .then(() => runInAction(() => (this.countPage = 1)))
  }

  lazyData() {
    if (this.searchData.length > 0 && this.category === 'books') {
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
    if (this.category === 'default') {
      console.log(this.loading)
      this.offset += 15
      this.loading = true
      DefaultBook(this.offset).then(response =>
        runInAction(() => this.defaultBooks = [...this.defaultBooks, ...response.works]))
        .then(() => runInAction(() => this.loading = false))
        .then(() => runInAction(() => this.fetching = false))
    }
  }

  addAuthors() {
    if (this.searchValue !== '')
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

  addDefaultBooks() {
    this.loading = true
    DefaultBook(1)
      .then(response =>
        runInAction(() => this.defaultBooks = [...response.works]))
      .then(() => runInAction(() => this.loading = false))
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
}

export default new DescriptionStore()