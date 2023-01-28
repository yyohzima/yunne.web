import mockData from "../../mock-data.json" assert { type: "json" }

import { Book, Resolvers } from "./resolversTypes.js"
import utils from "./utils/index.js"

type ResolverType = Pick<Resolvers, "Query" | "Mutation">

const resolvers: ResolverType = {
  // Upload: GraphQLUpload,
  Query: {
    book(_, { id }): Book | null {
      return mockData.books.find((v: Book) => v.id === id) || null
    },
    books() {
      return mockData.books
    },
  },
  Mutation: {
    createBook(_, { input }): Book | null {
      const newId = utils.newId("book")
      const created = {
        id: newId,
        title: input.title,
        author: input.author,
      }
      mockData.books.push(created)
      return created
    },
    updateBook(_, { id, input }): Book | null {
      const target = mockData.books.find((v: Book) => v.id === id)
      if (!target) {
        throw new Error("failed to updateBook.")
      }
      const updated = {
        id,
        ...input,
      }
      mockData.books = mockData.books.map((v: Book) =>
        v.id === id ? updated : v,
      )
      return updated
    },
  },
}

export default resolvers
