import React, { useEffect, useMemo, useState } from "react";
import { Pencil, Trash2, Plus, X } from "lucide-react";
import { fetchCategoryStats, createCategory, updateCategory, deleteCategory } from "../api/dashboardApi";
import { useDashboardRefresh } from "../context/DashboardRefreshContext";
import { formatDate } from "../utils";

const EMPTY_FORM = { Name: "", Description: "" };

function CategoriesPage() {
  const { refresh } = useDashboardRefresh();
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState(null);

  function loadAll() {
    fetchCategoryStats()
      .then((res) => {
        setData(res);
        setError(null);
      })
      .catch(() => setError("Couldn't load categories."));
  }

  useEffect(() => {
    loadAll();
  }, []);

  const filtered = useMemo(() => {
    if (!data) return [];
    return data.distribution.filter((c) => !search || c.name?.toLowerCase().includes(search.toLowerCase()));
  }, [data, search]);

  function openCreate() {
    setEditing(null);
    setForm(EMPTY_FORM);
    setFormError(null);
    setModalOpen(true);
  }

  function openEdit(c) {
    setEditing(c);
    setForm({ Name: c.name || "", Description: c.description || "" });
    setFormError(null);
    setModalOpen(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.Name.trim()) {
      setFormError("Category name is required.");
      return;
    }
    setSaving(true);
    setFormError(null);
    try {
      if (editing) {
        await updateCategory(editing.id, form);
      } else {
        await createCategory(form);
      }
      setModalOpen(false);
      loadAll();
      refresh();
    } catch (err) {
      setFormError("Couldn't save this category.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(c) {
    if (!window.confirm(`Delete "${c.name}"? Products in this category will keep their category reference, but it won't resolve to a name anymore.`)) return;
    try {
      await deleteCategory(c.id);
      loadAll();
      refresh();
    } catch (err) {
      window.alert("Couldn't delete this category.");
    }
  }

  return (
    <div>
      <div className="bq-page-head">
        <div>
          <div className="bq-page-title">Categories</div>
          <div className="bq-page-sub">
            {data ? `${data.totalCategories} categories${data.mostPopulated ? ` · most populated: ${data.mostPopulated.name}` : ""}` : "Loading…"}
          </div>
        </div>
        <button className="bq-btn" onClick={openCreate}>
          <Plus size={15} /> Add Category
        </button>
      </div>

      <div className="bq-panel">
        <div className="bq-filters" style={{ marginBottom: 18 }}>
          <input
            className="bq-input"
            placeholder="Search categories…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ minWidth: 220 }}
          />
        </div>

        {error && <div className="bq-state error">{error}</div>}
        {!error && data && filtered.length === 0 && <div className="bq-state">No categories found.</div>}

        {!error && filtered.length > 0 && (
          <div className="bq-table-wrap">
            <table className="bq-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Products</th>
                  <th>Created</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.id}>
                    <td>{c.name}</td>
                    <td>{c.productCount}</td>
                    <td>{formatDate(c.createdAt)}</td>
                    <td>
                      <div style={{ display: "flex", gap: 6 }}>
                        <button className="bq-icon-btn" onClick={() => openEdit(c)} title="Edit"><Pencil size={14} /></button>
                        <button className="bq-icon-btn danger" onClick={() => handleDelete(c)} title="Delete"><Trash2 size={14} /></button>
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
              <div className="bq-modal-title">{editing ? "Edit Category" : "Add Category"}</div>
              <button className="bq-icon-btn" onClick={() => setModalOpen(false)}><X size={15} /></button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="bq-form-row">
                <label>Name</label>
                <input className="bq-input" value={form.Name} onChange={(e) => setForm({ ...form, Name: e.target.value })} />
              </div>
              <div className="bq-form-row">
                <label>Description</label>
                <textarea value={form.Description} onChange={(e) => setForm({ ...form, Description: e.target.value })} />
              </div>

              {formError && <div className="bq-state error" style={{ padding: "0 0 10px" }}>{formError}</div>}

              <div className="bq-form-actions">
                <button type="button" className="bq-btn ghost" onClick={() => setModalOpen(false)}>Cancel</button>
                <button type="submit" className="bq-btn" disabled={saving}>{saving ? "Saving…" : "Save Category"}</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoriesPage;
