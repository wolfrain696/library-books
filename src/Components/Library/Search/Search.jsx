import React from 'react';

import S from 'Search.module.css';

import searchImg from '../../../img/search.svg';
import filterImg from '../../../img/filter.svg';


export const Search = (props) => {
    return (
      <div className={S.content}>
          <form>
              <div className={S.search}>
                  <button>
                    <img src={searchImg} alt="search"/>
                  </button>
                  <input placeholder="Поиск..."/>
                  <button>
                    <img src={filterImg} alt="filter"/>
                  </button>
              </div>
          </form>
      </div>
    );
};

