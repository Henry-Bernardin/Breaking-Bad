import React, { useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import './App.css';


const App = () => {
const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(true)

useEffect(() => {

})
  return (
  <div className="container">
    <Header />
    </div>
  )
}

export default App;
