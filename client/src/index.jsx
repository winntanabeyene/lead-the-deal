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
import UserHeader from './components/UserHeader.jsx';

class App extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      isLoggedin: false,
      userId: null,
      redirectTo: '',
      points: null
    }
    this.updatePoints = this.updatePoints.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
    this.Auth = new AuthService();
  }



componentWillMount() {
  //   if (this.Auth.loggedIn()){
  //     this.setState({
  //       isLoggedin: true,
  //       redirectTo: '/dashboard'
  //     })
  //   } else{
  //     this.setState({
  //       isLoggedin: false
  //     })
  //   }
  }

componentDidMount(){
  
  // Axios.get(`/api/users/${this.props.userId}`)
  //   .then((result) => {
  //     console.log(result);
  //     console.log(result.data.points, "componentdidMount")
  //     this.setState({
  //       points: result.data.points
  //     })
  //   }).catch((err) => {
  //     console.error(err);
  //   });

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

      //redirect user


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
updatePoints(){
  console.log('hello')
  this.setState({ points: this.state.points + 1})
}


  render(){
    return(
      <Router>
  

        {this.state.isLoggedin ? 
        <div>

            <UserHeader logOutUser={this.logOutUser} userId={this.state.userId} points={this.state.points}/>
      <DashBody auth={this.Auth} userId={this.state.userId} updatePoints={this.updatePoints}/> 
    
      <Route exact path='/dashboard' />
        </div>
        : 
        <div>
        <DashboardHeader isLoggedin={this.state.isLoggedin} logOutUser={this.logOutUser}/>

          <Route path='/register'
            render={(routeProps) => (<Register {...routeProps} registerUser={this.registerUser} />)}
            />
          <Route path='/login'
            render={(routeProps) => (<Login {...routeProps} Auth={this.Auth} isLoggedin={this.state.isLoggedin} loginUser={this.loginUser} />)}
            />
            </div>

        }

        
    
      </Router>
    )
  }


}

ReactDOM.render(
  <App />,
document.getElementById('root')
);