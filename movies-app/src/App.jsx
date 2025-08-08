
import './App.css'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'
import { useState, useCallback} from 'react'
import debounce from 'just-debounce-it'

import { useMovies } from './hooks/useMovies'

function App() {
  const [sort, setSort] = useState(false)

  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({search, sort})

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search })
    }, 300000000)
  , [getMovies])
 
  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleChange = (event) => {
    const newQuery = event.target.value
    if (newQuery.startsWith(' ')) return  
    setSearch(newQuery)
    debouncedGetMovies(newQuery)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1> 
        <form className="form" onSubmit={handleSubmit}>
          <input onChange={handleChange} name='query' value={search} placeholder="Matrix, Lord of the Rings ..." 
          style={{ 
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent', 
            }}/>
          <input type='checkbox' onChange={() => setSort(!sort)} checked={sort}/>
          <button type='submit' disabled={error}>Search </button>
          {error && <span className='error' style={{color: 'red'}}>{error}</span>}
        </form>
        
      </header>

      <main>
        {
          loading? <span> Cargando peliculas ...</span> : <Movies movie={ movies }/>
        }
      </main>
      
    </div>
  )
}

export default App
