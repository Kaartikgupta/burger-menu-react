import React,{Component} from 'react';
import './App.css';
import person from './Person/Person';
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
  const style={
    backgroundColor:'white',
    cursor:'pointer'
  };
 if(!this.state.showPersons){
  style.backgroundColor='red'
 }

  return (
    <div className="App">
     <h1> hello, this is kaartik gupta</h1>
     <button style={style} onClick={this.toggleHandler}>click me!</button>
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
