import React from 'react'
import Login from './components/auth/Login'
import NuevaCuenta from './components/auth/NuevaCuenta'
import Clientes from './components/clientes/Clientes'
import NuevoCliente from './components/clientes/NuevoCliente'
import Trabajos from './components/trabajos/Trabajos'

import ClienteState from './components/context/clientes/clienteState';
import TrabajoState from './components/context/trabajos/trabajoState';
import AlertaState from './components/context/alertas/alertaState';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <ClienteState>
      <TrabajoState>
        <AlertaState>
          <Router>
            <Switch>
              <Route exact path={'/'} component={Login} />
              <Route exact path={'/nueva-cuenta'} component={NuevaCuenta} />
              <Route exact path={'/clientes'} component={Clientes} />
              <Route exact path={'/nuevo-cliente'} component={NuevoCliente} />
              <Route exact path={'/cliente/trabajos'} component={Trabajos} />
            </Switch>
          </Router>
        </AlertaState>
      </TrabajoState>
    </ClienteState>
  );
}

export default App;
