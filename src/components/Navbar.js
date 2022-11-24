import { mdiFerry, mdiCardAccountDetails } from "@mdi/js";
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
            <Link to="/">
              <Icon path={mdiFerry} size={1} />
            </Link>
          </div>
          {props.loginState ? (
            <div class="navbar-start has-background-info ml-5">
              <Link to="/user" class="navbar-item title is-6 has-text-white">
                <Icon path={mdiCardAccountDetails} size={1} class="mr-2" />
                {props.username}
              </Link>
            </div>
          ) : (
            ""
          )}
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

        <div class=" navbar-menu">
          <div class="navbar-start has-background-light"></div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                {props.loginState ? (
                  <>
                    <Link to="/user" class="mr-3">
                      <a class="button is-success">Dashboard</a>
                    </Link>
                    <Link to="/">
                      <a class="button is-danger">Log out</a>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/sign-up" class="mr-3">
                      <a class="button is-warning">Sign up</a>
                    </Link>
                    <Link to="/login">
                      <a class="button is-warning">Log in</a>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
