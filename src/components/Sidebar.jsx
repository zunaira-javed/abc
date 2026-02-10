import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-inner">
        <ul className="menu-list">

          <li><Link to="/">All</Link></li>
          <li><Link to="/category/new-arrival">New Arrivals</Link></li>

          {/* Winter Collection Categories */}
          <li><Link to="/winter">Khaddar</Link></li>
          <li><Link to="/embroidered">Embroidered</Link></li>
          <li><Link to="/printed">Printed</Link></li>
          <li><Link to="/velvet">Velvet</Link></li>

          {/* Ready to Wear Categories */}
          <li><Link to="/ready-to-wear/solids">Solids</Link></li>
          <li><Link to="/ready-to-wear/coat-set">Co-Ords</Link></li>
          <li><Link to="/ready-to-wear/formals">Formals</Link></li>
          <li><Link to="/ready-to-wear/kurtis">Kurtis</Link></li>
          <li><Link to="/ready-to-wear/bottoms">Bottoms</Link></li>

          {/* Collections */}
          <li><Link to="/collection/embroidered-velvet">Embroidered Velvet</Link></li>
          <li><Link to="/collection/silk">Silk</Link></li>
          <li><Link to="/collection/western-wear">Western Wear</Link></li>

          {/* Jewellery */}
          <li><Link to="/jewellery/rings">Rings</Link></li>
          <li><Link to="/jewellery/earrings">Ear Rings</Link></li>
          <li><Link to="/jewellery/bracelets">Bracelets</Link></li>
          <li><Link to="/jewellery/chains">Chains</Link></li>

          {/* Other */}
          <li><Link to="/footwear">Footwear</Link></li>
          <li><Link to="/shawls">Shawls</Link></li>

          <li className="auth">
            <Link to="/login">Sign In / Register</Link>
          </li>

        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
