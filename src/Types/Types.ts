export type PageType = {
  key: string,
  cover_i: number,
  title: string,
  author_key: string,
  type?: string
}
export interface DescriptionTypes {
  description: string | {},
  title:string,
  key:string,
  covers: Array<number>
}