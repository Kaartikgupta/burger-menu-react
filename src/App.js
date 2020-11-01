import React,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {
  state={
    persons:[
      {name:'kaartik'},
      {name:'kratika'}
    ],
    showPersons:false
  }
   buttonHandler=()=>{
   this.setState({
    persons:[
      {name:'kaartik'},
      {name:'Amit'}
    ]
   })
  }
  toggleHandler=()=>{
    const dontshow=this.state.showPersons;
    this.setState({
      showPersons:!dontshow
    })
  }

render(){
  return (
    <div className="App">
     <h1> hello, this is kaartik gupta</h1>
     <button onClick={this.toggleHandler}>click me!</button>
        { this.state.showPersons?
          <div>
          <Person name={this.state.persons[0].name}/>
          <Person name={this.state.persons[1].name}/>
          <Person name={this.state.persons[1].name}>hbdhbedjhdbjhsbdhjs</Person>
          </div>:null
        }
    </div>
  );
}
}

export default App;
