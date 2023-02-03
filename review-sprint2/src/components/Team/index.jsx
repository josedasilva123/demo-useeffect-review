import React from 'react'
import TeamCard from './TeamCard'

const Team = ({team, removeChampionFromTeam}) => {
  return (
    <div>
        <h2>Minha equipe:</h2>
        <ul>
            {team.map(champion => (
                <TeamCard key={champion.id} champion={champion} removeChampionFromTeam={removeChampionFromTeam}/>
            ))}
        </ul>
    </div>
  )
}

export default Team