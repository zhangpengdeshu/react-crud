import React from 'react'
import Child from './child'
class Parent extends React.Component {
  state = {
    name: '小胖'
  }
  render () {
    return (
      <div>
        <Child text={this.state.name}/>
        <button onClick = { () => this.setState({ name: "霞咪" }) }>change</button>
      </div>
    )
  }
}

export default Parent
