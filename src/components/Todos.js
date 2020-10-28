import React, { Component } from 'react';
import Todoitem from './Todoitem'

class Todos extends Component {
   render() { 
      const {todos,complete,del} = this.props;
      return todos.map((todo) => (
         <Todoitem 
            todo = {todo} 
            complete = {complete}
            del = {del}
         />
      ));
   }
}

export default Todos;
