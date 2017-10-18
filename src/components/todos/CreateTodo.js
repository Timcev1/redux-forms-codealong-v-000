import React, { Component } from 'react'

class CreateTodo extends Component {
  render() {
    
constructor() {
 super();
 this.state = {
   text: '',
 };
}

    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };
}

export default CreateTodo;
