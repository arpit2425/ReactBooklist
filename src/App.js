import React from 'react'
import Navbar from './components/Navbar'
import BookContextProvider from './contexts/BookContext'
import Booklist from './components/Booklist'

function App () {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
        <Booklist />
      </BookContextProvider>
    </div>
  )
}

export default App
