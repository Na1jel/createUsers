import React from 'react';
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';



class Client extends React.Component{
  constructor(props){
    super(props)
    this.state ={users:[], page:1, sort:[], search:[]}
    this.createUser = this.createUser.bind(this)
    this.nextuser = this.nextuser.bind(this)
    this.backUser = this.backUser.bind(this)
    this.sort = this.sort.bind(this)
    this.poisk = this.poisk.bind(this)
  }

  createUser(e){
  
    axios.get(`http://localhost:3001/users/?page=${this.state.page}`)
    .then(res=>{
      if(res.status ===200){
        this.setState({users:res.data})
      }
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

  sort(e){
    const tag = e.target.tagName
    let sort = this.state.users
    console.log(tag)
   if(tag ){
    sort.reverse()
   }else{
    sort.sort((a1, b1)=>{
      if(a1.name < b1.name){
        return -1
      }
      if(a1.name > b1.name){
        return 1
      }
      return 0
    })
    
   }
   this.setState({users:sort})
  }

  poisk(e){
    let search = this.state.users.map(u=> u.name);
    let a = search.join()
    let p = a.includes(e.target.value)
    if(p){
      search.filter(n=>n)
    }
    this.setState({search:search})
    console.log(p)
  }

  render(){
    return(
      <div className="container">
        
      <button onClick={this.createUser}>Create user </button>
        <br></br>
        <br></br>
      <input type='text' onChange={this.poisk} ></input>
      <br></br>
        <br></br>
      <Table striped bordered hover>
  <thead>
    <tr onClick={this.sort}>
      <th>First Name</th>
      <th>phone</th>
      <th>website</th>
      <th>address</th>
    </tr>
  </thead>
  <tbody>
  {this.state.users.map(u=><tr key={u.name}>
    <td>
    {u.name} 
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

      </div>
     
    )

    
  }
    
  
}



export default Client;
