import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const items = ["Dashboard", "Inventry", "Purchase", "Invoice", "About"];

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminNavbar />
      <div className="flex ">
        <aside className="bg-white p-4">
          <h1>Admin Dashboard</h1>
          <ul className="">
            {items.map((item, index) => (
              <Link to={item} key={index}>
                {item}
              </Link>
            ))}
          </ul>
        </aside>
        <div>
          <h1>Admin Dashboard</h1>
          <p>Welcome to the Admin Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
