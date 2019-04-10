import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';


class FormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      uploadName: '' ,
      uploadCompany: '',
      uploadIndustry: '',
      uploadPosition: '',
      uploadPhone: '',
      uploadEmail: '',
      uploadAddress: '',
      searchName: 'hello',
      searchCompany: '',
      searchIndustry: '',
      searchPosition: '',
      searchAddress: '',
    };
    this.query = {};
    this.upload = {};

  }

  handleSearch(event) {
    event.preventDefault();
    console.log(this.query)
  }
  handleUpload(){
    event.preventDefault();
    console.log(this.upload)
  }

  // SEARCH FORM FUNCTIONS BELOW ------------------------------------------------------------ 
  searchName(name){
    console.log(name, this.query)
    this.query.name = name;
  }
  searchCompany(company){
    this.query.company = company;
  }
  searchIndustry(industry){
    this.query.industry = industry;
  }
  searchPosition(position){
    this.query.position = position;
  }
  searchAddress(address){
    this.query.address = address
  }


  // THE FUNCTIONS FOR GRABBING DATA FROM THE UPLOAD FORM BELOW -----------------------------
  uploadName(name){
    this.upload.name = name;
  }
  uploadCompany(company){
    this.upload.company = company;
  }
  uploadIndustry(industry){
    this.upload.industry = industry
  }
  uploadPosition(position){
    this.upload.position = position;
  }
  uploadPhone(phone){
    this.upload.phone = phone
  }
  uploadEmail(email){
    this.upload.email = email;
  }
  uploadAddress(address){
    this.upload.address = address
  }
  //UPLOAD FORM FUNCTIONS ABOVE -------------------------------------------

  render() {
    if (this.props.selectedView === 'upload'){
      return (
        <div>
          <form onSubmit={()=>{this.handleUpload(event)}}>
            <Input placeholder="First & Last Name" fullWidth={true} required={true} onChange={(event)=>{this.uploadName(event.target.value)}}></Input>
            <Input placeholder="Company" fullWidth={true} required={true} onChange={(event)=>{this.uploadCompany(event.target.value)}}></Input>
            <Input placeholder="Industry" fullWidth={true} required={true} onChange={(event)=>{this.uploadIndustry(event.target.value)}}></Input>
            <Input placeholder="Position" fullWidth={true} required={true} onChange={(event)=>{this.uploadPosition(event.target.value)}}></Input>
            <Input placeholder="Phone Number" fullWidth={true} required={true} onChange={(event)=>{this.uploadPhone(event.target.value)}}></Input>
            <Input placeholder="Email" fullWidth={true} required={true} onChange={(event)=>{this.uploadEmail(event.target.value)}}></Input>
            <Input placeholder="Address" fullWidth={true} required={true} onChange={(event)=>{this.uploadAddress(event.target.value)}}></Input>
            <div>
              <Input type="submit" value="Upload" />
            </div>
          </form>
        </div>
      );
    }
    else {
      return (
        <div>
          <form onSubmit={()=>{this.handleSearch(event)}}>
            <Input placeholder="Name" fullWidth={true} onChange={(event)=>{this.searchName(event.target.value)}}></Input>
            <Input placeholder="Company" fullWidth={true} onChange={(event)=>{this.searchCompany(event.target.value)}}></Input>
            <Input placeholder="Industry" fullWidth={true} onChange={(event)=>{this.searchIndustry(event.target.value)}}></Input>
            <Input placeholder="Position" fullWidth={true} onChange={(event)=>{this.searchPosition(event.target.value)}}></Input>
            <Input placeholder="Address" fullWidth={true} onChange={(event)=>{this.searchAddress(event.target.value)}}></Input>
            <div>
              <Input type="submit" value="Search" />
            </div>
          </form>
        </div>
      );
    }
  }
}


// return (
//   <div className="search-bar form-inline" onSubmit={() => handleSearch(event)}>
//     <input className="form-control" id='searchForm' type="text" onSubmit={() => handleSearch(event)} onChange={(event) => handleQuery((event.target.value))} />
//     <button className="btn hidden-sm-down" onClick={() => onClick((document.getElementById('searchForm').value))}>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// )

export default FormView;