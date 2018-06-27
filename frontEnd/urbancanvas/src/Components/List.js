import React from 'react'
import ArtCards from "./ArtCards"

const List = (props) => {
  const ArtPost = props.artList.map(card => <ArtCards card={card} key={card.id} />)
  return (
    <div className="art-list">
      {ArtPost}
    </div>
  )
}

export default List