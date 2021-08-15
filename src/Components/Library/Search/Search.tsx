import {ListItem} from './ListItem/ListItem'
import S from './Search.module.css'
import searchImg from '../../../img/search.svg'
import filterImg from '../../../img/filter.svg'
import {FC, ReactNode, useState} from 'react'
import {DescriptionTypes, FavoritesType, PageType} from '../../../Types/Types'

interface searchProps {
  //todo тип
  data: any,
  changePage: (page : PageType, info?: DescriptionTypes) => void,
  page: PageType | undefined,
  favorites: FavoritesType[],
  children?: ReactNode
}

export const Search : FC<searchProps> = ({data, changePage, page, favorites}) => {

  const [val, setVal] = useState('')
  let filteredElements: any[] = []
  let ShowList

  //todo эта проверка вообще не нужна, можно потом проверять ShowList на отсутствие элементов
  if (isCollectionNotEmpty(data)) {
    data.docs.forEach((element : any) => {
      if (isBook(element) && filterByTitle(element)) {
        filteredElements.push(element)
      } else if (isAuthor(element) && filterByAuthorName(element)) {
        filteredElements.push(element)
      }
    })
    ShowList = filteredElements.map((element) =>
      <ListItem page={page} favorites={favorites} changePage={changePage} item={element} authorPhoto={element.key}
                key={element.key}
                name={element.name} title={element.title} img={element.cover_edition_key} />,
    )
  }

  //todo [] - это тип пустого массива, его тоже лучше не использовать
  function isCollectionNotEmpty(collection: {docs: []}) {
    return collection.docs.length !== 0
  }

  //todo и все эти функции лучше вынести за пределы компонента, раз они чистые
  function isBook(element: any) {
    return element.type === 'work'
  }

  function isAuthor(element: any) {
    return element.type === 'author'
  }

  function filterByTitle(element : any) {
    return element.title.toLowerCase().includes(val.toLowerCase())
  }

  function filterByAuthorName(element : any) {
    return element.name.toLowerCase().includes(val.toLowerCase())
  }


  return (
    <div className={S.content}>
      <form>
        <div className={S.search}>
          <img src={searchImg} alt='search' />
          <input
            placeholder='Поиск...'
            onChange={(event) => setVal(event.target.value)} />
          <button
            onClick={() => {
              //todo ???
              alert('Отфильтруем книги?')
            }}
          >
            <img src={filterImg} alt='filter' />
          </button>
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


