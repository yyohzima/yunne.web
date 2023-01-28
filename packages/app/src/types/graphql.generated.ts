/* eslint-disable */
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Upload: any
}

export type Book = {
  author: Scalars['String']
  id: Scalars['ID']
  title: Scalars['String']
}

export type BookInput = {
  author: Scalars['String']
  title: Scalars['String']
}

export type Mutation = {
  createBook: Maybe<Book>
  updateBook: Maybe<Book>
}

export type MutationCreateBookArgs = {
  input: BookInput
}

export type MutationUpdateBookArgs = {
  id: Scalars['ID']
  input: BookInput
}

export type Query = {
  book: Maybe<Book>
  books: Array<Book>
}

export type QueryBookArgs = {
  id: Scalars['ID']
}
