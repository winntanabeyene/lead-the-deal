import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


const ContactList = ({uploaded, purchased, selectedView, selectContact, searchContact}) => {
  if (selectedView === 'uploaded'){
    return (
      <div>
        <div className="leads">
        <div className="lead-header lead-row">
          Name, Company
        </div>
        {uploaded.map((lead) => {
          return (
            <Button size="small" onClick={() => { selectContact('uploaded') }}>
              {lead.name}, {lead.company}
            </Button>
          )
        })}
        </div>  
      </div>
    )
  }
  else if (selectedView === 'purchased'){
    return (
      <div>
        <div className="leads">
          <div className="lead-header lead-row">
            Name, Company
        </div>
          {purchased.map((lead) => {
            return (
              <Button size="small" onClick={() => { selectContact('purchased') }}>
                {lead.name}, {lead.company}
              </Button>
            )
          })}
        </div>
      </div>
    )
  }
  else if (selectedView === 'search'){
    return (
      <div>
        <form onSubmit={()=>{searchContact(event)}}>
          <Input placeholder="Name" fullWidth={true}></Input>
          <Input placeholder="Industry" fullWidth={true}></Input>
          <Input placeholder="Company" fullWidth={true}></Input>
          <Input placeholder="City" fullWidth={true}></Input>
        <div>
            <Input type="submit" value="SEARCH"/>
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