import React from 'react';
import PropTypes from 'prop-types';


const ContactList = () => {
  const leads = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
      <div className="leads">
      <div className="lead-header lead-row">
        <div className="phrase-data">Name</div>
        <div className="phrase-data">Company</div>
      </div>
      {leads.map((lead) => {
        return <div className="lead-row" key={'lead.id'}>
          <div className="lead-data">{'lead.name'}</div>
          <div className="lead-data">{'lead.company'}</div>
        </div>
      })}
      </div>  
    </div>
  )
}

export default ContactList;