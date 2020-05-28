import React from 'react'
import Navbar from './components/Navbar'
import BookContextProvider from './contexts/BookContext'
import Booklist from './components/Booklist'
import BookForm from './components/BookForm'

function App () {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <Booklist />
        <BookForm />
      </BookContextProvider>
    </div>
  )
}

export default App
