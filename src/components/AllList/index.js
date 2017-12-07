import React from 'react'
import ListTodo from '../ListTodo'
import ListDoing from '../ListDoing'
import ListDone from '../ListDone'
class AllList extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }
  render () {
    return (
      <div>
          <ListTodo/>
          <ListDoing/>
          <ListDone/>
      </div>
    )
  }
}

export default AllList
