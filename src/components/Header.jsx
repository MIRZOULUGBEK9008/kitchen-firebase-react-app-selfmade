import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="my-container navbar bg-base-100">
        <div className="flex-1">
          <NavLink className="btn btn-ghost text-xl" to="/">
            Kitchen
          </NavLink>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <NavLink to="/create">Create recipe</NavLink>
              </li>
              <li>
                <a>Change theme</a>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
