import React from 'react';
import Client from './App'; 

class OneUser extends React.Component{
    constructor(props){
        super(props)
      
    }
render(){
    return(
        <div>

            {this.props.phone}
        </div>


    )
}
}

export default OneUser