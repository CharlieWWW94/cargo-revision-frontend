import { mdiFerry } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav
        class="navbar has-background-dark"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io"></a>
          <div class="navbar-item">
            <Icon path={mdiFerry} size={1} />
          </div>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start"></div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link to="/sign-up" class="mr-3">
                  <a class="button is-warning">Sign up</a>
                </Link>
                <Link to="/login">
                  <a class="button is-warning">Log in</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
