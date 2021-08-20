import axios from 'axios'

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