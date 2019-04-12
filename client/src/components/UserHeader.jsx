import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import AuthService from './AuthService';
import Axios from 'axios';
import { withRouter } from 'react-router'



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class UserHeader extends React.Component {


  constructor(props){
    super(props)

    this.state = {
      points: null
    }

    this.logOut = this.logOut.bind(this);
  }

  componentDidMount(){
   
    this.props.history.push('/dashboard');
  
   if (this.props.userId)

   Axios.get(`/api/users/${this.props.userId}`)
    .then((result) => {
      console.log(result);
      this.setState({
        points: result.data.points
      })
    }).catch((err) => { 
      console.error(err);
    });

  }

  logOut(){
    this.props.history.push('/login')
    this.props.logOutUser();
  }


  render(){

    
    const { classes } = this.props;
    const { isLoggedIn } = this.props;
    const { logOutUser } = this.props;
    
    
    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          You have <div>{this.state.points}</div> points
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Lead the Deal
          </Typography>

            <div>
              <Button onClick={this.logOut}>Logout</Button>
            </div>
           
        </Toolbar>
      </AppBar>
    </div>
  );  
}
}

// DashboardHeader.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withRouter(withStyles(styles)(UserHeader));