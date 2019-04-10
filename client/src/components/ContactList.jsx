import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';


const ContactList = ({uploaded, purchased, selectedView, selectContact, searchContact}) => {
  if (selectedView === 'uploaded'){
    return (
      <div>
        {/* <Paper> */}
        <div className="lead-header lead-row">
          Name, Company
        </div>
        {uploaded.map((lead) => {
          return (
            <div>
            <Button size="small" onClick={() => { selectContact('uploaded') }}>
              {lead.name}, {lead.company}
            </Button>
            </div>
          )
        })}
        {/* </Paper> */}
      </div>
    )
  }
  else if (selectedView === 'purchased'){
    return (
      <div>
        {/* <Paper> */}
          <div className="lead-header lead-row">
            Name, Company
        </div>
          {purchased.map((contact) => {
            return (
              <div key={contact.id}>
              <Button size="small" onClick={() => { selectContact(contact.id, 'purchased')}}>
                {contact.name}, {contact.company}
              </Button>
              </div>
            )
          })}
        {/* </Paper> */}
      </div>
    )
  }
  else if (selectedView === 'upload') {
    return (
      <div>
        <form onSubmit={() => { searchContact(event) }}>
          <Input placeholder="First & Last Name" fullWidth={true} required={true}></Input>
          <Input placeholder="Company" fullWidth={true} required={true}></Input>
          <Input placeholder="Industry" fullWidth={true} required={true}></Input>
          <Input placeholder="Poisition" fullWidth={true} required={true}></Input>
          <Input placeholder="Phone Number" fullWidth={true} required={true}></Input>
          <Input placeholder="Email" fullWidth={true} required={true}></Input>
          <Input placeholder="Address" fullWidth={true} required={true}></Input>
          <div>
            <Input type="submit" value="Upload"/>
          </div>
        </form>
      </div>
    )
  }
  else if (selectedView === 'search'){
    return (
      <div>
        <form onSubmit={()=>{searchContact(event)}}>
          <Input placeholder="Name" fullWidth={true}></Input>
          <Input placeholder="Company" fullWidth={true}></Input>
          <Input placeholder="Industry" fullWidth={true}></Input>
          <Input placeholder="Position" fullWidth={true}></Input>
          <Input placeholder="Address" fullWidth={true}></Input>
        <div>
            <Input type="submit" value="Search" onChange={searchContact(event)}/>
        </div>
        </form>
      </div>
    )
  }
  else{
    return null
  }
}

export default ContactList;