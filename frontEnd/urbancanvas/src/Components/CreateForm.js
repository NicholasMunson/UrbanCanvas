import React, { Component } from 'react'
import SearchBox from "./SearchBox"

class CreateForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			location: 'Location',
			lat: 1,
			lng: 1
		}
		this.addressUpdate = this.addressUpdate.bind(this)
		this.shouldComponentUpdate = this.shouldComponentUpdate.bind(this)
	}
	addressUpdate(places) {
		this.setState = {
			location: places.location,
			lat: places.lat,
			lng: places.lng
		}
	}
	shouldComponentUpdate(event) {

	}

	render() {
		return (
			<div className='create-form-container'>
				<div>Create Art Card</div>
				<SearchBox addressUpdate={this.addressUpdate} />
				<form className='create-form' onSubmit={this.props.handleCreateArtCard}>
					<div className='input-wrapper'>

						<label htmlFor='location'>Location</label>
						<input name='location' type='text' value={this.state.location} readOnly required></input>

						<label htmlFor='lat'>Latitude</label>
						<input name='lat' type='number' min='-90' max='90' defaultValue={this.state.lat} required></input>

						<label htmlFor='lng'>Longitude</label>
						<input name='lng' type='number' step='0.001' min='-90' max='90' defaultValue={this.state.lng} required></input>

						<label htmlFor='imgUrl'>Image Url</label>
						<input name='imgUrl' type='text' required></input>

						<label htmlFor='description'>Description</label>
						<textarea name='description' type='text' required></textarea>

						<input type='submit' value='Create'></input>
					</div>
				</form>
			</div>
		)
	}
}

export default CreateForm




	// constructor(props) {
	//   super(props)
	//   this.state = {
	//     imgUrl: null,
	//     description: null,
	//     location: null,
	//     lat: null,
	//     lng: null
	//   }
	//   this.handleChange = this.handleChange.bind(this)
	// }
	//
	// handleChange(event) {
	//   this.setState({
	//     [event.target.name]: event.target.value
	//   })
	// }
