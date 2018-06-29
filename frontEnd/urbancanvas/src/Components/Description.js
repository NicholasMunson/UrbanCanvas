import React from 'react'

const Description = (props) => {
  return (
    <React.Fragment>
      <h2>Description of Piece</h2>
      <p>{props.currentArt.description}</p>
    </React.Fragment>

  )
}

export default Description
