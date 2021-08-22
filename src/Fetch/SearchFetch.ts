import axios from 'axios'

const defaultBook = 'https://openlibrary.org/subjects/literature.json'
const apiUrl = 'https://openlibrary.org'

export const SearchFetch = async (value: string, countPage: number) => {
  const searchUrl = '/search.json?title='

  const response = await axios.get(apiUrl + searchUrl + value + `&page=${countPage}&limit=15`)
  return response.data
}


export const DescriptionData = async (key: string) => {

  const response = await axios.get(apiUrl + key + '.json')
  return response.data
}


export const SearchFetchAuthor = async (value: string, countPage: number) => {
  const response = await axios.get(apiUrl + '/search/authors.json?q=' + value + `&page=${countPage}&limit=30`)
  return response.data
}

export const DefaultBook = async (page: number) => {
  const response = await axios.get(defaultBook + `?offset=${page}&limit=15`)
  return response.data
}