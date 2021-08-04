import React from 'react';
import {Button} from './Button/Button';
import {BookCard} from './BookCard/BookCard';
import S from './Search.module.css';
import searchImg from '../../../img/search.svg';
import filterImg from '../../../img/filter.svg';
import {BooksJSON} from '../../../Fetch/BookData';


export const Search = (props) => {

  const ListBook = BooksJSON;

  const ShowList = ListBook.map(list =>
    <BookCard title={list.title} img={list.cover_edition_key}/>
  )

  console.log(ListBook);

    return (
      <div className={S.content}>
        <form>
          <div className={S.search}>
            <img src={searchImg} alt="search"/>
            <input placeholder="Поиск..."/>
            <Button
              onClick={() => {alert('Отфильтруем книги?')}}
            >
              <img src={filterImg} alt="filter"/>
            </Button>
          </div>
        </form>
        {
          ShowList
        }
      </div>
    );
};

