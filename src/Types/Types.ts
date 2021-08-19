export type PageType = {
  key: string,
  cover_i: number,
  title?: string,
  author_key?: string,
  name?: string
  type?: string
  top_work?: string
  author_name?:string
  publish_date: string[]
}
export interface DescriptionTypes {
  description?: string | {type: string, value: string} | undefined,
  title?:string,
  key?:string,
  covers?: Array<number>,
  name?:string,
  birth_date?: string,
  photos?: number[],
  bio?: {type: string,value: string},
}

export type FavoritesType = {page: PageType, info: DescriptionTypes}