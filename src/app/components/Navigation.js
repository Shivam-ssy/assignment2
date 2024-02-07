import React from "react";
import Logo from "./Logo.js";

import {
  RiSearchLine,
  RiCompassFill,
  RiBookmarkFill,
  RiNotification4Fill,
  RiShoppingCart2Fill,
} from "@remixicon/react";
function Navigation() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid d-flex justify-content-between">
            <a className="navbar-brand" href="#">
              <Logo />
            </a>
            <div className="d-flex logotext w align-items-center gap-2 flex-row-reverse">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

             
              <div className="d-flex  gap-3 align-items-center">
                <div className="d-md-flex d-none gap-1 align-items-center">
                  <RiCompassFill color="#8064A2" />
                  Exolore
                </div>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary d-md-block d-none dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Hobbies
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-md-flex d-none">
                  <RiBookmarkFill color="#8064A2" />
                </div>
                <div className="d-md-flex d-none">
                  <RiNotification4Fill color="#8064A2" className="logotext" />
                </div>
                <div className="d-md-flex d-none">
                  <RiShoppingCart2Fill color="#8064A2" />
                </div>
                <div className="text-purple d-md-inline-block d-none  border border-purple px-4 py-2 rounded">
                  Sign in
                </div>
              </div>
              <form className="mt-3 pe-md-5">
                <div className="input-group mb-3">
                  <input
                    type="search"
                    className="form-control d-md-inline-block d-none"
                    aria-label="Search"
                    aria-describedby="Search"
                    placeholder="Search items"
                  />
                  <span
                    className="input-group-text d-md-inline-block d-none bg-purple  "
                    id="Search"
                  >
                    {" "}
                    <RiSearchLine />
                  </span>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navigation;
