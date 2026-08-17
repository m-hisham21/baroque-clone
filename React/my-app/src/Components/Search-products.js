import { useState } from "react";

// Replace with your own data source
const items = [
  "Apple", "Banana", "Cherry", "Date", "Elderberry",
  "Fig", "Grape", "Honeydew", "Kiwi", "Lemon",
];

export default function HeaderWithSearch() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ position: "relative" }}>
      {/* Your exact button, just with an onClick added */}
      <button
        className="icon-btn"
        style={{ right: "80px" }}
        onClick={() => setShowSearch((prev) => !prev)}
      >
        <div className="nav-icon" title="Search">
          <svg className="cls" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </div>
      </button>

      {/* Search bar — appears below the button when open */}
      {showSearch && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "0",
            width: "280px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            padding: "10px",
            zIndex: 100,
          }}
        >
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            style={{
              width: "100%",
              padding: "8px 10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              outline: "none",
              boxSizing: "border-box",
            }}
          />

          {query && (
            <ul style={{ listStyle: "none", margin: "8px 0 0", padding: 0, maxHeight: "200px", overflowY: "auto" }}>
              {filtered.length > 0 ? (
                filtered.map((item, i) => (
                  <li
                    key={i}
                    style={{ padding: "8px 6px", borderTop: "1px solid #f0f0f0", fontSize: "14px", cursor: "pointer" }}
                  >
                    {item}
                  </li>
                ))
              ) : (
                <li style={{ padding: "8px 6px", fontSize: "14px", color: "#999" }}>
                  No results found
                </li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}