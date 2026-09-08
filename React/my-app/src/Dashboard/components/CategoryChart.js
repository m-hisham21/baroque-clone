import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";
import { fetchCategoryStats } from "../api/dashboardApi";
import { useDashboardRefresh } from "../context/DashboardRefreshContext";

const BAR_COLORS = ["#6b1f2b", "#a3793f", "#3a5f7a", "#3f6c51", "#b8862b", "#8a4a52"];

function CategoryChart() {
  const { refreshKey } = useDashboardRefresh();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchCategoryStats()
      .then((res) => {
        if (!cancelled) {
          setData(res);
          setError(null);
        }
      })
      .catch(() => !cancelled && setError("Couldn't load category statistics."));
    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  const chartData = data?.distribution?.map((d) => ({
    name: d.name,
    products: d.productCount,
  }));

  return (
    <div className="bq-panel">
      <div className="bq-panel-head">
        <div>
          <div className="bq-panel-title">Category Distribution</div>
          <div className="bq-panel-sub">
            {data
              ? `${data.totalCategories} categories${data.mostPopulated ? ` · most populated: ${data.mostPopulated.name}` : ""}`
              : "Loading…"}
          </div>
        </div>
      </div>

      {error && <div className="bq-state error">{error}</div>}

      {!error && chartData && chartData.length === 0 && (
        <div className="bq-state">No categories yet.</div>
      )}

      {!error && chartData && chartData.length > 0 && (
        <ResponsiveContainer width="100%" height={260}>
          <BarChart data={chartData} margin={{ top: 6, right: 12, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e6e2da" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#6b6560" }} axisLine={{ stroke: "#e6e2da" }} tickLine={false} />
            <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "#6b6560" }} axisLine={false} tickLine={false} width={30} />
            <Tooltip contentStyle={{ borderRadius: 6, borderColor: "#e6e2da", fontSize: 12 }} />
            <Bar dataKey="products" radius={[4, 4, 0, 0]}>
              {chartData.map((_, i) => (
                <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default CategoryChart;
