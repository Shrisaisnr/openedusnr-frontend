import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul>
        <li className="mb-2"><Link to="/dashboard">Dashboard</Link></li>
        <li className="mb-2"><Link to="/students">Students</Link></li>
        <li className="mb-2"><Link to="/courses">Courses</Link></li>
        <li className="mb-2"><Link to="/placements">Placements</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;