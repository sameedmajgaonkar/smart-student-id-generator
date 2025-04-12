import "./App.css";
import { AiFillThunderbolt } from "react-icons/ai";
import { NavLink, Outlet } from "react-router";
const App = () => {
  return (
    <>
      <header className="flex justify-between p-5 bg-blue-400">
        <div className="flex text-2xl tracking-widest">
          <AiFillThunderbolt className="text-2xl" /> IDgen
        </div>
        <ul className="flex gap-4">
          <li>
            {" "}
            <NavLink to="/form">Generate</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/">Students</NavLink>
          </li>
        </ul>
      </header>
      <main className="p-5 flex justify-center items-center">
        <Outlet />
      </main>
    </>
  );
};

export default App;
