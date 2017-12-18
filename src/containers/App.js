import React from 'react'
import Header from '../components/Header'
import { Route, Switch, Redirect } from 'react-router-dom'
import Navigation from '../components/Navigation'
import ListTodo from '../components/ListTodo'
import ListDoing from '../components/ListDoing'
import ListDone from '../components/ListDone'
import AllList from '../components/AllList'
import '../static/css/app.less'

class App extends React.Component{
  render(){
    return (
      <div>
        <Header/>
        <Navigation></Navigation>
        <Switch>
            <Route path="/app" exact component={AllList}/>
            <Route path="/app/todo" component={ListTodo}/>
            <Route path="/app/doing" component={ListDoing}/>
            <Route path="/app/done" component={ListDone}/>
            <Redirect to="/app" component={AllList}/>
        </Switch>
      </div>
    )
  }
}

export default App
