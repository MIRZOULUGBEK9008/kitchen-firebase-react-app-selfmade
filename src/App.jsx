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

function App() {
  const user = true;
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
