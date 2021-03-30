import React from 'react'
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Clientes from './components/clientes/Clientes'
import NuevoCliente from './components/clientes/NuevoCliente'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/nueva-cuenta'} component={NuevaCuenta} />
        <Route exact path={'/clientes'} component={Clientes} />
        <Route exact path={'/nuevo-cliente'} component={NuevoCliente} />
      </Switch>
    </Router>
  );
}

export default App;
