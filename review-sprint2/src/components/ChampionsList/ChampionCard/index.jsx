import React from 'react'
import { StyledButton } from '../../../styles/buttons'

const ChampionCard = ({champion, addChampionToTeam}) => {
  return (
    <li>
        <h3>{champion.name} - {champion.title}</h3>
        <img src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champion.image.full}`} />
        <StyledButton onClick={() => addChampionToTeam(champion)}>Adicionar um campeão</StyledButton>
    </li>    
  )
}

export default ChampionCard