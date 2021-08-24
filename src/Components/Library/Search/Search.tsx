import {ListItem} from './ListItem/ListItem'
import S from './Search.module.css'
import searchImg from '../../../img/search.svg'
import React, {FC, useEffect} from 'react'
import {Category, FavoritesType, PageType} from '../../../Types/Types'
import DescriptionStore from '../../../store/DescriptionStore'
import {observer} from 'mobx-react-lite'
import FavoritesStore from '../../../store/FavoritesStore'


interface searchProps {
  data: PageType[],
  changePage: (page: PageType, key: string) => void,
  page: PageType | undefined,
  favorites: FavoritesType[],
  category: Category
}

export const Search: FC<searchProps> = observer(({
                                                   data,
                                                   changePage,
                                                   page,
                                                   favorites,
                                                   category,
                                                 }) => {

    let ShowList
    const searchValue = DescriptionStore.searchValue
    const loading = DescriptionStore.loading
    const fetching = DescriptionStore.fetching


    const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
      let text = e.target.value
      DescriptionStore.changeSearchValue(text)
      if (category === 'favorites') {
          FavoritesStore.filterFavorite(text)
      }

    }

  ShowList = data?.map((element) =>
    <ListItem category={category} page={page} favorites={favorites} changePage={changePage} item={element}
              authorPhoto={element.key}
              key={element.key} url={element.key}
              name={element.name} title={element.title} img={element.cover_edition_key} />,
  )


    const Search = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (category === 'books') {
          DescriptionStore.addData()
        } else if (category === 'authors') {
          DescriptionStore.addAuthors()
        }
      }
    }


    useEffect(() => {
      if (fetching)
        DescriptionStore.lazyData()

    }, [fetching])

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
            onChange={changeValue}
            value={searchValue}
            onKeyUp={Search}
          />
        </div>
        <ul className={S.searchList} onScroll={scrollHandler}>
          {ShowList}
          {loading && <div className={S.load} />}
        </ul>
      </div>
    )
  },
)

