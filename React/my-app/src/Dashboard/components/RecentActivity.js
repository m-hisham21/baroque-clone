import React, { useEffect, useState } from "react";
import { fetchActivity } from "../api/dashboardApi";
import { useDashboardRefresh } from "../context/DashboardRefreshContext";
import { timeAgo } from "../utils";

function RecentActivity() {
  const { refreshKey } = useDashboardRefresh();
  const [activity, setActivity] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    function load() {
      fetchActivity(12)
        .then((res) => {
          if (!cancelled) {
            setActivity(res.activity);
            setError(null);
          }
        })
        .catch(() => !cancelled && setError("Couldn't load recent activity."));
    }

    load();
    const interval = setInterval(load, 20000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, [refreshKey]);

  return (
    <div className="bq-panel">
      <div className="bq-panel-head">
        <div className="bq-panel-title">Recent Activity</div>
      </div>

      {error && <div className="bq-state error">{error}</div>}
      {!error && activity && activity.length === 0 && (
        <div className="bq-state">Nothing has happened yet.</div>
      )}

      {!error && activity && activity.length > 0 && (
        <div className="bq-activity-list">
          {activity.map((a) => (
            <div className="bq-activity-item" key={a._id}>
              <span className="bq-activity-dot" />
              <div>
                <div className="bq-activity-text">{a.message}</div>
                <div className="bq-activity-time">{timeAgo(a.createdAt)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RecentActivity;
