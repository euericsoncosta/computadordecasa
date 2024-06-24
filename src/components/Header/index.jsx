import React from "react";
import { Nav } from "./styled";

import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/Login">
        <FaUserAlt size={24} />
      </Link>
      <Link to="/sadas">
        <FaSignInAlt size={24} />
      </Link>
    </Nav>
  );
};

export default Header;
