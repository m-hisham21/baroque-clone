import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutGrid,
  ShoppingBag,
  FolderTree,
  ClipboardList,
  Users,
  ArrowLeft,
} from "lucide-react";

const links = [
  { to: "/Dashboard", label: "Overview", icon: LayoutGrid, end: true },
  { to: "/Dashboard/products", label: "Products", icon: ShoppingBag },
  { to: "/Dashboard/categories", label: "Categories", icon: FolderTree },
  { to: "/Dashboard/orders", label: "Orders", icon: ClipboardList },
  { to: "/Dashboard/users", label: "Users", icon: Users },
];

function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="bq-sidebar-scrim" onClick={onClose} />}
      <aside className={`bq-sidebar ${open ? "open" : ""}`}>
        <div className="bq-sidebar-brand">
          <div className="bq-sidebar-brand-name">BAROQUE</div>
          <div className="bq-sidebar-brand-sub">Admin Studio</div>
        </div>

        <nav className="bq-sidebar-nav">
          {links.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `bq-sidebar-link${isActive ? " active" : ""}`
              }
            >
              <Icon size={17} />
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="bq-sidebar-foot">
          <a href="/">
            <ArrowLeft size={13} style={{ verticalAlign: "-2px", marginRight: 6 }} />
            Back to storefront
          </a>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
