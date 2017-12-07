import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter,Route,Switch, Redirect } from 'react-router-dom'
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker';
import Login from './containers/login'
import Register from './containers/register'
import App from './containers/App'
import './static/css/main.less'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
       <div>
         <Switch>
           <Route exact component={App}/>
           <Route path="/login" component={Login}/>
           <Route path="/register" component={Register}/>
           <Redirect to='/app' component={App}/>
         </Switch>
       </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
