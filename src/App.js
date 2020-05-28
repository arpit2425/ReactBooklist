import React from 'react'

function App () {
  return (
    <div className='App'>
      <BookContextProvider>
        <Navbar />
      </BookContextProvider>
    </div>
  )
}

export default App
