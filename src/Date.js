class DATE {
  static convert(string) {
    const date = new Date(string)
    return date.toDateString()
  }
}

export default DATE
