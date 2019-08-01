import React from 'react';
import './App.css';
import TodoList from './TodoList'
import StartPage from './StartPage'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      startList: false
    };
    this.startApp = this.startApp.bind(this);
  }

  startApp(){
    this.setState({startList: true})
  }

  render(){

    return (
      <div>
        <StartPage started={this.state.startList} onStart={this.startApp}/>
        <TodoList started={this.state.startList}/>
      </div>
    )
  }
}

export default App;
