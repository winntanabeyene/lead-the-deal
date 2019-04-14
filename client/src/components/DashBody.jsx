import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import LeadInfo from './LeadInfo.jsx'
import ButtonList from './ButtonList.jsx'
import ContactList from './ContactList.jsx'
import SearchView from './SearchView.jsx'
import { withRouter } from 'react-router'
import axios from 'axios';
import AuthService from './AuthService.js';


class DashBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userId = null,
      leads: [{ name: 'patrick ryan', company: 'zlien' , id: 1}, { name: 'winntana B.', company: 'Operation Spark' , id:2}, { name: 'arnulfo Man', company: 'guitar' }],
      selectedView: null,
      uploaded: [],
      purchased: [],
      currentLead: {},
      contact: null,
      searchedContacts: [],
      contactView: null
    };
    const { classes } = props;
    DashBody.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    this.selectView = this.selectView.bind(this);
    this.selectContact = this.selectContact.bind(this);
    this.searchContact = this.searchContact.bind(this);
    this.uploadedView = this.uploadedView.bind(this);
    this.purchasedView = this.purchasedView.bind(this);
    this.uploadContact = this.uploadContact.bind(this);
    this.contactPurchase = this.contactPurchase.bind(this);
    this.Auth = new AuthService();
  }

componentWillMount(){
 this.props.history.push('/dashboard')
 document.body.style.backgroundImage = 'none';
  this.props.getUserPoints();
}

componentWillUnmount(){
  document.body.style.backgroundImage = "url('./leaddeal.png')"
}

selectView(button){
  this.setState({selectedView: button})
}

uploadedView(){
  this.props.auth.fetch(`/api/users/${this.props.userId}/uploaded_contacts`)
    .then((uploadedContacts) => {
      console.log(uploadedContacts.data)
      this.setState({ uploaded: uploadedContacts, selectedView: 'uploaded' })
    })
    .catch((err)=>{
      console.log(err);
    })
}
purchasedView(){
  console.log('get logged in')
  this.props.auth.fetch(`/api/users/${this.props.userId}/purchased_contacts`)
    .then((purchasedContacts) => {
      console.log(purchasedContacts)
      this.setState({ purchased: purchasedContacts, selectedView: 'purchased' })
    })
    .catch((err)=>{
      console.log(err);
    })
}

selectContact(contactId, list, view){
  if (view === 'access'){
    const contact = this.state[list].filter((contact)=> contact.id === contactId)[0]
    this.setState({
      currentLead: contact,
      contactView: 'access'
    })
  }
  else{
    const contact = this.state.searchedContacts.filter((contact) => contact.id === contactId)[0]
    this.setState({
      currentLead: contact,
      contactView: 'limited'
    })
  }

}

searchContact(query){
  //console.log(query)
  const options = {
    method: 'POST',
    body: JSON.stringify(query)
  }
  this.props.auth.fetch(`/api/users/search/${this.props.userId}`, options)
    .then((contacts) => {
      console.log('im inside this contact', contacts)
      this.setState({
        searchedContacts: contacts,
        selectedView: 'searched',
      })
    }).catch((err) => {
      console.log(err)
    });
}

uploadContact(contact){
  console.log(this.props.userId)

  const options = {
    method: 'POST',
    body: JSON.stringify(contact)
  }

  this.props.auth.fetch2(`/api/users/${this.props.userId}/upload`, options)
    .then((response)=>{
      console.log('here is the upload response', response)
      this.props.getUserPoints();
    })
    .catch((err)=>{
      console.error(err);
    })
}

contactPurchase(event, contactId){

  console.log(event.target.innerHTML);
  event.target.innerHTML = 'Contact Purchased';
  event.target.style.color = 'grey';
  //console.log(contactId)
  const options = {
    method: 'POST',
  }
  this.props.auth.fetch(`/api/users/purchase_contact/${this.props.userId}/${contactId}`, options)
    .then((result)=>{
      console.log('i have just purchased this contact',result)
      this.props.getUserPoints();
    })
    .catch((err)=>{
      console.log(err)
    })
}


render(){
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs>
        <div className="left-top-display">
          <ButtonList selectView={this.selectView} uploadedView={this.uploadedView} purchasedView={this.purchasedView}/>

        </div>
      
        <div className="left-bottom-display">

          <ContactList uploaded={this.state.uploaded} purchased={this.state.purchased} 
            selectedView={this.state.selectedView} selectContact={this.selectContact} 
            searchContact={this.searchContact} uploadContact={this.uploadContact}/>
          <SearchView searchedContacts={this.state.searchedContacts} selectedView={this.state.selectedView} selectContact={this.selectContact}/>
        </div>

        </Grid>
        <Grid item xs={9}>
        <div>
        </div>
          <LeadInfo currentLead={this.state.currentLead} contactView={this.state.contactView} contactPurchase={this.contactPurchase}/>
        </Grid>
      </Grid>
    </div>
  );
}






}
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


export default withRouter(withStyles(styles)(DashBody));