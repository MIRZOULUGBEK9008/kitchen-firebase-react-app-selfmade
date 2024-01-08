import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./pages/Home";
import ProtectedRoutes from "./layouts/ProtectedRoutes";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ChangeTheme from "./pages/ChangeTheme";

function App() {
  const user = false;
  const isPending = true;
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <RootLayouts />
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          path: "/",
          element: <Home />,
        },
        {
          path: "/create",
          element: <Create />,
        },
        {
          path: "/change-theme",
          element: <ChangeTheme />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/signup",
      element: user ? <Navigate to="/" /> : <Signup />,
    },
  ]);
  return <>{isPending && <RouterProvider router={routes} />}</>;
}

export default App;
