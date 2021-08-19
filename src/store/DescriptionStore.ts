import {makeAutoObservable} from 'mobx'
import {DescriptionTypes, PageType} from '../Types/Types'
import {DescriptionData, SearchFetch} from '../Fetch/SearchFetch'

class DescriptionStore {
  currentPage: PageType | undefined
  description: DescriptionTypes | undefined = {}
  searchValue: string = ''
  searchData: any

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentPage(page: PageType | undefined) {
    this.currentPage = page
  }

  setDescription(key: string) {
    DescriptionData(key).then(response => this.description = {...response})
  }
  changeDataList(data : {}){
    this.searchData = data
  }
  addData() {
    if (this.searchValue != '')
      SearchFetch(this.searchValue).then(response => this.searchData = {...response})
  }

  changeSearchValue(value: string) {
    this.searchValue = value
  }
}

export default new DescriptionStore()