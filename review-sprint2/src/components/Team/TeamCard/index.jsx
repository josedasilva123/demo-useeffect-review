import React from 'react'
import { StyledButton } from '../../../styles/buttons'

const TeamCard = ({champion, removeChampionFromTeam}) => {
  return (
    <li>
        <img src={`http://ddragon.leagueoflegends.com/cdn/13.1.1/img/champion/${champion.image.full}`} alt={champion.name} />
        <h3>{champion.name}</h3>
        <StyledButton onClick={() => removeChampionFromTeam(champion.id)}>Remover campeão</StyledButton>
    </li>
  )
}

export default TeamCard