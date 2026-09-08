import API from "../../Api/Api";

// ---- Overview / analytics ----
export const fetchStats = () => API.get("/dashboard/stats").then((r) => r.data);
export const fetchSales = (range = "7d") =>
  API.get(`/dashboard/sales?range=${range}`).then((r) => r.data);
export const fetchCategoryStats = () =>
  API.get("/dashboard/categories").then((r) => r.data);
export const fetchProductStats = () =>
  API.get("/dashboard/product-stats").then((r) => r.data);
export const fetchUserStats = () =>
  API.get("/dashboard/user-stats").then((r) => r.data);
export const fetchRecentOrders = (limit = 6) =>
  API.get(`/dashboard/recent-orders?limit=${limit}`).then((r) => r.data);
export const fetchRecentProducts = (limit = 6) =>
  API.get(`/dashboard/recent-products?limit=${limit}`).then((r) => r.data);
export const fetchActivity = (limit = 12) =>
  API.get(`/dashboard/activity?limit=${limit}`).then((r) => r.data);
export const searchDashboard = (q) =>
  API.get(`/dashboard/search?q=${encodeURIComponent(q)}`).then((r) => r.data);

// ---- Products (existing backend CRUD) ----
export const fetchProducts = () => API.get("/products").then((r) => r.data);
export const createProduct = (data) => API.post("/products", data).then((r) => r.data);
export const updateProduct = (id, data) => API.put(`/products/${id}`, data).then((r) => r.data);
export const deleteProduct = (id) => API.delete(`/products/${id}`).then((r) => r.data);

// ---- Categories (existing backend CRUD) ----
export const fetchCategories = () => API.get("/categories").then((r) => r.data);
export const createCategory = (data) => API.post("/categories", data).then((r) => r.data);
export const updateCategory = (id, data) => API.put(`/categories/${id}`, data).then((r) => r.data);
export const deleteCategory = (id) => API.delete(`/categories/${id}`).then((r) => r.data);

// ---- Users ----
export const fetchUsers = () => API.get("/user").then((r) => r.data);
export const updateUserStatus = (id, status) =>
  API.put(`/user/${id}`, { status }).then((r) => r.data);

// ---- Orders ----
export const fetchOrders = (params = {}) => {
  const qs = new URLSearchParams(params).toString();
  return API.get(`/orders${qs ? `?${qs}` : ""}`).then((r) => r.data);
};
export const updateOrderStatus = (id, status) =>
  API.put(`/orders/${id}/status`, { status }).then((r) => r.data);
export const deleteOrder = (id) => API.delete(`/orders/${id}`).then((r) => r.data);
