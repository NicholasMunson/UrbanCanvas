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
            <input type='submit' value='Create'></input>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateForm
