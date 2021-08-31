import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import "./Menu.scss";


class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <NavLink exact activeClassName="active_class" className="menu_item" to="/" >Home</NavLink>
                <NavLink exact activeClassName="active_class" className="menu_item" to="/Customer">Customer </NavLink>
                <NavLink exact activeClassName="active_class" className="menu_item" to="/Order">Orders </NavLink>
                <NavLink exact activeClassName="active_class" className="menu_item" to="/About" >About Us </NavLink>
              
            </div>
        );
    }
}

export default Menu;