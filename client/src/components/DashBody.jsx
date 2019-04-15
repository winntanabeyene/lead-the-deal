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
      selectedView: null,
      uploaded: [],
      purchased: [],
      currentLead: {},
      contact: null,
      searchedContacts: [],
      contactView: null,
      renderContactList: false,
      commentBodyText: '',
      comments: [],
      username: '',
      purchaseState: 'Purchase This Contact',
      purchaseColor: 'white',
      showNotes: true,
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
    this.renderContactList = this.renderContactList.bind(this);
    this.handleComment = this.handleComment.bind(this)
    this.commentBody = this.commentBody.bind(this)
    this.showModal = this.showModal.bind(this);
  }

componentWillMount(){
 this.props.history.push('/dashboard')
 document.body.style.backgroundImage = 'none';
this.props.getUserPoints();

}


componentWillUnmount(){
  document.body.style.backgroundImage = "url('./leaddeal.png')"
}

showModal() {
    console.log('modal');
  }


selectView(button){
  this.setState({selectedView: button})
}

uploadedView(){
  this.props.auth.fetch(`/api/users/${this.props.userId}/uploaded_contacts`)
    .then((uploadedContacts) => {
      console.log(uploadedContacts)
      this.setState({ uploaded: uploadedContacts, selectedView: 'uploaded' })
    })
    .catch((err)=>{
      console.log(err);
    })
}
purchasedView(){
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



    this.props.auth.fetch(`/api/users/comments/${this.props.userId}/${contactId}`)
      .then((comments) => {
        let revComments = comments.reverse();
        this.setState({
          comments: revComments,
          showNotes: true,
        })
      })
      .catch((err) => {
        console.log(err);
      })



    this.setState({
      currentLead: contact,
      contactView: 'access'
    })
  }
  else{
    const contact = this.state.searchedContacts.filter((contact) => contact.id === contactId)[0]
    this.setState({
      currentLead: contact,
      contactView: 'limited',
      purchaseState: "Purchase This Contact",
      purchaseColor: "white"
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
      this.props.getUserPoints();
      this.setState({
        currentLead: contact,
        contactView: 'access',
        comments: [],
        showNotes: false,

      })
    })
    .catch((err)=>{
      console.error(err);
    })
}

contactPurchase(event, contactId){

  console.log(event.target.innerHTML);
 

if (this.props.points > 0){

  
  const options = {
    method: 'POST',
  }
  this.props.auth.fetch(`/api/users/purchase_contact/${this.props.userId}/${contactId}`, options)
  .then((result)=>{
    console.log('i have just purchased this contact',result)
    this.props.getUserPoints();
    // document.getElementById('purclimitedhase-button').innerHTML = 'Contact Purchased';
    // document.getElementById('purchase-button').style.color = 'grey';
    // event.target.innerHTML = 'Contact Purchased';
    this.setState({
      purchaseState: "Contact Purchased",
      purchaseColor: 'grey'
    })
  })
  .catch((err)=>{
    console.log(err)
  })
} else {
  alert('You do not have enough points to complete this purchase. Please upload more contacts to obtain more points');
}

}

handleComment(event){
  event.preventDefault();
  const comment = {}
  comment.body = this.state.commentBodyText
  const options = {
    method: 'POST',
    body: JSON.stringify(comment)
  }
  this.props.auth.fetch(`/api/users/comments/${this.props.userId}/${this.state.currentLead.id}`, options)
    .then((comments) => {
      let revComments = comments.reverse();
      this.setState({
        commentBodyText: '',
        comments: revComments,
      })
    }).catch((err) => {
      console.log(err)
      this.setState({
        commentBodyText: '',
      })
    });
}
commentBody(comment){
  this.setState({ commentBodyText: comment })
}

renderContactList(){
  this.setState({renderContactList: true})
}


render(){
  if (this.state.renderContactList)
  {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs>
          <div className="left-top-display">
            <ButtonList
            selectView={this.selectView} 
            uploadedView={this.uploadedView} 
            purchasedView={this.purchasedView} 
            renderContactList={this.renderContactList}
            showModal={this.showModal}/>
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
            <LeadInfo currentLead={this.state.currentLead} contactView={this.state.contactView} 
            contactPurchase={this.contactPurchase} commentBody={this.commentBody} 
            handleComment={this.handleComment} comments={this.state.comments}
            commentBodyText={this.state.commentBodyText} purchaseState={this.state.purchaseState} 
            purchaseColor={this.state.purchaseColor} showNotes={this.state.showNotes}/>
          </Grid>
        </Grid>
      </div>
    );
  }
  else {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs>
            <div className="left-top-display">
              <ButtonList selectView={this.selectView} uploadedView={this.uploadedView} purchasedView={this.purchasedView} renderContactList={this.renderContactList} />
            </div>
          </Grid>
          <Grid item xs={9}>
            <div>
            </div>
            <LeadInfo currentLead={this.state.currentLead} contactView={this.state.contactView} contactPurchase={this.contactPurchase} />
          </Grid>
        </Grid>
      </div>
    );
  }
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