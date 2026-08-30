import React from 'react'

const IdCard = (props) => {
  return (
    <div>
      <img src={props.picture} alt="profile" />
      <h2>{props.firstName} </h2>
      <h2> {props.lastName}</h2>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {props.birth}</p>
      
    </div>
  )
}

export default IdCard
