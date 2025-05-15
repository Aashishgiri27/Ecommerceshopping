import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, PlusSquare, MessageSquare } from "lucide-react"; // optional icons
import "../adminpagecss/layout.css";

const navitem = [
  { label: "Product", href: "/admin/products", icon: <LayoutDashboard size={18} /> },
  { label: "Add Item", href: "/admin/additem", icon: <PlusSquare size={18} /> },
  { label: "Users", href: "/admin/Users", icon: <Users size={18} /> },
  { label: "Messages", href: "/admin/messages", icon: <MessageSquare size={18} /> },
   { label: "Reviews", href: "/admin/reviews", icon: <MessageSquare size={18} /> },
];

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#043873] text-white shadow-lg flex flex-col p-4">
        <h2 className="text-xl font-bold mb-8 text-yellow-400">Admin Panel</h2>
        <nav className="space-y-3">
          {navitem.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={index}
                to={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition 
                  ${isActive ? "bg-yellow-400 text-[#043873]" : "hover:bg-white/10"}`}
              >
                {item.icon}
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-[#F5F7FA]">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#043873]">FRIEND'S COLLECTION</h1>
        </header>

        {/* Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
