import React from 'react'
import "./App.css"

const ArtCards = (props) => {
    console.log(props)
    return (
        <div className="card" id={props.card.id} key={props.card.id}>
            <img className="card-img" src={props.card.imgUrl} alt={props.card.id}/>
            <p className="card-location">{props.card.description}</p>
            <div className="card-buttons">
                <button className="edit-button">Edit</button>
                <button className="delete-button" s="s">Delete</button>
            </div>
        </div>
    )
}

export default ArtCards