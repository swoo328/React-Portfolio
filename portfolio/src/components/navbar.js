import React from 'react';
import { Link } from "react-router-dom";

function header() {
    return (
     <nav>
        <div>
            <h1>Steven Woo</h1>
        </div>
        <ul className="navlinks">
          <li><Link to = {"/home"}>HOME</Link></li>
          <li><Link to = {"/about"}>ABOUT</Link></li>
          <li><Link to = {"/portfolio"}>PORTFOLIO</Link></li>
          <li><Link to = {"/contact"}>CONTACT</Link></li>
        </ul>
     </nav>
    )
}

export default header;