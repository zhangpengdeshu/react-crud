import React from 'react'
class Child extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
      text: props.text
    };
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({
      text: nextProps.text
    })
  }

  render () {
    return (
      <div>
        <p>{ this.state.text }</p>
        <button onClick={() => this.setState({text: '小红'})}>child change</button>
      </div>
    )
  }
}

export default Child
