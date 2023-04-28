import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/IvanPage">Ivan</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/NiamPage">Niam</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/AlecPage">Alec</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
