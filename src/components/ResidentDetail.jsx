import React, { useEffect, useState} from 'react'
import useFetch from '../hooks/useFetch'
import '../styles/ResidentDetail.css'

const ResidentDetail = ({url}) => {

  const [alive, setalive] = useState(false)
  const [character, getcharacter] = useFetch(url)

  useEffect(()=>{
    getcharacter()
    console.log(character)
  },[])
  return (
    <div className='residenContainer'>
        <img src={character?.image} alt="" />
        <li><span>Specie: </span>{character?.species}</li>
        <li><span>Origin: </span>{character?.origin.name}</li>
        <li><span>Episodes where Appears: </span>{character?.episode.length}</li>
        <div className='status-container'>
        <span className={(() => {
        if (character?.status === 'Alive') {
          return (
            'green-dot'
          )
        } else if (character?.status === 'Dead') {
          return (
            'red-dot'
          )
        } else {
          return (
            'unknow-dot'
          )
        }
      })()} ></span><li>{character?.status}</li>
        </div>
        
       
    </div>
  )
}

export default ResidentDetail