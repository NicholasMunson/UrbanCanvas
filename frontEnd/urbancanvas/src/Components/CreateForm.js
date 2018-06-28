import React, {Component} from 'react'

class CreateForm extends Component {
  render() {
    return (
      <div className='create-form-container'>
        <div>Create Art Card</div>
        <form className='create-form' onSubmit={this.props.handleCreateArtCard}>
          <div className='input-wrapper'>
            <label htmlFor='imgUrl'>Image Url</label>
            <input name='imgUrl' type='text' required></input>
            <label htmlFor='description'>Description</label>
            <textarea name='description' type='text' required></textarea>
            <label htmlFor='location'>Location</label>
            <input name='location' type='text' required></input>
            <label htmlFor='lat'>Latitude</label>
            <input name='lat' type='number' min='-90' max='90' required></input>
            <label htmlFor='lng'>Longitude</label>
            <input name='lng' type='number' step='0.001' min='-90' max='90' required></input>
            <input type='submit' value='Create'></input>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateForm
