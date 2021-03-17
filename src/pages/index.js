import React from 'react'
import Loadable from 'react-loadable'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const loading = () => <p>Loading...</p>

const HomePage = Loadable({
  loading,
  loader: () => import('./home'),
})

const Pages = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default Pages
