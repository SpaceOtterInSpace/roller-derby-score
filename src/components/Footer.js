import React from "react";

function Footer({ copyright }) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        &copy; {copyright}
      </a>
    </nav>
  );
}

export default Footer;
