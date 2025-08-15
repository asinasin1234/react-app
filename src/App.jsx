import { BrowserRouter, Route, Routes, NavLink, Link } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import User from "./pages/User";
import Nothing from "./pages/Nothing";

function App(props) {
  return (
    <>
      <BrowserRouter>
        {/* <NavLink to="user">User</NavLink>
        <br/>
        <NavLink to="/home">Home</NavLink> */}
        <Link to="/dashboard">Dashboard</Link>
        <Routes>
          <Route path="dashboard" element={<Dashboard />}>
          <Route path="user" element={<User />} />
          </Route>
          <Route path="home" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="product" element={<Product />} />
          
          <Route path="" element={<Nothing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
