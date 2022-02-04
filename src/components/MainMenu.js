import React from "react";
import { Link, Outlet } from "react-router-dom";



function MainMenu() {

    return (<div>
        <header className="navBar">
            <Link to="/">Home</Link>
            <Link to="/departments">Deparnments</Link>
            <Link to="/employees">Employees</Link>
        </header>
        <Outlet />
        <footer>Test exercise</footer>
  </div>)
}

export default MainMenu;
