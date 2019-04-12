import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import DashboardHeader from './components/DashboardHeader.jsx';
import DashBody from './components/DashBody.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom'
import Axios from 'axios';
import AuthService from './components/AuthService.js';

class App extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      isLoggedin: false,
      userId: null,
      redirectTo: ''
    }

    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.Auth = new AuthService();
  }



componentWillMount() {
    if (this.Auth.loggedIn()){
      this.setState({
        isLoggedin: true,
        redirectTo: '/dashboard'
      })
    } else{
      this.setState({
        isLoggedin: false
      })
    }
  }

componentDidMount(){
  
this.setState({
  isLoggedin: false
})
}

registerUser(user){

  Axios.post('/api/auth/signup', user)
    .then((response) => {
      console.log(response);
      if (response.data) {
        console.log('succesful signup')
        this.setState({
          redirectTo: '/login'
        })
      } else {
        console.log('signup error')
      }
    }).catch((err) => {
      console.log('sign up server error', err);
    });

}

loginUser(username, password){
  this.Auth.login(username, password)
    .then((res) => {
      console.log(res);
      this.setState({
        isLoggedin: true,
        userId: res.id
      })
      console.log(this.props);
    }).catch((err) => {
      alert(err.message);
    });
}

logOutUser(){
  this.Auth.logout();
  this.setState({
    isLoggedin: false,
    userId: null,
    redirectTo: '/login'
  })
}


  render(){
    return(
      <Router>
  
        <DashboardHeader isLoggedin={this.state.isLoggedin} logOutUser={this.logOutUser}/>

        {this.state.isLoggedin ? 
        <DashBody /> : null
        }

          <Route exact path ='/dashboard' component={DashBody} />

          <Route path='/register'
           render={(routeProps) => (<Register {...routeProps} registerUser={this.registerUser}/>)}
            />
          <Route path='/login'
           render={(routeProps) => (<Login {...routeProps} Auth={this.Auth} isLoggedin={this.state.isLoggedin} loginUser={this.loginUser}/>)}
            />
    
      </Router>
    )
  }


}

ReactDOM.render(
  <App />,
document.getElementById('root')
);