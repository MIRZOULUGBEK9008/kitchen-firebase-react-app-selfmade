import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { neutral, primary } from "../utils/getButtonTypes";

function Login() {
  return (
    <div className="mx-auto flex h-full w-full max-w-sm items-center">
      <div className="flex w-full flex-col">
        <h2 className="mb-5 text-center text-2xl font-semibold">Login</h2>
        <form className="flex flex-col gap-5">
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
          <Button style={primary} text={"Login"} type={"submit"}>
            <span className="loading loading-dots"></span>
          </Button>
          <Button style={neutral} text={"Google"}>
            <span className="loading loading-dots"></span>
          </Button>
          <NavLink className="btn btn-secondary" to="/signup">
            I have no account yet
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Login;
