import React, { useEffect, useRef, useState } from "react";
import { Menu, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { searchDashboard } from "../api/dashboardApi";

let debounceTimer = null;

function Navbar({ title, onToggleSidebar }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function onClickOutside(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    clearTimeout(debounceTimer);
    if (!query.trim()) {
      setResults(null);
      return;
    }
    setLoading(true);
    debounceTimer = setTimeout(async () => {
      try {
        const data = await searchDashboard(query.trim());
        setResults(data);
      } catch (err) {
        setResults(null);
      } finally {
        setLoading(false);
      }
    }, 350);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  const hasResults =
    results &&
    (results.products?.length ||
      results.categories?.length ||
      results.users?.length ||
      results.orders?.length);

  return (
    <header className="bq-navbar">
      <button className="bq-navbar-hamburger" onClick={onToggleSidebar} aria-label="Toggle menu">
        <Menu size={18} />
      </button>

      <div className="bq-navbar-title bq-serif">{title}</div>

      <div className="bq-search" ref={boxRef}>
        <Search size={15} />
        <input
          placeholder="Search products, orders, users…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
        />
        {open && query.trim() && (
          <div className="bq-search-results">
            {loading && <div className="bq-search-empty">Searching…</div>}
            {!loading && !hasResults && (
              <div className="bq-search-empty">No matches for "{query}"</div>
            )}
            {!loading && hasResults && (
              <>
                {results.products?.length > 0 && (
                  <>
                    <div className="bq-search-group-label">Products</div>
                    {results.products.map((p) => (
                      <div
                        key={p._id}
                        className="bq-search-item"
                        onClick={() => {
                          navigate("/Dashboard/products");
                          setOpen(false);
                        }}
                      >
                        <span>{p.Name}</span>
                        <span>${p.Price}</span>
                      </div>
                    ))}
                  </>
                )}
                {results.categories?.length > 0 && (
                  <>
                    <div className="bq-search-group-label">Categories</div>
                    {results.categories.map((c) => (
                      <div
                        key={c._id}
                        className="bq-search-item"
                        onClick={() => {
                          navigate("/Dashboard/categories");
                          setOpen(false);
                        }}
                      >
                        <span>{c.Name}</span>
                      </div>
                    ))}
                  </>
                )}
                {results.users?.length > 0 && (
                  <>
                    <div className="bq-search-group-label">Users</div>
                    {results.users.map((u) => (
                      <div
                        key={u._id}
                        className="bq-search-item"
                        onClick={() => {
                          navigate("/Dashboard/users");
                          setOpen(false);
                        }}
                      >
                        <span>{u.name}</span>
                        <span>{u.email}</span>
                      </div>
                    ))}
                  </>
                )}
                {results.orders?.length > 0 && (
                  <>
                    <div className="bq-search-group-label">Orders</div>
                    {results.orders.map((o) => (
                      <div
                        key={o._id}
                        className="bq-search-item"
                        onClick={() => {
                          navigate("/Dashboard/orders");
                          setOpen(false);
                        }}
                      >
                        <span>{o.customerName}</span>
                        <span>${o.totalAmount}</span>
                      </div>
                    ))}
                  </>
                )}
              </>
            )}
          </div>
        )}
      </div>

      <div className="bq-navbar-avatar">A</div>
    </header>
  );
}

export default Navbar;
