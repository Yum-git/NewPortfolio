import React from "react";
import {Switch, Route} from 'react-router-dom';

// import Header from "./global/Header";

// 共通部分　Rotingボタン
import Roting from "./global/Roting";
import Footer from "./global/Footer";

// Roting枠
import Profile from "./routing/Profile";
import Skill from "./routing/Skill";
import Product from "./routing/Product";
import Career from "./routing/Career";
import Access from "./routing/Access";
import Login from "./routing/Login";

class Default extends React.Component{
    render() {
        return (
            <div id="app">
                <div className="roting">
                    <Roting />
                </div>
                <main>
                    <Switch>
                        <Route exact path="/" component={Profile} />
                        <Route path="/skill" component={Skill} />
                        <Route path="/product" component={Product} />
                        <Route path="/career" component={Career} />
                        <Route path="/access" component={Access} />
                        <Route path="/login" component={Login} />
                        <Route render={() => <p>not found!</p>} />
                    </Switch>
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}

export default Default;