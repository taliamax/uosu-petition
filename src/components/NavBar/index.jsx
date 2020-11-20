import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import { Button } from "@material-ui/core";
import PropTypes from 'prop-types';

//TODO Web Template Studio: Add a new link in the NavBar for your page here.
// A skip link is included as an accessibility best practice. For more information visit https://www.w3.org/WAI/WCAG21/Techniques/general/G1.
const ButtonLink = ({ to, className, children }) => {
  return (
  <Button
    size="large"
    to={to}
    className={`text-capitalize font-weight-normal nav-item nav-link active${className}`}
    component={Link}
  >
    {children}
  </Button>
  );
}

ButtonLink.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
}

const NavBar = () => {

  return (
    <React.Fragment>
      <div className={styles.skipLink}>
        <a href="#mainContent">Skip to Main Content</a>
      </div>
      <nav className="navbar navbar-expand-sm navbar-light border-bottom justify-content-between">
        <ButtonLink className="navbar-brand" to="/">
        Accueil / Home
        </ButtonLink>
        <div className="navbar-nav">
          <ButtonLink to="Petition">
            Petition
          </ButtonLink>
          <ButtonLink to="Privacy">
            Vie privée / Privacy
          </ButtonLink>
          <ButtonLink to="Student_Voices">
            Voix des Étudiants / Student voices
          </ButtonLink>
          <ButtonLink to="Submit_Testimonial">
            Ajoutez votre voix / Add your voice
          </ButtonLink>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default NavBar;
