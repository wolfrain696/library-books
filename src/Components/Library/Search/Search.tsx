import {ListItem} from './ListItem/ListItem'
import S from './Search.module.css'
import searchImg from '../../../img/search.svg'
import React, {FC, useState} from 'react'
import {DescriptionTypes, FavoritesType, PageType} from '../../../Types/Types'
import {
  isBook,
  isAuthor,
  filterByTitle,
  filterByAuthorName,
} from './FunctionSearch'
import DescriptionStore from '../../../store/DescriptionStore'
import {observer} from 'mobx-react-lite'

interface searchProps {
  //todo тип
  data: any,
  changePage: (page: PageType, key : string) => void,
  page: PageType | undefined,
  favorites: FavoritesType[],
}

export const Search: FC<searchProps> = observer( ({data, changePage, page, favorites}) => {

  const [val, setVal] = useState('')
  let filteredElements: any[] = []
  let ShowList
  const searchValue = DescriptionStore.searchValue

  // data.docs.forEach((element: PageType) => {
  //     if (isBook(element) && filterByTitle(element, val)) {
  //       filteredElements.push(element)
  //     } else if (isAuthor(element) && filterByAuthorName(element, val)) {
  //       filteredElements.push(element)
  //     }
  //   },
  // )
  ShowList = data?.map((element : any) =>
    <ListItem page={page} favorites={favorites} changePage={changePage} item={element} authorPhoto={element.key}
              key={element.key} url={element.key}
              name={element.name} title={element.title} img={element.cover_edition_key} />,
  )
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let text = e.target.value
    DescriptionStore.changeSearchValue(text)

  }
  const Search = (e: React.KeyboardEvent) =>{
    if(e.key === 'Enter'){
      DescriptionStore.addData()
    }
  }

  return (
    <div className={S.content}>
        <div className={S.search}>
          <img src={searchImg} alt='search' />
          <input
            placeholder='Поиск...'
            // onChange={(event) => setVal(event.target.value)}
            onChange={changeValue}
            value={searchValue}
            onKeyUp={Search}
          />
        </div>
      <ul className={S.searchList}>
        {
          ShowList
        }
      </ul>
    </div>
  )
},
)

