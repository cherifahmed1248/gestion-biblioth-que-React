import React, { useState } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Button } from 'antd';
import BibliothecaireRouter from './components/bibliothecaireRouter/bibliothecaireRouter';
import AdhérentsMiddleware from './components/middleware/adhérentsMiddleware/adhérentsMiddleware';
import BibliothecaireMiddleware from './components/middleware/bibliothecaireMiddleware/bibliothecaireMiddleware';
import AuthenticationMiddleware from './components/middleware/authenticationMiddleware/authenticationMiddleware';

import Home from "./components/home/home";
import Login from "./components/login/login";
import Signup from './components/signup/signuup';
import Banni from "./components/banni/banni";
import Page404 from "../src/components/page404/page404"
import Page403 from "../src/components/page403/page403"
import { AuthContext } from "./components/useContext/auth/auth";
import { BannedContext } from "./components/useContext/banned/banned";
import { EtatContext } from "./components/useContext/etat/etat";

import { BibloContext } from "./components/useContext/biblio/biblio";
import { getAdherentById, getUser } from "./services/adherents.service"
import State from './components/state/state';


function App() {
  if (localStorage.getItem('user') === null) {
    localStorage.setItem('user', "fasle");
  }
  let authe
  localStorage.getItem('user') === "false" ?
    authe = JSON.parse(localStorage.getItem('user'))
    :
    authe = localStorage.getItem('user')
  const [auth, setAuth] = useState(authe)
  const [etat, setEtat] = useState(!(getAdherentById(authe).etat === "false" || getAdherentById(authe).etat === false))
  const [banni, setBanni] = useState(!(getAdherentById(authe).banni === "false" || getAdherentById(authe).banni === false))
  const [biblo, setBiblo] = useState((!(getAdherentById(authe).biblo === "false" || getAdherentById(authe).biblo === false)))


  const login = () => {
    let authentication
    localStorage.getItem('user') === "false" ?
      authentication = JSON.parse(localStorage.getItem('user'))
      :
      authentication = localStorage.getItem('user')
    setAuth(authentication)
    console.log('App=authentication: ', authentication);
    setEtat(!(getAdherentById(authentication).etat === "false" || getAdherentById(authentication).etat === false))
    setBanni(!(getAdherentById(authentication).banni === "false" || getAdherentById(authentication).banni === false))
    setBiblo(!(getAdherentById(authentication).biblo === "false" || getAdherentById(authentication).biblo === false))
    console.log('getUser(): ', getUser());
    return authentication
  };
  const logout = () => {

    localStorage.setItem('user', false);
    console.log(" localStorage.getItem('user'): ", localStorage.getItem('user'));
    setAuth(false)
    setEtat(false)
    setBanni(false)
    setBiblo(false)

  }

  return (
    <div className="app">
      {/* 
      <h1> auth={String(auth)}</h1>
      <h1>etat={String(etat)}</h1>
      <h1>banni={String(banni)}</h1>
      <h1>biblo={String(biblo)}</h1>

      <Button
        onClick={() => logout()}
        type="primary"
        style={{
          margin: 16,
          float: "right"
        }}
      >
        Logout
            </Button> */}
      <AuthContext.Provider value={auth}>
        <EtatContext.Provider value={etat}>
          <BannedContext.Provider value={banni}>
            <BibloContext.Provider value={biblo}>

              <Router>
                <Switch>
                  <AuthenticationMiddleware
                    path='/login'
                    component={() => <Login logintest={login} />}
                  />
                  <AuthenticationMiddleware
                    path='/signup'
                    component={() => <Signup login={login} />}
                  />
                  <BibliothecaireMiddleware path="/bibliothecaire" component={() => <BibliothecaireRouter logout={logout} />} />
                  <AdhérentsMiddleware path="/home" component={Home} />
                  <Route exact path="/banni" component={() => <Banni logout={logout} />} />
                  <Route exact path="/state" component={() => <State logout={logout} />} />
                  <Route exact path="/">
                    <Redirect to={`/home`} />
                  </Route>
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
          </BannedContext.Provider>
        </EtatContext.Provider>
      </AuthContext.Provider>
    </div>



  )
}

export default App;
