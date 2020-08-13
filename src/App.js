import React, { useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css';


const App = () => {
const [items, setItems] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true)

useEffect(() => {  
const fetchedItems = async () => {
const result = await axios(`https://www.breakingbadapi.com/api/characters`)

  console.log(result.data)
  
  setItems(result.data)
  setIsLoading(false)
}

fetchedItems()

}, [])

  return (
  <div className="container">
    <Header />
    <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  )
}

export default App;

