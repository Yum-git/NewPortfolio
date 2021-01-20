import React from "react";
import { Link } from "react-router-dom";

class Roting extends React.Component {
    render() {
        return (
            <>
                <nav className="nav-main">
                    <ul className="nav-tables-left">
                        Yum's PortFolio
                    </ul>
                    <ul className="nav-tables">
                        <Link to="/">
                            <li className="button-style">
                                Profile
                            </li>
                        </Link>
                        <Link to="/skill">
                            <li className="button-style">
                                Skill
                            </li>
                        </Link>
                        <Link to="/product">
                            <li className="button-style">
                                Product
                            </li>
                        </Link>
                        <Link to="/career">
                            <li className="button-style">
                                Career
                            </li>
                        </Link>
                        <Link to="/access">
                            <li className="button-style">
                                Access
                            </li>
                        </Link>
                        {/*
                        <Link to="/login">
                            <li className="button-style">
                                Login
                            </li>
                        </Link>
                        */}
                    </ul>
                </nav>
            </>
        );
    }
}

export default Roting;