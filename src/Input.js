import React, {Component} from 'react';

class Input extends Component {
  constructor() {
    super()

    this.state = {
      idea: {
        titleInput: '',
        bodyInput: '',
        quality: 'swill'
      }
    }

    this.setIdeaInput = this.setIdeaInput.bind(this);
    this.sendIdeaToApp = this.sendIdeaToApp.bind(this);
  }

  setIdeaInput(event) {
    this.setState({ idea: {...this.state.idea, [event.target.name]: event.target.value }}) 
  }

  sendIdeaToApp(event) {
    event.preventDefault();
    this.props.setIdeaInState(this.state.idea)
  }


  render() {
    return (
      <div className="Input">
        <form onSubmit={ this.sendIdeaToApp } >
          <input className="title-input"
                 value={ this.state.titleInput } 
                 onChange={ this.setIdeaInput }
                 name='titleInput'
                 />
          <input className="body-input"
                 value={ this.state.bodyInput } 
                 onChange={ this.setIdeaInput }
                 name='bodyInput'
                 />
          <input className="submit-button"
                 type="submit"
                 value="Submit"
                 />
        </form>
      </div>
    )
  }

}

export default Input;
