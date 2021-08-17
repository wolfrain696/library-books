import {DescriptionTypes, PageType} from '../../../Types/Types'

function isBook(element: PageType) {
  return element.type === 'work'
}

function isAuthor(element: PageType) {
  return element.type === 'author'
}

function filterByTitle(element: DescriptionTypes, val: string) {
  return element.title?.toLowerCase().includes(val.toLowerCase())
}

function filterByAuthorName(element: DescriptionTypes, val: string) {
  return element.name?.toLowerCase().includes(val.toLowerCase())
}

export {isBook, isAuthor, filterByTitle, filterByAuthorName}