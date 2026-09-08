import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRecentOrders } from "../api/dashboardApi";
import { useDashboardRefresh } from "../context/DashboardRefreshContext";
import { formatCurrency, formatDate, orderStatusTone } from "../utils";

function RecentOrders() {
  const { refreshKey } = useDashboardRefresh();
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchRecentOrders(6)
      .then((res) => {
        if (!cancelled) {
          setOrders(res.orders);
          setError(null);
        }
      })
      .catch(() => !cancelled && setError("Couldn't load recent orders."));
    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  return (
    <div className="bq-panel">
      <div className="bq-panel-head">
        <div className="bq-panel-title">Recent Orders</div>
        <Link to="/Dashboard/orders" className="bq-panel-sub">
          View all
        </Link>
      </div>

      {error && <div className="bq-state error">{error}</div>}
      {!error && orders && orders.length === 0 && (
        <div className="bq-state">No orders yet.</div>
      )}

      {!error && orders && orders.length > 0 && (
        <div className="bq-table-wrap">
          <table className="bq-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o._id}>
                  <td>{o.customerName}</td>
                  <td>{formatCurrency(o.totalAmount)}</td>
                  <td>{formatDate(o.createdAt)}</td>
                  <td>
                    <span className={`bq-badge ${orderStatusTone[o.status] || "neutral"}`}>
                      {o.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default RecentOrders;
