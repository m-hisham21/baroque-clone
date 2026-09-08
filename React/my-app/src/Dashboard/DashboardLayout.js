import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { DashboardRefreshProvider } from "./context/DashboardRefreshContext";
import Overview from "./pages/Overview";
import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import OrdersPage from "./pages/OrdersPage";
import UsersPage from "./pages/UsersPage";
import "./Dashboard.css";

const titles = {
  "/Dashboard": "Overview",
  "/Dashboard/products": "Products",
  "/Dashboard/categories": "Categories",
  "/Dashboard/orders": "Orders",
  "/Dashboard/users": "Users",
};

function DashboardShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const title = titles[location.pathname] || "Dashboard";

  return (
    <div className="bq-root">
      <div className="bq-shell">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="bq-main">
          <Navbar title={title} onToggleSidebar={() => setSidebarOpen((v) => !v)} />

          <div className="bq-content">
            <Routes>
              <Route index element={<Overview />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="categories" element={<CategoriesPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="users" element={<UsersPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <DashboardRefreshProvider>
      <DashboardShell />
    </DashboardRefreshProvider>
  );
}

export default Dashboard;
