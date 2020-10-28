import React, { Component } from 'react'
import './../App.css'
class Addtodo extends Component {

   state = {
      title : ''
   }   
   submit = (e) => {
      e.preventDefault();
      if(this.state.title) this.props.addtodo(this.state.title);
      this.setState({title : ''});
   }
   change = (e) => this.setState( {
         [e.target.name] : e.target.value 
      }
   )
   render() {
      return (
        <form onSubmit={this.submit} className="form-control">
           <input  
               type="text" 
               name="title"
               placeholder="  Add Todo..." 
               value={this.state.title} 
               onChange = {this.change}
               className="text-input"
            />
            <input 
               type="submit" 
               value="+" 
               className="submit-btn"
            />
        </form> 
      )
   }
}
export default Addtodo
