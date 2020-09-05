import React, { useEffect } from 'react'
import axios from 'axios'
import Header from './components/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import './App.css';


const App = () => {
const [items, setItems] = React.useState([])
const [isLoading, setIsLoading] = React.useState(true)
const [query, setQuery] = React.useState('')

useEffect(() => {  
const fetchedItems = async () => {
const result = await axios(
  `https://www.breakingbadapi.com/api/characters?name=${query}`
  )

  //console.log(result.data)
  
  setItems(result.data)
  setIsLoading(false)
}

fetchedItems()

}, [query])

  return (
  <div className='container'>
    <Header />
    <Search getQuery={(q) => setQuery(q)} />
    <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App;

