import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Page404 from "../src/components/page404/page404"
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import BibliothecaireRouter from './components/bibliothecaireRouter/bibliothecaireRouter';


function App() {
  return (
    <div className="app">

      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to={`bibliothecaire/gestionLivre`} />
          </Route>
          <Route path="/bibliothecaire">
            <BibliothecaireRouter />
          </Route>
          <Route path={`/`}>
            <Page404 />
          </Route>

        </Switch>
      </Router>
    </div>



  )
}

export default App;
