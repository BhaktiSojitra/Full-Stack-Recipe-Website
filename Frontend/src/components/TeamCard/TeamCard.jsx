import React from 'react'
import './TeamCard.css'

const TeamCard = ({team}) => {
  console.log('team:', team);
  return (
    <div className='team-container'>
      <div className="team-img">
        <img src={team.img} alt='' />
      </div>
      <div className="team-para">
        <h3>{team.name}</h3>
        <p>{team.description}</p>
      </div>
    </div>
  )
}

export default TeamCard
