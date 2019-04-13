import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const Practice = ({currentLead, contactView, contactPurchase}) => {
  if (contactView === 'access'){
    return (
      <div>
        WTF WTF WTF
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
    else if (contactView === 'limited') {
      return (
        <div>
          <div>{currentLead.name}</div>
          <div>{currentLead.company}</div>
          <div>{currentLead.position}</div>
          <div>{currentLead.industry}</div>
          <div>
          <Button size="small" variant="contained" onClick={()=>contactPurchase(currentLead.id)}>
            Purchase This Contact
          </Button>
          </div>
        </div>
      )

    }
    else{
      return (
        <div></div>
      )
    }
}

export default Practice;