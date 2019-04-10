import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />


class App extends React.Component {


  constructor(props){
    super(props)
  }



  render(){
    return(
      <div>
        <h1> Lead the Deal ! </h1>
        <form action="/login" method="post">
    <div>
        <label>Username:</label>
        <input type="text" name="username"/>
    </div>
    <div>
        <label>Password:</label>
        <input type="password" name="password"/>
    </div>
    <div>
        <Button>LogIn</Button>
        <Button>Register</Button>
    </div>
</form>
      
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('root'));