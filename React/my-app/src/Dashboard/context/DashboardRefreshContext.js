import React, { createContext, useCallback, useContext, useState } from "react";

// Any widget can call `refresh()` after a create/update/delete succeeds.
// Every widget subscribed via `useRefreshKey()` re-runs its fetch effect
// because the key changes, which is how the whole dashboard stays in
// sync with MongoDB without a manual page reload.
const DashboardRefreshContext = createContext({
  refreshKey: 0,
  refresh: () => {},
});

export function DashboardRefreshProvider({ children }) {
  const [refreshKey, setRefreshKey] = useState(0);
  const refresh = useCallback(() => setRefreshKey((k) => k + 1), []);

  return (
    <DashboardRefreshContext.Provider value={{ refreshKey, refresh }}>
      {children}
    </DashboardRefreshContext.Provider>
  );
}

export function useDashboardRefresh() {
  return useContext(DashboardRefreshContext);
}
