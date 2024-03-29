import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import { primary } from "../utils/getButtonTypes";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useLogin } from "../hooks/useLogin";
import { getFormData } from "../utils/getFormData";

function Login() {
  const { isPending } = useGlobalContext();
  const { loginWithGoogleProvider, loginWithEmailAndPassword } = useLogin();
  function handleClick() {
    loginWithGoogleProvider();
  }
  function handleSubmit(e) {
    e.preventDefault();
    const data = getFormData(e.target);
    loginWithEmailAndPassword(data);
  }
  return (
    <div className="my-container flex h-full max-w-sm items-center py-10">
      <div className="flex w-full flex-col">
        <h2 className="mb-5 text-center text-2xl font-semibold">Login</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
          <Button style={primary} text={"Login"} type={"submit"}></Button>
          <button
            className="btn btn-neutral"
            disabled={isPending}
            onClick={handleClick}
          >
            {isPending ? (
              <span className="loading loading-dots"></span>
            ) : (
              "Google"
            )}
          </button>
          <NavLink className="btn btn-secondary" to="/signup">
            I have no account yet
          </NavLink>
        </form>
      </div>
    </div>
  );
}

export default Login;
