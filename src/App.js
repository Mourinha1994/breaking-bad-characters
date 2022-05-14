import axios from 'axios';
import React, {useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search';

const App = () => {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true)
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setCharacters(result.data)
      setIsLoading(false)
    }

    fetchCharacters()
  }, [query])

  const queryFunction = (q) => {
    setQuery(q)
  }

  return (
    <div className='container'>
      <Header />
      <Search getQuery={queryFunction} />
      <CharacterGrid isLoading={isLoading} items={characters} />
    </div>
  );
}

export default App;
