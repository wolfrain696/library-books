import {ListItem} from './ListItem/ListItem'
import S from './Search.module.css'
import searchImg from '../../../img/search.svg'
import React, {FC, useEffect, useState} from 'react'
import {DescriptionTypes, FavoritesType, PageType} from '../../../Types/Types'
import {
  isBook,
  isAuthor,
  filterByTitle,
  filterByAuthorName,
} from './FunctionSearch'
import DescriptionStore from '../../../store/DescriptionStore'
import {observer} from 'mobx-react-lite'
import {toJS} from 'mobx'

interface searchProps {
  //todo тип
  data: any,
  changePage: (page: PageType, key: string) => void,
  page: PageType | undefined,
  favorites: FavoritesType[],
  category: 'books' | 'favorites' | 'authors'
}

export const Search: FC<searchProps> = observer(({
                                                   data,
                                                   changePage,
                                                   page,
                                                   favorites,
                                                   category,
                                                 }) => {

    const [val, setVal] = useState('')
    let filteredElements: any[] = []
    let ShowList
    const searchValue = DescriptionStore.searchValue
    const loading = DescriptionStore.loading
    const fetching = DescriptionStore.fetching

    // data.forEach((element: PageType) => {
    //     if (isBook(element) && filterByTitle(element, val)) {
    //       filteredElements.push(element)
    //     } else if (isAuthor(element) && filterByAuthorName(element, val)) {
    //       filteredElements.push(element)
    //     }
    //   },
    // )

    ShowList = data?.map((element: any) =>
      <ListItem category={category} page={page} favorites={favorites} changePage={changePage} item={element}
                authorPhoto={element.key}
                key={element.key} url={element.key}
                name={element.name} title={element.title} img={element.cover_edition_key} />,
    )

    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      let text = e.target.value
      setVal(text)
      DescriptionStore.changeSearchValue(text)
      if (category === 'favorites') {
        console.log(text)

        // toJS(favorites).forEach((element: any) => {
        //     // console.log('ssss')
        //     // console.log(element)
        //     if (isBook(element) && filterByTitle(element, val)) {
        //       // console.log('book')
        //       filteredElements.push(element)
        //     } else if (isAuthor(element) && filterByAuthorName(element, val)) {
        //       filteredElements.push(element)
        //       // console.log('avtor')
        //     }
        //     ShowList = filteredElements.map((element: any) =>
        //     <ListItem page={page} favorites={favorites} changePage={changePage} item={element} authorPhoto={element.key}
        //               key={element.key} url={element.key}
        //               name={element.name} title={element.title} img={element.cover_edition_key} />,
        //   )
        //   },
        //
        // )
      }
    }

    const Search = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (category === 'books') {
          DescriptionStore.addData()
        } else if (category === 'authors') {
          console.log('hi')
          DescriptionStore.addAuthors()
        }
      }
    }


    useEffect(() => {
      if (fetching)

        console.log(fetching)
      if (category === 'books') {
        DescriptionStore.lazyData()
      } else if (category === 'authors') {
        DescriptionStore.lazyDataAuthors()
        // console.log('dd')
      }

    }, [fetching])

    useEffect(() => {

    }, [])

    const scrollHandler = (e: React.BaseSyntheticEvent) => {
      let scrollHeight = e.target.scrollHeight
      let scrollTop = e.target.scrollTop
      if (scrollHeight - (scrollTop + 500) < 100)
        DescriptionStore.changeFetching(true)
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
        <ul className={S.searchList} onScroll={scrollHandler}>
          {ShowList}
          {loading && <div className={S.load}></div>}
        </ul>
      </div>
    )
  },
)

