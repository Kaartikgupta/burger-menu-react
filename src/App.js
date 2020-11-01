import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state={
    persons:[
      {name:'kaartik'},
      {name:'kratika'}
    ]
  }
   buttonHandler=()=>{
   this.setState({
    persons:[
      {name:'kaartik'},
      {name:'Amit'}
    ]
   })
  }


render(){
  return (
    <div className="App">
     <h1> hello, this is kaartik gupta</h1>
     <button onClick={this.buttonHandler}>click me!</button>
     <Person name={this.state.persons[0].name}/>
     <Person name={this.state.persons[1].name}/>
     <Person name={this.state.persons[1].name}>hbdhbedjhdbjhsbdhjs</Person>
    </div>
  );
}
}

export default App;
