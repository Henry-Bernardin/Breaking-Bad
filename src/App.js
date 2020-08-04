import React from 'react';
import Header from './components/Header'
import './App.css';


const App = () => {
const [items, setItems] = useState([])
const [isLoading, setIsLoading] = useState(true)


  return (
  <div className="container">
    <Header />
    </div>
  )
}

export default App;
