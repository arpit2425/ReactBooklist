import React, { useReducer, createContext } from 'react'
import { BookReducer } from '../Reducers/BookReducer'

export const BookContext = createContext()
function BookContextProvider (props) {
  const [books, dispatch] = useReducer(BookReducer, [])
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider
