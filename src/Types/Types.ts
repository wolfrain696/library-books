import {z} from 'zod'

export type FavoritesType = {page: PageType, info: BookInfo | AuthorInfo}
export type Category = 'books' | 'favorites' | 'authors' | 'default'

export function BookInfoGuard(data: BookInfo | AuthorInfo): data is BookInfo {
  return (data as BookInfo).type.key === '/type/work'
}

export function AuthorInfoGuard(data: BookInfo | AuthorInfo): data is AuthorInfo {
  return (data as AuthorInfo).type.key === '/type/author'
}

const BooksResponseZod = z.object({
  description: z.string().or(z.object({type: z.string(), value: z.string()})).or(z.undefined()),
  title: z.string(),
  type: z.object({key: z.string()}),
  covers: z.array(z.number()),
  authors: z.array(z.object({key: z.string(), name: z.string()})),
  key: z.string()
})

const AuthorResponseZod = z.object({
  name : z.string(),
  photos: z.array(z.number()),
  type: z.object({key: z.string()}),
  birth_date: z.string(),
  bio: z.object({value : z.string()}).or(z.undefined()).or(z.string()),
  key: z.string()
})


const BookDataResponse = z.object({
  key: z.string(),
  cover_i: z.number(),
  title: z.string().or(z.undefined()),
  author_key: z.string().or(z.undefined()),
  name: z.string().or(z.undefined()),
  type: z.string().or(z.undefined()),
  top_work: z.string(),
  author_name: z.string().or(z.undefined()),
  publish_date: z.array(z.string()),
  cover_edition_key: z.string()
})

export type PageType = z.infer<typeof BookDataResponse>
export type AuthorInfo = z.infer<typeof AuthorResponseZod>
export type BookInfo = z.infer<typeof BooksResponseZod>