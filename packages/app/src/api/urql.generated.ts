/* eslint-disable */
import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  author: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type BookInput = {
  author: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  createBook: Maybe<Book>;
  updateBook: Maybe<Book>;
};


export type MutationCreateBookArgs = {
  input: BookInput;
};


export type MutationUpdateBookArgs = {
  id: Scalars['ID'];
  input: BookInput;
};

export type Query = {
  book: Maybe<Book>;
  books: Array<Book>;
};


export type QueryBookArgs = {
  id: Scalars['ID'];
};

export type GetBookIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBookIdsQuery = { books: Array<{ id: string }> };

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { books: Array<{ id: string, title: string, author: string }> };


export const GetBookIdsDocument = gql`
    query getBookIds {
  books {
    id
  }
}
    `;

export function useGetBookIdsQuery(options?: Omit<Urql.UseQueryArgs<GetBookIdsQueryVariables>, 'query'>) {
  return Urql.useQuery<GetBookIdsQuery, GetBookIdsQueryVariables>({ query: GetBookIdsDocument, ...options });
};
export const GetBooksDocument = gql`
    query getBooks {
  books {
    id
    title
    author
  }
}
    `;

export function useGetBooksQuery(options?: Omit<Urql.UseQueryArgs<GetBooksQueryVariables>, 'query'>) {
  return Urql.useQuery<GetBooksQuery, GetBooksQueryVariables>({ query: GetBooksDocument, ...options });
};