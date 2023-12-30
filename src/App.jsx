import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroups from './components/ListGroups'


const App = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <Form />
        <ListGroups />
      </div>
    </>
  )
}

export default App
