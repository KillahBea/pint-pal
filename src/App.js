import React, { Component } from 'react'
import Home from './Pages/Home'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact />
          <Header />
          <Switch>
            <Home />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
