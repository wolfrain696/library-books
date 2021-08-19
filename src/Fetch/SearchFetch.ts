import axios from 'axios'

const apiUrl = 'https://openlibrary.org'

export const SearchFetch = async (value: string) => {
  const searchUrl = '/search.json?title='

  const response = await axios.get(apiUrl + searchUrl + value + '&page=1&limit=5')
  return response.data
}


export const DescriptionData = async (key: string) => {

  const response = await axios.get(apiUrl + key + '.json')
  return response.data
}