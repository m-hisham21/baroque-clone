import React, { useEffect, useState } from "react";
import { fetchStats } from "../api/dashboardApi";
import { useDashboardRefresh } from "../context/DashboardRefreshContext";
import { formatCurrency } from "../utils";

const CARD_DEFS = [
  { key: "totalProducts", label: "Total Products" },
  { key: "totalCategories", label: "Total Categories" },
  { key: "totalUsers", label: "Total Users" },
  { key: "totalOrders", label: "Total Orders" },
  { key: "totalRevenue", label: "Total Revenue", currency: true },
  { key: "pendingOrders", label: "Pending Orders" },
  { key: "completedOrders", label: "Completed Orders" },
  { key: "lowStockProducts", label: "Low Stock Products" },
];

function StatisticsCards() {
  const { refreshKey } = useDashboardRefresh();
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const data = await fetchStats();
        if (!cancelled) {
          setStats(data.statistics);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) setError("Couldn't load dashboard statistics.");
      }
    }

    load();
    // Light polling so the numbers stay fresh even without a local CRUD action
    const interval = setInterval(load, 30000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [refreshKey]);

  if (error) {
    return <div className="bq-state error">{error}</div>;
  }

  return (
    <div className="bq-stat-grid">
      {CARD_DEFS.map(({ key, label, currency }) => (
        <div className="bq-card bq-stat-card" key={key}>
          <div className="bq-stat-label">{label}</div>
          <div className="bq-stat-value">
            {stats
              ? currency
                ? formatCurrency(stats[key])
                : (stats[key] ?? 0).toLocaleString()
              : "—"}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatisticsCards;
