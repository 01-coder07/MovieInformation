import React from 'react'
import Home from "./component/Home"
import MovieDetails from "./component/MovieDetails"

import { Routes , Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path = "/" element={<Home />}/>
      <Route path = "/movie/:id" element = {<MovieDetails />}/>
    </Routes>
  )
}

export default App
