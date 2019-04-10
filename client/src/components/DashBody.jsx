import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import LeadInfo from './LeadInfo.jsx'
import ButtonList from './ButtonList.jsx'
import ContactList from './ContactList.jsx'


class DashBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leads: [{ name: 'patrick ryan', company: 'zlien' , id: 1}, { name: 'winntana B.', company: 'Operation Spark' , id:2}, { name: 'arnulfo Man', company: 'guitar' }],
      currentLead: {},
      selectedView: null,
      uploaded: [{ name: 'patrick ryan', company: 'zlien' , id:1 }, { name: 'winntana B.', company: 'Operation Spark', id:2 }, { name: 'arnulfo Man', company: 'guitar', id:3 }],
      purchased: [{ name: 'patrick ryan', company: 'zlien', id:1 }, { name: 'winntana B.', company: 'Operation Spark' , id:2}, { name: 'arnulfo Man', company: 'guitar', id:3 }],
      currentLead: {name: 'patrick Ryan', company: 'zlien', role: 'manager', phoneNumber: '504-710-9310', email: 'Patrickry07@gmail.com', city: 'New Orleans', state: 'Louisiana'},
      contact: null,
    };
    const { classes } = props;
    DashBody.propTypes = {
      classes: PropTypes.object.isRequired,
    };
    this.selectView = this.selectView.bind(this);
    this.selectContact = this.selectContact.bind(this);
    this.searchContact = this.searchContact.bind(this);
  }

selectView(button){
  console.log(button)
  this.setState({selectedView: button})
  // axios.get('/')
  // this.setState({contactList: })
}

selectContact(contactId){
  console.log(contactId)
  axios.get(`/api/contacts/:${contactId}`)
    .then((contact)=>{
      this.setState({contact: contact.data})

    })

}
searchContact(event){
console.log('searched for contact!')
console.log(event)
  event.preventDefault();
}


render(){
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs>
          <ButtonList selectView={this.selectView}/>
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