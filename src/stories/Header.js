import React from 'react';
import PropTypes from 'prop-types';
import '../index.scss';
import { Button, FormLabel } from "@cmsgov/design-system";
import medicaidLogo from "../images/medicaidLogo.png";
import flagIcon from "../images/flagIcon.png";
import { Navbar } from 'react-bootstrap';

export const Header = ({ email, onLogin, onLogout }) => (
  <header>
    <div>
      <div className="usa-bar">
        <img src={flagIcon} alt="united states flag" />
                    An offical website of the United States government
    </div>
      <div className="brand-bar">
        <a href="https://www.medicaid.gov/">
          <img src={medicaidLogo} alt="Medicaid.gov-Keeping America Healthy" />
        </a>
      </div>
      <div>
        {email ? (
          <div className="nav-right">
          <FormLabel inversed>
            <Button onClick={() => { alert("Logout"); onLogout }  } inversed>
              Logout
            </Button>
          </FormLabel>
        </div>
        ) : (
            <>
              <div className="nav-right">
          <Button onClick={() => { alert("Sign In"); onLogin } } inversed>
            Login
          </Button>
        </div>
            </>
          )}
      </div>
    </div>
    {Navbar}
  </header>
);

Header.propTypes = {
  email: PropTypes.shape({}),
  links: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
};

Header.defaultProps = {
  email: null
};
