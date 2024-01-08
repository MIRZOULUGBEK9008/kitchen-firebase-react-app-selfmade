import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className="my-container grow">
      <Outlet />
    </main>
  );
}

export default Main;
