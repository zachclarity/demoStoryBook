import { Button, FormLabel } from "@cmsgov/design-system";
import medicaidLogo from "../images/medicaidLogo.png";
import flagIcon from "../images/flagIcon.png";
function Header(props) {

  /**
   * Renders account related buttons based on whether the user is authenticated or not authenticated
   */
  function renderAccountButtons() {
   
    
    if (props.isAuthenticated) {
      return (
        <div className="nav-right">
          <FormLabel inversed>
            <Button onClick={() => props.logout } inversed>
              Logout
            </Button>
          </FormLabel>
        </div>
      );
    } else {
      return (
        <div className="nav-right">
          <Button onClick={() => console.log("sign in") } inversed>
            Login
          </Button>
        </div>
      );
    }
  }
      
 /**
   * Renders the USA bar
   */
  function renderUSABar() {
    return (
      <div className="usa-bar">
        <img src={flagIcon} alt="united states flag" />
                    An offical website of the United States government
      </div>
    )
  }

  /**
   * Renders a branding bar
   */
  function renderBrandBar() {
    return (
      <div className="brand-bar">
        <a href="https://www.medicaid.gov/">
          <img src={medicaidLogo} alt="Medicaid.gov-Keeping America Healthy" />
        </a>
      </div>
    )
  }

  /**
   * Renders a navigation bar
   */
  function renderNavBar({links}) {
    return (
      <div className="nav-bar">
        <div className="nav-left">
         {links}
        </div>
        {renderAccountButtons()}
      </div>
    )
  }
  
return (
    <div tabIndex="0">
      {renderUSABar()}
      {renderBrandBar()}
      {renderNavBar()}
    </div>
  );
}

export default Header;