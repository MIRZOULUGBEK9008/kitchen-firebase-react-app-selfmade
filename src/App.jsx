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
import { useGlobalContext } from "./hooks/useGlobalContext";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase/firebaseConfig";
import NotFound from "./pages/NotFound";
import RecipeElements from "./pages/RecipeElements";

function App() {
  const { user, dispatch, isAuthReady } = useGlobalContext();
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
          element: user ? <Create /> : <Navigate to="/signup" />,
        },
        {
          path: "/change-theme",
          element: user ? <ChangeTheme /> : <Navigate to="/signup" />,
        },
        {
          path: "/recipe-elements/:id",
          element: user ? <RecipeElements /> : <Navigate to="/signup" />,
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
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  // Remember login
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOGIN", payload: user });
      dispatch({ type: "IS_AUTH_READY", payload: true });
    });
  }, []);

  return isAuthReady && <RouterProvider router={routes} />;
}

export default App;
