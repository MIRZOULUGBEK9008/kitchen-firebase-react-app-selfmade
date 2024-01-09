import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { primary } from "../utils/getButtonTypes";
import { useLogin } from "../hooks/useLogin";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { getFormData } from "../utils/getFormData";

function Signup() {
  const { isPending } = useGlobalContext();
  const { loginWithGoogleProvider, loginWithDisplayNameAndEmailAndPassword } =
    useLogin();
  function handleClick() {
    loginWithGoogleProvider();
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    loginWithDisplayNameAndEmailAndPassword(data);
  }
  return (
    <div className="mx-auto flex h-full w-full max-w-sm items-center">
      <div className="flex w-full flex-col">
        <h2 className="mb-5 text-center text-2xl font-semibold">Signup</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <label>
            <span className="mb-2 font-semibold">User name:</span>
            <input
              className="input input-bordered input-primary w-full"
              type="text"
              name="displayName"
              placeholder="User name"
              required
            />
          </label>
          <label>
            <span className="mb-2 font-semibold">Photo URL:</span>
            <input
              className="input input-bordered input-primary w-full"
              type="url"
              name="photoURL"
              placeholder="Photo URL"
              required
            />
          </label>
          <label>
            <span className="mb-2 font-semibold">Email:</span>
            <input
              className="input input-bordered input-primary w-full"
              type="email"
              name="email"
              placeholder="example@email.com"
              required
            />
          </label>
          <label>
            <span className="mb-2 font-semibold">Password:</span>
            <input
              className="input input-bordered input-primary w-full"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </label>
          <Button style={primary} text={"Signup"} type={"submit"}>
            <span className="loading loading-dots"></span>
          </Button>
          <button
            className="btn btn-neutral"
            disabled={isPending ? true : false}
            onClick={handleClick}
          >
            {isPending ? (
              <span className="loading loading-dots"></span>
            ) : (
              "Google"
            )}
          </button>
          <NavLink className="btn btn-secondary" to="/login">
            I have an account
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Signup;
