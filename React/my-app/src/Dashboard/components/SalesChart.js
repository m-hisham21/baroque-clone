import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { fetchSales } from "../api/dashboardApi";
import { useDashboardRefresh } from "../context/DashboardRefreshContext";
import { formatCurrency } from "../utils";

const RANGES = [
  { key: "today", label: "Today" },
  { key: "7d", label: "7 Days" },
  { key: "30d", label: "30 Days" },
  { key: "6m", label: "6 Months" },
  { key: "1y", label: "1 Year" },
];

function SalesChart() {
  const { refreshKey } = useDashboardRefresh();
  const [range, setRange] = useState("7d");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchSales(range)
      .then((res) => {
        if (!cancelled) {
          setData(res);
          setError(null);
        }
      })
      .catch(() => !cancelled && setError("Couldn't load sales analytics."));
    return () => {
      cancelled = true;
    };
  }, [range, refreshKey]);

  return (
    <div className="bq-panel">
      <div className="bq-panel-head">
        <div>
          <div className="bq-panel-title">Sales &amp; Revenue</div>
          <div className="bq-panel-sub">
            {data
              ? `${formatCurrency(data.summary.totalRevenue)} total · ${data.summary.totalOrders} orders · ${formatCurrency(data.summary.averageOrderValue)} avg. order`
              : "Loading…"}
          </div>
        </div>
        <div className="bq-pill-group">
          {RANGES.map((r) => (
            <button
              key={r.key}
              className={`bq-pill ${range === r.key ? "active" : ""}`}
              onClick={() => setRange(r.key)}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {error && <div className="bq-state error">{error}</div>}

      {!error && data && data.trend.length === 0 && (
        <div className="bq-state">No orders in this period yet.</div>
      )}

      {!error && data && data.trend.length > 0 && (
        <ResponsiveContainer width="100%" height={260}>
          <LineChart data={data.trend} margin={{ top: 6, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e6e2da" vertical={false} />
            <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#6b6560" }} axisLine={{ stroke: "#e6e2da" }} tickLine={false} />
            <YAxis tick={{ fontSize: 11, fill: "#6b6560" }} axisLine={false} tickLine={false} width={54} />
            <Tooltip
              formatter={(value, name) => [name === "revenue" ? formatCurrency(value) : value, name === "revenue" ? "Revenue" : "Orders"]}
              contentStyle={{ borderRadius: 6, borderColor: "#e6e2da", fontSize: 12 }}
            />
            <Line type="monotone" dataKey="revenue" stroke="#6b1f2b" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default SalesChart;
