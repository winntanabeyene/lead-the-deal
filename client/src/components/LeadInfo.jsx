import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const Practice = ({currentLead}) => {
  console.log(currentLead)
    return (
      <div>
        <div>{currentLead.name}</div>
        <div>{currentLead.industry}</div>
        <div>{currentLead.role}</div>
        <div>{currentLead.phoneNumber}</div>
        <div>{currentLead.email}</div>
      </div>
    )
}

export default Practice;