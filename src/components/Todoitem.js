import React, { Component } from 'react'
import './../App.css'
class Todoitem extends Component {

   style = () =>{
      return {
         padding : '10px',
         margin : '10px',
         color : 'white',
         boxShadow: 'rgba(255, 255, 255, 0.76) 0px 0px 5px 0px',
         border : '1px black dotted',
         borderRadius : '10px',
         textDecoration : this.props.todo.iscompleted ? 'line-through' : 'none',
         backgroundColor : this.props.todo.iscompleted? '#5cb85c':'#5bc0de'
      }
   }
   btn_style = () => {
      return {
         float : 'right',
         marginRight : '10px',
         backgroundColor : '#d9534f',
         border : 'none',
         borderRadius : '50%',
         color : 'white',
         cursor : 'pointer',
         padding : '5px'
      }
   }
   render() {
      const {todo, complete, del} = this.props;
      const {title, id} = todo;
      return (
         <p style={this.style()}>
            <input type="checkbox" onChange = {complete.bind(this,id)}/> {' '}
            {title}
            <button style = {this.btn_style()} onClick = {del.bind(this,id)}>X</button>
         </p>
      )
   }
}

export default Todoitem
