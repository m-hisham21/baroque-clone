import React, { useEffect, useMemo, useState } from "react";
import { fetchUsers, fetchUserStats, updateUserStatus } from "../api/dashboardApi";
import { useDashboardRefresh } from "../context/DashboardRefreshContext";
import { formatDate } from "../utils";

function UsersPage() {
  const { refreshKey, refresh } = useDashboardRefresh();
  const [users, setUsers] = useState(null);
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  function loadAll() {
    Promise.all([fetchUsers(), fetchUserStats()])
      .then(([u, s]) => {
        setUsers(u);
        setStats(s);
        setError(null);
      })
      .catch(() => setError("Couldn't load users."));
  }

  useEffect(() => {
    loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshKey]);

  const filtered = useMemo(() => {
    if (!users) return [];
    if (!search) return users;
    const q = search.toLowerCase();
    return users.filter((u) => u.name?.toLowerCase().includes(q) || u.email?.toLowerCase().includes(q));
  }, [users, search]);

  async function toggleStatus(u) {
    const next = u.status === "Active" ? "Inactive" : "Active";
    try {
      await updateUserStatus(u._id, next);
      loadAll();
      refresh();
    } catch (err) {
      window.alert("Couldn't update this user's status.");
    }
  }

  return (
    <div>
      <div className="bq-page-head">
        <div>
          <div className="bq-page-title">Users</div>
          <div className="bq-page-sub">
            {stats ? `${stats.totalUsers} registered · ${stats.activeUsers} active · ${stats.newThisWeek} new this week` : "Loading…"}
          </div>
        </div>
      </div>

      <div className="bq-panel">
        <div className="bq-filters" style={{ marginBottom: 18 }}>
          <input
            className="bq-input"
            placeholder="Search by name or email…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ minWidth: 240 }}
          />
        </div>

        {error && <div className="bq-state error">{error}</div>}
        {!error && users && filtered.length === 0 && <div className="bq-state">No users match this search.</div>}

        {!error && filtered.length > 0 && (
          <div className="bq-table-wrap">
            <table className="bq-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Registered</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((u) => (
                  <tr key={u._id}>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{formatDate(u.createdAt)}</td>
                    <td>
                      <span className={`bq-badge ${u.status === "Active" ? "success" : "neutral"}`}>{u.status || "Active"}</span>
                    </td>
                    <td>
                      <button className="bq-btn ghost sm" onClick={() => toggleStatus(u)}>
                        {u.status === "Active" ? "Deactivate" : "Activate"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default UsersPage;
