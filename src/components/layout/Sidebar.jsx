import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserGraduate,
  FaBook,
  FaClipboardCheck,
  FaChartBar,
  FaMoneyBillWave,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
  { name: "Students", path: "/students", icon: <FaUserGraduate /> },
  { name: "Courses", path: "/courses", icon: <FaBook /> },
  { name: "Attendance", path: "/attendance", icon: <FaClipboardCheck /> },
  { name: "Marks", path: "/marks", icon: <FaChartBar /> },
  { name: "Fees", path: "/fees", icon: <FaMoneyBillWave /> },
  { name: "Reports", path: "/reports", icon: <FaFileAlt /> },
  { name: "Settings", path: "/settings", icon: <FaCog /> },
];

function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside
      className={`${collapsed ? "w-20" : "w-54"} h-screen bg-cyan-950 text-white flex flex-col transition-all duration-300 flex-shrink-0`}
    >
      <div className={`text-2xl font-bold ${collapsed ? 'text-center' : ''} p-6 border-b border-cyan-600`}>
        <button className="cursor-pointer" onClick={() => setCollapsed(!collapsed)}>{collapsed ? <FaTimes /> : <FaBars />}</button>
      </div>

      <nav className="flex-1 p-3">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center ${
                collapsed ? "justify-center" : "gap-3"
              } px-4 py-3 rounded-lg mb-2 transition ${
                isActive ? "bg-white text-cyan-700" : "hover:bg-cyan-700"
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>

            {!collapsed && <span>{item.name}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-cyan-600">
        <button
          className={`flex items-center ${
            collapsed ? "justify-center" : "gap-3"
          } w-full px-4 py-3 rounded-lg hover:bg-red-500 transition`}
        >
          <FaSignOutAlt />

          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
