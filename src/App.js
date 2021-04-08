import React from 'react';
import Login from './components/auth/Login';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Clientes from './components/clientes/Clientes';
import Trabajos from './components/trabajos/Trabajos';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ClienteState from './components/context/clientes/clienteState';
import TrabajoState from './components/context/trabajos/trabajoState';
import AlertaState from './components/context/alertas/alertaState';
import AuthState from './components/context/autenticacion/authState';
import tokenAuth from './config/tokenAuth';
import RutaPrivada from './components/rutas/RutaPrivada';



// revisar si tenemos un token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ClienteState>
      <TrabajoState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path={'/'} component={Login} />
                <Route exact path={'/nueva-cuenta'} component={NuevaCuenta} />
                <RutaPrivada exact path={'/clientes'} component={Clientes} />
                <RutaPrivada exact path={'/cliente/trabajos'} component={Trabajos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TrabajoState>
    </ClienteState>
  );
}

export default App;
