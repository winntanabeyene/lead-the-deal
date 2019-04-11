import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const Practice = ({currentLead, contactView}) => {
  console.log(contactView)
  if (contactView === 'access'){
    return (
      <div>
        <div>{currentLead.name}</div>
        <div>{currentLead.company}</div>
        <div>{currentLead.position}</div>
        <div>{currentLead.industry}</div>
        <div>{currentLead.phone}</div>
        <div>{currentLead.email}</div>
        <div>{currentLead.Address}</div>
      </div>
    )
  }
    else {
      return (
        <div>
          <div>{currentLead.name}</div>
          <div>{currentLead.company}</div>
          <div>{currentLead.position}</div>
          <div>{currentLead.industry}</div>
        </div>
      )

    }
}

export default Practice;