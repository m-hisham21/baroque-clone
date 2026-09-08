import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchRecentProducts } from "../api/dashboardApi";
import { useDashboardRefresh } from "../context/DashboardRefreshContext";
import { formatCurrency } from "../utils";

const FALLBACK_IMG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='160'><rect width='100%25' height='100%25' fill='%23f2efe9'/></svg>";

function RecentProducts() {
  const { refreshKey } = useDashboardRefresh();
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchRecentProducts(8)
      .then((res) => {
        if (!cancelled) {
          setProducts(res.products);
          setError(null);
        }
      })
      .catch(() => !cancelled && setError("Couldn't load recent products."));
    return () => {
      cancelled = true;
    };
  }, [refreshKey]);

  return (
    <div className="bq-panel">
      <div className="bq-panel-head">
        <div className="bq-panel-title">Recently Added Products</div>
        <Link to="/Dashboard/products" className="bq-panel-sub">
          View all
        </Link>
      </div>

      {error && <div className="bq-state error">{error}</div>}
      {!error && products && products.length === 0 && (
        <div className="bq-state">No products yet.</div>
      )}

      {!error && products && products.length > 0 && (
        <div className="bq-product-grid">
          {products.map((p) => (
            <div className="bq-product-card" key={p._id}>
              <img src={p.Image || FALLBACK_IMG} alt={p.Name} onError={(e) => (e.target.src = FALLBACK_IMG)} />
              <div className="bq-product-card-body">
                <div className="bq-product-card-name">{p.Name}</div>
                <div className="bq-product-card-meta">
                  {formatCurrency(p.Price)} · Stock {p.Stock ?? 0}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentProducts;
