import React from "react";
import { render } from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Bootstrap için
import  'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Popper from 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min';
//Header component import
import Header from './component/Header'
//View componentleri import ediyoruz
import HomeView from "./views/Home";
import HakkımızdaView from "./views/Hakkımızda"
import ÜcretlerView from "./views/Ücretler"
//Router için Routers Component

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomeView} />
      <Route path="/hakkımızda" exact component={HakkımızdaView}/>
      <Route path="/ucretler" exact component={ÜcretlerView}/>
    </Switch>
  );
};

//App Component
const App = () => {
  return (
    <div>
        <Header title="Akdeniz" />
      <Routes />
    </div>
  );
};
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
