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
      <header className="navbar bg-base-100 shadow">
        <div className="my-container">
          <div className="flex-1">
            <div
              className="tooltip tooltip-bottom"
              data-tip="You can back to Home by clicking"
            >
              <NavLink className="btn btn-ghost text-xl" to="/">
                Kitchen app
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span>{user.displayName}</span>
            <div className="tooltip tooltip-bottom" data-tip="Settings">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar btn btn-circle btn-ghost"
                >
                  <div className="w-10 rounded-full">
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
