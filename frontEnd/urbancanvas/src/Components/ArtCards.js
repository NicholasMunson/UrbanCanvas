import React from 'react'
import "./App.css"

const ArtCards = (props) => {
	return (
		<div onClick={(event) => props.handleClick(event, props.card.id)} className="card" id={props.card.id} key={props.card.id}>
			<img onClick={() => props.updateDisplay('b')} className="card-img" src={props.card.imgUrl} alt={props.card.id}/>
			<p className="card-location">{props.card.location}</p>
			<div className="card-buttons button-container">
				<button onClick={() => props.updateDisplay('d')} className=" edit- buttons navbut button-style">Edit</button>
				<button onClick={(event) => props.handleArtDelete(event, props.card.id)}
				className="delete-button navbut button-style" s="s">Delete</button>
			</div>
		</div>
	)
}

export default ArtCards
