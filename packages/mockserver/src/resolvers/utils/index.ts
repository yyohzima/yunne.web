// TODO fix lint
export default {
  currentId: 10001,
  newId(prefix: string) {
    return `${prefix}.${this.currentId++}`
  },
  getNowInISOString() {
    if (process.env.NODE_ENV === "test") {
      return "2001-02-03T04:05:06Z"
    }
    return `${new Date().toISOString().substring(0, 19)}Z`
  },
}
