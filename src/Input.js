import React, {Component} from 'react';

class Input extends Component {
  constructor() {
    super()

    this.state = {}
  }


  render() {
    return (
      <div className="Input">
        <form>
          <input className="title-input"></input>
          <input className="body-input"></input>
          <input className="submit-button"
                  type="submit"
                  value="Submit"></input>
        </form>
      </div>
    )
  }

}

export default Input;
