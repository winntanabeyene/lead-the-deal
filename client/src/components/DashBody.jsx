import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import LeadInfo from './LeadInfo.jsx'
import ButtonList from './ButtonList.jsx'
import ContactList from './ContactList.jsx'

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
  }

selectView(button){
  console.log(button)
  this.setState({selectedView: button})
  // axios.get('/')
  // this.setState({contactList: })
}

uploadedView(){
  axios.get(`/api/users/:${'userId'}/uploaded_contacts`)
    .then((uploadedContacts)=>{
      this.setState({uploaded: uploadedContacts.data})
    })
}
purchasedView(){
  axios.get(`/api/users/:${'userId'}/purchased_contacts`)
    .then((purchasedContacts) => {
      this.setState({ purchased: purchasedContacts.data, selectedView: 'purchased' })
    })
}

selectContact(contactId, list){
  console.log(this.state[list])
  const contact = this.state[list].filter((contact)=> contact.id === contactId)[0]
  console.log(contact)
  this.setState({currentLead: contact})

  // axios.get(`/api/contacts/:${contactId}`)
  //   .then((contact)=>{
  //     this.setState({contact: contact.data})

  //   })

}
searchContact(e){
  e.preventDefault();
  console.log(e.target.value)
console.log('searched for contact!')

}


render(){
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs>
          <ButtonList selectView={this.selectView} uploadedView={this.uploadedView} purchasedView={this.purchasedView}/>
          <ContactList uploaded={this.state.uploaded} purchased={this.state.purchased} 
            selectedView={this.state.selectedView} selectContact={this.selectContact} searchContact={this.searchContact}/>
        </Grid>
        <Grid item xs={8}>
          <LeadInfo currentLead={this.state.currentLead}/>
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