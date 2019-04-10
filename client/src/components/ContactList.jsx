import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';

import FormView from './FormView.jsx'


const ContactList = ({uploaded, purchased, selectedView, selectContact, searchContact}) => {
  if (selectedView === 'uploaded'){
    return (
      <div>
        {/* <Paper> */}
        <div className="lead-header lead-row">
          Name, Company
        </div>
        {uploaded.map((contact) => {
          return (
            <div key={contact.id}>
            <Button size="small" onClick={() => { selectContact(contact.id, 'uploaded') }}>
              {contact.name}, {contact.company}
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
        <FormView selectedView={selectedView}/>
    )
  }
  else if (selectedView === 'search'){
    return (
      <FormView selectedView='search'/>
    )
  }
  else{
    return null
  }
}

export default ContactList;