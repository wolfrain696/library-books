import {makeAutoObservable} from 'mobx'
import {DescriptionTypes, PageType} from '../Types/Types'

class DescriptionStore {
  currentPage: PageType | undefined
  description: DescriptionTypes | undefined = {}

  constructor() {
    makeAutoObservable(this)
  }

  setCurrentPage(page: PageType | undefined){
    this.currentPage = page
  }

  setDescroption(des: DescriptionTypes | undefined){
    this.description = des
  }

}

export default new DescriptionStore()