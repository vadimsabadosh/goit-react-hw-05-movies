import React, { Suspense } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './NavMenu.module.css';

function NavMenu() {
  const { pathname } = useLocation();

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <NavLink
              to="/"
              className={`${styles.link} ${pathname === '/' && styles.active}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              className={`${styles.link} ${pathname !== '/' && styles.active}`}
            >
              Movies
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <Container className={styles.main}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </div>
  );
}

export default NavMenu;
