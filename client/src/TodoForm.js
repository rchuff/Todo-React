import React, {Component} from 'react';


//
class TodoForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      inputText: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      inputText: e.target.value
    });
  }

  handleSubmit(){
    this.props.addTodo(this.state.inputText);
    this.setState({inputText: ''});
  }

  render() {
    return (
      <div>
        <input
        type='text'
        value={this.state.inputText}
        onChange={this.handleChange}/>
        <button
        onClick={this.handleSubmit}
        >Add Todo</button>
      </div>
    )
  }
}

export default TodoForm;
