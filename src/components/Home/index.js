import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {
    editTableText: '',
    isButtonClick: false,
  }

  onChangeInput = event => {
    this.setState({editTableText: event.target.value})
  }

  onButtonClick = () => {
    this.setState(prevState => ({isButtonClick: !prevState.isButtonClick}))
  }

  render() {
    const {editTableText, isButtonClick} = this.state
    const editSaveButton = isButtonClick ? 'Edit' : 'Save'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="edit-container">
            {isButtonClick ? (
              <p className="paragraph">{editTableText}</p>
            ) : (
              <input
                className="input"
                type="text"
                value={editTableText}
                onChange={this.onChangeInput}
              />
            )}
            <input
              className="button"
              type="button"
              value={editSaveButton}
              onClick={this.onButtonClick}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
