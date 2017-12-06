import React from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import '../static/css/app.less'

class App extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <Navigation/>
        <h3>App</h3>
      </div>
    )
  }
}

export default App
