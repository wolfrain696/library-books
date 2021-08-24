export type PageType = {
  key: string,
  cover_i: number,
  title?: string,
  author_key?: string,
  name?: string,
  type?: string,
  top_work?: string,
  author_name?: string,
  publish_date: string[],
  cover_edition_key: string;
}

export type FavoritesType = {page: PageType, info: BookInfo | AuthorInfo}
export type Category = 'books' | 'favorites' | 'authors' | 'default'

export type BooksData = {
  key: string,
  cover_i: number,
  title: string,
  author_key: string,
  type: string,
  author_name: string,
  publish_date: string[]
}

export type BookInfo = {
  description: string | {type: string, value: string} | undefined,
  title: string,
  type: {key: '/type/work'},
  covers: number[],
  authors: {key: string, name: string}[],
  key: string
}
export type AuthorInfo = {
  name: string,
  photos: number[],
  type: {key: '/type/author'},
  birth_date: string,
  bio?: {value: string},
  key: string
}

export function BookInfoGuard(data: BookInfo | AuthorInfo): data is BookInfo {
  return (data as BookInfo).type.key === '/type/work'
}

export function AuthorInfoGuard(data: BookInfo | AuthorInfo): data is AuthorInfo {
  return (data as AuthorInfo).type.key === '/type/author'
}