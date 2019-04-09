import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import DashboardHeader from './components/DashboardHeader.jsx';
import DashBody from './components/DashBody.jsx';


class App extends React.Component {


  constructor(props){
    super(props)
  }

componentDidMount(){
  
}

  render(){
    return(
      <div>
        <DashboardHeader/>
        <DashBody/>
        
      </div>
    )
  }


}

ReactDOM.render(<App />, document.getElementById('root'));