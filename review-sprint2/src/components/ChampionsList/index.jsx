import React from 'react'
import ChampionCard from './ChampionCard'
import { StyledChampionList } from './style'

const ChampionList = ({championsList, addChampionToTeam}) => {
  return (
    <StyledChampionList>
        {championsList.map(champion => (
            <ChampionCard key={champion.id} champion={champion} addChampionToTeam={addChampionToTeam} />
        ))}
    </StyledChampionList>
  )
}

export default ChampionList