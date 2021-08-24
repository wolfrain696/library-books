import axios from 'axios'

const defaultBook = 'https://openlibrary.org/subjects/literature.json'
const apiUrl = 'https://openlibrary.org'

export const SearchFetch = async (value: string | undefined, countPage: number, author?: boolean) => {
  const searchUrl = '/search.json?title='
  const authorBooksUrl = '/search.json?author='
  const response = await axios.get(apiUrl + [author ? authorBooksUrl : searchUrl] + value + `&page=${countPage}&limit=15`)
  return response.data
}


export const DescriptionData = async (key: string) => {

  const response = await axios.get(apiUrl + key + '.json')
  return response.data
}


export const SearchFetchAuthor = async (value: string, offset: number) => {
  const response = await axios.get(apiUrl + '/search/authors.json?q=' + value + `&offset=${offset}&limit=10`)
  return response.data
}

export const DefaultBook = async (page: number) => {
  const response = await axios.get(defaultBook + `?offset=${page}&limit=15`)
  return response.data
}

export const AuthorBooks = async (val: any, countPage: number) => {
  const response = await axios.get(apiUrl + '/search.json?author=' + val + `&page=${countPage}&limit=15`)
  return response.data
}