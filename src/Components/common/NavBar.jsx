/**@format */

import Searchbox from "./Searchbox";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">Extreme Weather Tracker</a>
          <form className="d-flex">
            <Searchbox
              className="form-control me-2"
              type="search"
              aria-label="Search"
              highlightFirstSuggestion={true}
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
