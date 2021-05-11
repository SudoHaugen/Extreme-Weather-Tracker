/**@format */

import Searchbox from "./Searchbox";
import "../../static_resources/main/main.css";

const NavBar = ({ setCenterLocation }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Extreme Weather Tracker</a>
          <form className="d-inline-flex">
            <Searchbox
              aria-label="Search"
              highlight={true}
              setCenterLocation={setCenterLocation}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
