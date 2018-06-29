import React from 'react'

class UpdateForm extends React.Component {
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

  render() {
    return (
      <div className='update-form-container'>
        <div>Update Art Card</div>
        <form className='update-form' onSubmit={(event) => this.props.handleUpdateArtCard(event, this.state, this.props.currentArt.id)}>
          <div className='input-wrapper'>
            <label htmlFor='imgUrl'>Image Url</label>
            <input name='imgUrl' type='text' onChange={this.handleChange} defaultValue={this.props.currentArt.imgUrl} required></input>
            <label htmlFor='description'>Description</label>
            <textarea name='description' type='text' onChange={this.handleChange} defaultValue={this.props.currentArt.description} required></textarea>
            <label htmlFor='location'>Location</label>
            <input name='location' type='text' onChange={this.handleChange} defaultValue={this.props.currentArt.location} required></input>
            <label htmlFor='lat'>Latitude</label>
            <input name='lat' type='number' min='-90' max='90' onChange={this.handleChange} defaultValue={this.props.currentArt.lat} required></input>
            <label htmlFor='lng'>Longitude</label>
            <input name='lng' type='number' step='0.001' min='-90' max='90' onChange={this.handleChange} defaultValue={this.props.currentArt.lng} required></input>
            <input type='submit' value='Update'></input>
          </div>
        </form>
      </div>
    )
  }
}

export default UpdateForm
