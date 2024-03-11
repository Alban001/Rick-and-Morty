import React from 'react'

const CharacterCard = ({character}) => {
  console.log(character)
  return (
    <div>
        <article>
            <h2>{character?.name}</h2>
            <li><span>Type: </span>{character?.type}</li>
            <li><span>Dimension: </span>{character?.dimension}</li>
            <li><span>Population: </span>{character?.residents.length}</li>
        </article>
       
    </div>
  )
}

export default CharacterCard