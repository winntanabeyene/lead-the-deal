import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import LeadInfo from './LeadInfo.jsx'
import ButtonList from './ButtonList.jsx'
import ContactList from './ContactList.jsx'
import SearchView from './SearchView.jsx'

import axios from 'axios';


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
  }

selectView(button){
  this.setState({selectedView: button})
}

uploadedView(){
  this.props.auth.fetch(`/api/users/${this.props.userId}/uploaded_contacts`)
    .then((uploadedContacts) => {
      console.log(uploadedContacts.data)
      this.setState({ uploaded: uploadedContacts.data, selectedView: 'uploaded' })
    })
    .catch((err)=>{
      console.log(err);
    })
  // axios.get(`/api/users/:${'userId'}/uploaded_contacts`)
  //   .then((uploadedContacts)=>{
  //     this.setState({uploaded: uploadedContacts.data, selectedView: 'uploaded'})
  //   })
}
purchasedView(){
  axios.get(`/api/users/:${'userId'}/purchased_contacts`)
    .then((purchasedContacts) => {
      this.setState({ purchased: purchasedContacts.data, selectedView: 'purchased' })
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
  console.log(query)
 axios.post('/api/search', query)
  .then((contacts) => {
    console.log(contacts)
    this.setState({
      searchedContacts: contacts.data,
      selectedView: 'searched',
    })
  }).catch((err) => {
    console.log(err)
  });
}

uploadContact(contact){
  console.log(this.props.userId)
  this.props.auth.fetch(`/api/users/${this.props.userId}/upload`, contact)
  // axios.post('/api/upload', contact)
  //   .then((results) => {
  //     console.log(results)
  //   }).catch((err) => {
  //     console.log(err)
  //   });
}

contactPurchase(contactId){
  console.log(contactId)
  axios.post(`/api/contact_purchase/:${contactId}`)
  .then((result)=>{
    this.purchasedView()
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
          <ButtonList selectView={this.selectView} uploadedView={this.uploadedView} purchasedView={this.purchasedView}/>
          <ContactList uploaded={this.state.uploaded} purchased={this.state.purchased} 
            selectedView={this.state.selectedView} selectContact={this.selectContact} 
            searchContact={this.searchContact} uploadContact={this.uploadContact}/>
          <SearchView searchedContacts={this.state.searchedContacts} selectedView={this.state.selectedView} selectContact={this.selectContact}/>

        </Grid>
        <Grid item xs={8}>
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


export default withStyles(styles)(DashBody);