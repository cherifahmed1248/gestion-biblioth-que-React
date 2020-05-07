import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Page404 from "../src/components/page404/page404"
import Page403 from "../src/components/page403/page403"

import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import BibliothecaireRouter from './components/bibliothecaireRouter/bibliothecaireRouter';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import BibloRoute from './components/bibloRoute/bibloRoute';
import Home from "./components/home/home";
import Login from "./components/login/login";
import Signup from './components/signup/signuup';
import Banni from "./components/banni/banni";

import { AuthContext } from "./components/auth/auth";
import { AuthorisedContext } from "./components/authorised/authorised";
import { BibloContext } from "./components/biblio/biblio";


function App() {

  return (
    <div className="app">
      <AuthContext.Provider value={true}>
        <AuthorisedContext.Provider value={true}>
          <BibloContext.Provider value={true}>

            <Router>
              <Switch>
                <PrivateRoute path="/home" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/banni" component={Banni} />

                <Route exact path="/">
                  <Redirect to={`bibliothecaire/gestionLivre`} />
                </Route>
                <BibloRoute path="/bibliothecaire" component={BibliothecaireRouter} />
                {/* 
                <Route path="/bibliothecaire">
                  <BibliothecaireRouter />
                </Route>
 */}
                <Route path={`/404`}>
                  <Page404 />
                </Route>
                <Route path={`/403`}>
                  <Page403 />
                </Route>
                <Route path="/">
                  <Redirect to={`/404`} />
                </Route>
              </Switch>
            </Router>
          </BibloContext.Provider>
        </AuthorisedContext.Provider>
      </AuthContext.Provider>
    </div>



  )
}

export default App;
