import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";

function Header() {
  const { user } = useGlobalContext();
  function logout() {
    signOut(auth)
      .then(() => toast.success("Signout succesfully :)"))
      .catch(({ message }) => {
        toast.error(message);
      });
  }
  return (
    <>
      <header className="navbar bg-base-100 shadow max-[400px]:text-sm">
        <div className="my-container">
          <div className="flex-1">
            <div
              className="tooltip tooltip-bottom"
              data-tip="You can back to Home by clicking"
            >
              <NavLink
                className="btn btn-ghost text-xl max-[400px]:text-sm"
                to="/"
              >
                Kitchen app
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-2 max-[400px]:gap-1">
            <span className="line-clamp-1 w-32">{user.displayName}</span>
            <div className="tooltip tooltip-bottom" data-tip="Settings">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar btn btn-circle  btn-ghost max-[400px]:btn-sm"
                >
                  <div className="w-10 rounded-full max-[400px]:w-6">
                    <img alt="Avatar" src={user.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
                >
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/create">Create recipe</NavLink>
                  </li>
                  <li>
                    <NavLink to="/change-theme">Change theme</NavLink>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
