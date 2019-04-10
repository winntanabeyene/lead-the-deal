import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const Practice = ({currentLead}) => {
    return (
      <div>
        <div>{currentLead.name}</div>
        <div>{currentLead.company}</div>
        <div>{currentLead.position}</div>
        <div>{currentLead.phone}</div>
        <div>{currentLead.email}</div>
        <div>{currentLead.Address}</div>
      </div>
    )
}

export default Practice;