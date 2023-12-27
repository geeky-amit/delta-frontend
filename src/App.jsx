import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"


import CreateListItem from './components/CreateListItem';


const App = () => {
  return (
    <div className="container">
      <CreateListItem />
    </div>
  )
}

export default App