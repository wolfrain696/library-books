import {ListItem} from './ListItem/ListItem'
import S from './Search.module.css'
import searchImg from '../../../img/search.svg'
import {FC, ReactNode, useState} from 'react'
import {DescriptionTypes, FavoritesType, PageType} from '../../../Types/Types'
import {
  isBook,
  isAuthor,
  filterByTitle,
  filterByAuthorName,
} from './FunctionSearch'

interface searchProps {
  //todo тип
  data: any,
  changePage: (page: PageType, info?: DescriptionTypes) => void,
  page: PageType | undefined,
  favorites: FavoritesType[],
}

export const Search: FC<searchProps> = ({data, changePage, page, favorites}) => {

  const [val, setVal] = useState('')
  let filteredElements: any[] = []
  let ShowList


  data.docs.forEach((element: any) => {
      if (isBook(element) && filterByTitle(element, val)) {
        filteredElements.push(element)
      } else if (isAuthor(element) && filterByAuthorName(element, val)) {
        filteredElements.push(element)
      }
    },
  )
  ShowList = filteredElements.map((element) =>
    <ListItem page={page} favorites={favorites} changePage={changePage} item={element} authorPhoto={element.key}
              key={element.key}
              name={element.name} title={element.title} img={element.cover_edition_key} />,
  )


  return (
    <div className={S.content}>
      <form>
        <div className={S.search}>
          <img src={searchImg} alt='search' />
          <input
            placeholder='Поиск...'
            onChange={(event) => setVal(event.target.value)} />
        </div>
      </form>
      <ul className={S.searchList}>
        {
          ShowList
        }
      </ul>
    </div>
  )
}

