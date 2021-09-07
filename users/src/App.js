import React from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import OneUser from './OneUser';


class Client extends React.Component{
  constructor(props){
    super(props)
    this.state ={users:[], page:1}
    this.createUser = this.createUser.bind(this)
    this.nextuser = this.nextuser.bind(this)
    this.backUser = this.backUser.bind(this)
  }

  createUser(e){
  
    axios.get(`http://localhost:3001/users/?page=${this.state.page}`)
    .then(res=>{
      if(res.status ===200){
        this.setState({users:res.data})
      }
      console.log(this.state.users)
    })
  }

  nextuser(e){
    const page = this.state.page + 1
    this.setState({page: page})
  
      return this.createUser()

  }

  backUser(e){
    const page = this.state.page - 1
    this.setState({page: page})
  
      return this.createUser()

  }



  render(){
    return(
      <div>
        
      <button onClick={this.createUser}>Create user </button>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>First Name</th>
      <th>phone</th>
      <th>website</th>
      <th>address</th>
    </tr>
  </thead>
  <tbody>
  {this.state.users.map(u=><tr>
    <td>
    <NavLink  className="active" to='/OneUser' > {u.name} </NavLink > 
    </td>
    <td>
      {u.phone}
    </td>
    <td>
      {u.website}
    </td>
    <td>
      <span><b>city:</b> </span>  {u.address.city}
      <br></br>
      <span><b> country:</b></span> {u.address.country}
    </td>
  </tr>)}
  
  </tbody>
</Table>
<button onClick={this.backUser}>Back</button>

<button onClick={this.nextuser}>Next</button>
<OneUser phone={this.state.users.map(u=> u.phone)}/>
      </div>
     
    )

    
  }
    
  
}



export default Client;
