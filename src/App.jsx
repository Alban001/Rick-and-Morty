// import { useState } from 'react'
import { useEffect,useRef,useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import RandomNumberLocation from './services/RandomNumberLocation'
import CharacterCard from './components/CharacterCard'
import ResidentDetail from './components/ResidentDetail'
import ErrorMessage from './components/ErrorMessage'

function App() {

  const randomLocation = RandomNumberLocation(126)  
  const [locationSelected, setlocationSelected] = useState(randomLocation)
  const inputref = useRef()

  const url = `https://rickandmortyapi.com/api/location/${locationSelected}`

  const handleSubmit =(e)=>{
      e.preventDefault()
      setlocationSelected(inputref.current.value.trim())
     
  }

  const [card , getCard, hasError] = useFetch(url)
  
  useEffect(()=>{
    getCard()
    console.log(card)
  },[locationSelected])
  return (
    <>
    <div className='container'>
    <h1>Rick and Morty</h1>
    <form onSubmit={handleSubmit}>
    <input ref={inputref} type="text" /> <button>Search</button>
    </form>
      <CharacterCard character={card } />
     <div className='gridContainer'>
      {
          
          hasError ?  
          <ErrorMessage />
          : card?.residents.map(url => (
            <ResidentDetail key={Math.random()} url={url}/>
          ))
      }
     </div>
    </div>  
    </>
  )
}

export default App
