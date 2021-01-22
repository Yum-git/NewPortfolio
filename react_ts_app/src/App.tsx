import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Default from './screens/Default';

import './static/css/main.css';

import ScrollToTop from "./ts-script/ScrollToTop";
class App extends React.Component{
  render() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop>
                <Switch>
                    <Route path="/" component={Default} />
                </Switch>
            </ScrollToTop>
        </BrowserRouter>
    );
  }
}

export default App;
