import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';


const ButtonList = ({selectView, uploadedView, purchasedView, renderContactList }) => {
  const styles = theme => ({
    margin: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });

  return (
    <div className="dashboard">
      <div>
      <h4>Dashboard</h4>
      </div>
      <div onClick={()=>{uploadedView(); }}>
        <Button size="medium">
          <span className="dash-text">Uploaded Contacts</span>
        </Button>
      </div>
      <div>
        <Button size="medium" onClick={() => {purchasedView(); renderContactList()}}>
          <span className="dash-text">Purchased Contacts</span>
      </Button>
      </div>
      <div>
        <Button size="medium" onClick={() => { selectView('upload'); renderContactList() }}>
          <span className="dash-text">Upload Contact</span>
        </Button>
      </div>
      <div>
      <Button size="medium" onClick={()=>{selectView('search'); renderContactList()}}>
          <span className="dash-text">Search Contacts</span>
      </Button>
      </div>
    </div>
  )
}


export default ButtonList;