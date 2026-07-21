import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 h-16 bg-white shadow flex items-center justify-between px-6">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button className="md:hidden text-xl">
          <FaBars />
        </button>

        <h1 className="text-2xl font-bold text-gray-800">
          Student Management System
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Notification */}
        <button className="relative text-gray-600 hover:text-cyan-600">
          <FaBell size={20} />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <FaUserCircle size={34} className="text-cyan-600" />
          <div className="hidden md:block">
            <p className="font-semibold text-gray-700">Admin</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
