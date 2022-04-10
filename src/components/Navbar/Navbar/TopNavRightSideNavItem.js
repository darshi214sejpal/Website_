import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppContext from 'context/context';

const TopNavRightSideNavItem = () => {
  const {
    config: { isDark },
    setConfig
  } = useContext(AppContext);
  return (
    <Nav
      navbar
      className="navbar-nav-icons ms-auto flex-row align-items-center"
      as="ul"
    >
      <Nav.Item>
        <Nav.Link
          as={'div'}
          className="px-sm-2 px-1 theme-control-toggle"
          onClick={() => setConfig('isDark', !isDark)}
        >
            <div className="theme-control-toggle-label">
              <FontAwesomeIcon
                icon={isDark ? 'sun' : 'moon'}
                className="fs-0"
              />
            </div>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default TopNavRightSideNavItem;
