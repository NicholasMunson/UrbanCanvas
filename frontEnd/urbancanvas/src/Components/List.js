import React from 'react'
import ArtCards from "./ArtCards"

const List = (props) => {
    const ArtPost = props
        .artList
        .map(card => <ArtCards updateDisplay={props.updateDisplay} handleClick={props.handleClick} handleArtDelete={props.handleArtDelete} card={card} key={card.id}/>)
    return (<div className="art-list">
        {ArtPost}
    </div>)
}

export default List
