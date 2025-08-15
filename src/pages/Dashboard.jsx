import { Link, NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('user');
  };

  return (
    <div>
      <h1>This is dashboard page</h1>

      <button onClick={handleClick}> User</button>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
export default Dashboard;
