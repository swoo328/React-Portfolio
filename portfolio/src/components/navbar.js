import React from 'react';

function header() {
    return (
     <nav>
        <div>
            <h1>Steven Woo</h1>
        </div>
        <ul className="navlinks">
          <li className = "link"><a href='#'>HOME</a></li>
          <li className = "link"><a href='#'>ABOUT</a></li>
          <li className = "link"><a href='#'>PORTFOLIO</a></li>
          <li className = "link"><a href='#'>CONTACT</a></li>
        </ul>
     </nav>
    )
}

export default header;