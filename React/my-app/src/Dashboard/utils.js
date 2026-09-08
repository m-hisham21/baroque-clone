export function formatCurrency(value) {
  const n = Number(value) || 0;
  return `$${n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function formatDate(value) {
  if (!value) return "—";
  const d = new Date(value);
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
}

export function timeAgo(value) {
  if (!value) return "";
  const seconds = Math.floor((Date.now() - new Date(value).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return formatDate(value);
}

export const orderStatusTone = {
  Pending: "warning",
  Processing: "info",
  Shipped: "info",
  Delivered: "success",
  Cancelled: "danger",
};

export const paymentStatusTone = {
  Pending: "warning",
  Paid: "success",
  Failed: "danger",
  Refunded: "neutral",
};
