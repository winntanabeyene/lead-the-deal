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
    <div>
      <div>
      <h3>{'DASHBOARD'}</h3>
      </div>
      <div onClick={()=>{uploadedView(); }}>
        <Button size="medium">
          Uploaded Contacts
        </Button>
      </div>
      <div>
        <Button size="medium" onClick={() => {purchasedView(); renderContactList()}}>
        Purchased Contacts
      </Button>
      </div>
      <div>
        <Button size="medium" onClick={() => { selectView('upload'); renderContactList() }}>
          Upload Contact
        </Button>
      </div>
      <div>
      <Button size="medium" onClick={()=>{selectView('search'); renderContactList()}}>
        Search for New Contacts
      </Button>
      </div>
    </div>
  )
}


export default ButtonList;