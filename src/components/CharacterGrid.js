import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './spinner'

const CharacterGrid = ({ checkLoading , allCharacters }) => {

  console.log(allCharacters);
  return checkLoading ? (
    <Spinner />
  ) :  (
    <section className='cards'>
      {allCharacters.map((character) => (
        <CharacterItem key={character.char_id} character={character}></CharacterItem>
      ))}
    </section>
  )
}

export default CharacterGrid
