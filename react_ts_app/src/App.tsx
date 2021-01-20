import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Default from './screens/Default';

import './static/css/main.css';


class App extends React.Component{
  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path="/" component={Default} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
