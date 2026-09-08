import React, { useEffect, useMemo, useState } from "react";
import { Pencil, Trash2, Plus, Eye, X } from "lucide-react";
import {
  fetchProducts,
  fetchCategories,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../api/dashboardApi";
import { useDashboardRefresh } from "../context/DashboardRefreshContext";
import { formatCurrency, formatDate } from "../utils";

const FALLBACK_IMG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><rect width='100%25' height='100%25' fill='%23f2efe9'/></svg>";

const EMPTY_FORM = { Name: "", Price: "", Image: "", Description: "", Category: "", Stock: "", Status: "Active" };

function ProductsPage() {
  const { refresh } = useDashboardRefresh();
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [stockFilter, setStockFilter] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null); // product being edited, or null for "new"
  const [viewing, setViewing] = useState(null); // product being viewed read-only
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState(null);

  function loadAll() {
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([p, c]) => {
        setProducts(p);
        setCategories(c);
        setError(null);
      })
      .catch(() => setError("Couldn't load products."));
  }

  useEffect(() => {
    loadAll();
  }, []);

  const categoryName = (id) => categories.find((c) => c._id === id)?.Name || id || "Uncategorized";

  const filtered = useMemo(() => {
    if (!products) return [];
    return products.filter((p) => {
      if (search && !p.Name?.toLowerCase().includes(search.toLowerCase())) return false;
      if (categoryFilter && p.Category !== categoryFilter) return false;
      if (stockFilter === "low" && !(p.Stock > 0 && p.Stock <= 10)) return false;
      if (stockFilter === "out" && !(p.Stock <= 0)) return false;
      if (stockFilter === "in" && !(p.Stock > 10)) return false;
      return true;
    });
  }, [products, search, categoryFilter, stockFilter]);

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setFormError(null);
    setModalOpen(true);
  }

  function openEdit(p) {
    setEditing(p);
    setForm({
      Name: p.Name || "",
      Price: p.Price ?? "",
      Image: p.Image || "",
      Description: p.Description || "",
      Category: p.Category || "",
      Stock: p.Stock ?? "",
      Status: p.Status || "Active",
    });
    setFormError(null);
    setModalOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.Name.trim() || form.Price === "") {
      setFormError("Name and price are required.");
      return;
    }
    setSaving(true);
    setFormError(null);
    const payload = {
      Name: form.Name.trim(),
      Price: Number(form.Price),
      Image: form.Image.trim(),
      Description: form.Description.trim(),
      Category: form.Category,
      Stock: Number(form.Stock) || 0,
      Status: form.Status,
    };
    try {
      if (editing) {
        await updateProduct(editing._id, payload);
      } else {
        await createProduct(payload);
      }
      setModalOpen(false);
      loadAll();
      refresh(); // let overview stats / charts pick up the change
    } catch (err) {
      setFormError("Couldn't save this product. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(p) {
    if (!window.confirm(`Delete "${p.Name}"? This can't be undone.`)) return;
    try {
      await deleteProduct(p._id);
      loadAll();
      refresh();
    } catch (err) {
      window.alert("Couldn't delete this product.");
    }
  }

  return (
    <div>
      <div className="bq-page-head">
        <div>
          <div className="bq-page-title">Products</div>
          <div className="bq-page-sub">
            {products ? `${filtered.length} of ${products.length} products` : "Loading…"}
          </div>
        </div>
        <button className="bq-btn" onClick={openCreate}>
          <Plus size={15} /> Add Product
        </button>
      </div>

      <div className="bq-panel">
        <div className="bq-filters" style={{ marginBottom: 18 }}>
          <input
            className="bq-input"
            placeholder="Search products…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ minWidth: 220 }}
          />
          <select className="bq-select" value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>{c.Name}</option>
            ))}
          </select>
          <select className="bq-select" value={stockFilter} onChange={(e) => setStockFilter(e.target.value)}>
            <option value="">All stock levels</option>
            <option value="in">In stock</option>
            <option value="low">Low stock (≤10)</option>
            <option value="out">Out of stock</option>
          </select>
        </div>

        {error && <div className="bq-state error">{error}</div>}
        {!error && products && filtered.length === 0 && (
          <div className="bq-state">No products match these filters.</div>
        )}

        {!error && filtered.length > 0 && (
          <div className="bq-table-wrap">
            <table className="bq-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Date added</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p._id}>
                    <td>
                      <div className="bq-table-product-cell">
                        <img className="bq-table-thumb" src={p.Image || FALLBACK_IMG} alt={p.Name} onError={(e) => (e.target.src = FALLBACK_IMG)} />
                        <span>{p.Name}</span>
                      </div>
                    </td>
                    <td>{categoryName(p.Category)}</td>
                    <td>{formatCurrency(p.Price)}</td>
                    <td>
                      {p.Stock <= 0 ? (
                        <span className="bq-badge danger">Out of stock</span>
                      ) : p.Stock <= 10 ? (
                        <span className="bq-badge warning">{p.Stock} left</span>
                      ) : (
                        p.Stock
                      )}
                    </td>
                    <td>
                      <span className={`bq-badge ${p.Status === "Active" ? "success" : "neutral"}`}>{p.Status}</span>
                    </td>
                    <td>{formatDate(p.createdAt)}</td>
                    <td>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button className="bq-icon-btn" onClick={() => setViewing(p)} title="View"><Eye size={14} /></button>
                        <button className="bq-icon-btn" onClick={() => openEdit(p)} title="Edit"><Pencil size={14} /></button>
                        <button className="bq-icon-btn danger" onClick={() => handleDelete(p)} title="Delete"><Trash2 size={14} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="bq-modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="bq-modal" onClick={(e) => e.stopPropagation()}>
            <div className="bq-modal-head">
              <div className="bq-modal-title">{editing ? "Edit Product" : "Add Product"}</div>
              <button className="bq-icon-btn" onClick={() => setModalOpen(false)}><X size={15} /></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="bq-form-row">
                <label>Name</label>
                <input className="bq-input" value={form.Name} onChange={(e) => setForm({ ...form, Name: e.target.value })} />
              </div>

              <div className="bq-form-grid-2">
                <div className="bq-form-row">
                  <label>Price</label>
                  <input className="bq-input" type="number" step="0.01" value={form.Price} onChange={(e) => setForm({ ...form, Price: e.target.value })} />
                </div>
                <div className="bq-form-row">
                  <label>Stock</label>
                  <input className="bq-input" type="number" value={form.Stock} onChange={(e) => setForm({ ...form, Stock: e.target.value })} />
                </div>
              </div>

              <div className="bq-form-grid-2">
                <div className="bq-form-row">
                  <label>Category</label>
                  <select className="bq-select" value={form.Category} onChange={(e) => setForm({ ...form, Category: e.target.value })}>
                    <option value="">Uncategorized</option>
                    {categories.map((c) => (
                      <option key={c._id} value={c._id}>{c.Name}</option>
                    ))}
                  </select>
                </div>
                <div className="bq-form-row">
                  <label>Status</label>
                  <select className="bq-select" value={form.Status} onChange={(e) => setForm({ ...form, Status: e.target.value })}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="bq-form-row">
                <label>Image URL</label>
                <input className="bq-input" value={form.Image} onChange={(e) => setForm({ ...form, Image: e.target.value })} />
              </div>

              <div className="bq-form-row">
                <label>Description</label>
                <textarea value={form.Description} onChange={(e) => setForm({ ...form, Description: e.target.value })} />
              </div>

              {formError && <div className="bq-state error" style={{ padding: "0 0 10px" }}>{formError}</div>}

              <div className="bq-form-actions">
                <button type="button" className="bq-btn ghost" onClick={() => setModalOpen(false)}>Cancel</button>
                <button type="submit" className="bq-btn" disabled={saving}>{saving ? "Saving…" : "Save Product"}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {viewing && (
        <div className="bq-modal-overlay" onClick={() => setViewing(null)}>
          <div className="bq-modal" onClick={(e) => e.stopPropagation()}>
            <div className="bq-modal-head">
              <div className="bq-modal-title">{viewing.Name}</div>
              <button className="bq-icon-btn" onClick={() => setViewing(null)}><X size={15} /></button>
            </div>
            <img src={viewing.Image || FALLBACK_IMG} alt={viewing.Name} style={{ width: "100%", borderRadius: 6, marginBottom: 14, aspectRatio: "4/3", objectFit: "cover" }} onError={(e) => (e.target.src = FALLBACK_IMG)} />
            <p style={{ fontSize: 13, color: "var(--bq-ink-soft)", marginBottom: 10 }}>{viewing.Description || "No description."}</p>
            <p style={{ fontSize: 13 }}><strong>Price:</strong> {formatCurrency(viewing.Price)}</p>
            <p style={{ fontSize: 13 }}><strong>Category:</strong> {categoryName(viewing.Category)}</p>
            <p style={{ fontSize: 13 }}><strong>Stock:</strong> {viewing.Stock ?? 0}</p>
            <p style={{ fontSize: 13 }}><strong>Status:</strong> {viewing.Status}</p>
            <p style={{ fontSize: 13 }}><strong>Added:</strong> {formatDate(viewing.createdAt)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductsPage;
