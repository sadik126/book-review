import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "btn btn-outline btn-success"
                      : isPending
                      ? "pending"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "btn btn-outline btn-success"
                      : isPending
                      ? "pending"
                      : ""
                  }
                  to="/listedbooks"
                >
                  Listed Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "btn btn-outline btn-success"
                      : isPending
                      ? "pending"
                      : ""
                  }
                  to="/pagesread"
                >
                  Pages to read
                </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost sm:text-xl md:text-3xl font-extrabold">
            Book Vibe
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "btn btn-outline btn-success"
                    : isPending
                    ? "pending"
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "btn btn-outline btn-success"
                    : isPending
                    ? "pending"
                    : ""
                }
                to="/listedbooks"
              >
                Listed books
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive
                    ? "btn btn-outline btn-success"
                    : isPending
                    ? "pending"
                    : ""
                }
                to="/pagesread"
              >
                Pages to Read
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5">
          <a className="btn btn-info">Login</a>
          <a className="btn btn-success">Sign up</a>
        </div>
      </div>
    </>
  );
};

export default Header;
