import React, { useEffect, useState } from "react";
import { Trash2, X } from "lucide-react";
import { fetchOrders, updateOrderStatus, deleteOrder } from "../api/dashboardApi";
import { useDashboardRefresh } from "../context/DashboardRefreshContext";
import { formatCurrency, formatDate, orderStatusTone, paymentStatusTone } from "../utils";

const STATUSES = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

function OrdersPage() {
  const { refresh } = useDashboardRefresh();
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [viewing, setViewing] = useState(null);

  function loadAll() {
    fetchOrders({ status: statusFilter || undefined, search: search || undefined })
      .then((res) => {
        setOrders(res);
        setError(null);
      })
      .catch(() => setError("Couldn't load orders."));
  }

  useEffect(() => {
    const t = setTimeout(loadAll, 250); // small debounce on search
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, statusFilter]);

  async function handleStatusChange(order, status) {
    try {
      await updateOrderStatus(order._id, status);
      loadAll();
      refresh();
    } catch (err) {
      window.alert("Couldn't update order status.");
    }
  }

  async function handleDelete(order) {
    if (!window.confirm(`Delete order for "${order.customerName}"?`)) return;
    try {
      await deleteOrder(order._id);
      loadAll();
      refresh();
    } catch (err) {
      window.alert("Couldn't delete this order.");
    }
  }

  return (
    <div>
      <div className="bq-page-head">
        <div>
          <div className="bq-page-title">Orders</div>
          <div className="bq-page-sub">{orders ? `${orders.length} orders` : "Loading…"}</div>
        </div>
      </div>

      <div className="bq-panel">
        <div className="bq-filters" style={{ marginBottom: 18 }}>
          <input
            className="bq-input"
            placeholder="Search by customer or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ minWidth: 240 }}
          />
          <select className="bq-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All statuses</option>
            {STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {error && <div className="bq-state error">{error}</div>}
        {!error && orders && orders.length === 0 && <div className="bq-state">No orders match these filters.</div>}

        {!error && orders && orders.length > 0 && (
          <div className="bq-table-wrap">
            <table className="bq-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Items</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o._id}>
                    <td>
                      <button
                        onClick={() => setViewing(o)}
                        style={{ background: "none", border: "none", color: "var(--bq-accent)", cursor: "pointer", fontSize: 13, padding: 0, fontFamily: "inherit" }}
                      >
                        #{o._id.slice(-6).toUpperCase()}
                      </button>
                    </td>
                    <td>{o.customerName}</td>
                    <td>{o.products?.length || 0} item{o.products?.length === 1 ? "" : "s"}</td>
                    <td>{formatCurrency(o.totalAmount)}</td>
                    <td>{formatDate(o.createdAt)}</td>
                    <td>
                      <span className={`bq-badge ${paymentStatusTone[o.paymentStatus] || "neutral"}`}>{o.paymentStatus}</span>
                    </td>
                    <td>
                      <select
                        className="bq-select"
                        value={o.status}
                        onChange={(e) => handleStatusChange(o, e.target.value)}
                        style={{ padding: "5px 8px", fontSize: 12 }}
                      >
                        {STATUSES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <button className="bq-icon-btn danger" onClick={() => handleDelete(o)} title="Delete"><Trash2 size={14} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {viewing && (
        <div className="bq-modal-overlay" onClick={() => setViewing(null)}>
          <div className="bq-modal" onClick={(e) => e.stopPropagation()}>
            <div className="bq-modal-head">
              <div className="bq-modal-title">Order #{viewing._id.slice(-6).toUpperCase()}</div>
              <button className="bq-icon-btn" onClick={() => setViewing(null)}><X size={15} /></button>
            </div>
            <p style={{ fontSize: 13 }}><strong>Customer:</strong> {viewing.customerName}</p>
            <p style={{ fontSize: 13 }}><strong>Email:</strong> {viewing.email || "—"}</p>
            <p style={{ fontSize: 13 }}><strong>Placed:</strong> {formatDate(viewing.createdAt)}</p>
            <p style={{ fontSize: 13 }}><strong>Payment:</strong> <span className={`bq-badge ${paymentStatusTone[viewing.paymentStatus] || "neutral"}`}>{viewing.paymentStatus}</span></p>
            <p style={{ fontSize: 13 }}><strong>Status:</strong> <span className={`bq-badge ${orderStatusTone[viewing.status] || "neutral"}`}>{viewing.status}</span></p>

            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 12, color: "var(--bq-ink-soft)", marginBottom: 8 }}>Items</div>
              {(viewing.products || []).map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "6px 0", borderBottom: "1px solid var(--bq-border)" }}>
                  <span>{item.name} × {item.quantity}</span>
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, fontWeight: 600, padding: "10px 0 0" }}>
                <span>Total</span>
                <span>{formatCurrency(viewing.totalAmount)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
