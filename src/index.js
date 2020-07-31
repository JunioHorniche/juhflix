import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { 
  BrowserRouter,
  Switch,
  Route
 } from 'react-router-dom';
import Home from './pages/Home';
import CasdastroVideo from './pages/cadastro/Video'
import CasdastroCategoria from './pages/cadastro/Categoria';
import Pagina404 from './pages/Pagina404'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CasdastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CasdastroCategoria} exact/>
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);