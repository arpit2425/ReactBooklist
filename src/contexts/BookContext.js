import React, { useReducer, createContext, useEffect } from 'react'
import { BookReducer } from '../Reducers/BookReducer'

export const BookContext = createContext()
function BookContextProvider (props) {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    let localData = localStorage.getItem('books')
    return localData ? JSON.parse(localData) : []
  })
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
