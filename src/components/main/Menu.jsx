import React from "react";
import { Link } from "gatsby";
import "../../css/menu.scss";
const Menu = () => {

    return (
        <menu>
            <div className="logo">Christina Gorton</div>
            <nav>
                <ul>
                    <li><Link to ="/about">About</Link></li>
                    <li><Link to ="/work">Work</Link></li>
                    <li><Link to ="/thoughts">Thoughts</Link></li>
                </ul>
            </nav>
        </menu>
    )
}
export default Menu;