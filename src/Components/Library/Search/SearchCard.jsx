import React from 'react';
import {Button} from './Button/Button';
import S from './Search.module.css';
import searchImg from '../../../img/search.svg';
import filterImg from '../../../img/filter.svg';


export const SearchCard = (props) => {
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
        <BookCard />
      </div>
    );
};

