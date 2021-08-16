function isBook(element) {
  return element.type === 'work'
}

function isAuthor(element) {
  return element.type === 'author'
}

function filterByTitle(element, val) {
  return element.title.toLowerCase().includes(val.toLowerCase())
}

function filterByAuthorName(element, val) {
  return element.name.toLowerCase().includes(val.toLowerCase())
}

export {isBook, isAuthor, filterByTitle, filterByAuthorName}