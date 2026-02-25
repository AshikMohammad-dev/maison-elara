import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "./AdminLayout";
import AdminLogin from "./AdminLogin";

import ProductsAdmin from "./pages/ProductsAdmin";
import MenuAdmin from "./pages/MenuAdmin";
import TestimonialsAdmin from "./pages/TestimonialsAdmin";

// Protected Route Component
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("adminLogged");
  
  if (!isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }
  
  return children;
}

function AdminApp() {
  const isLoggedIn = localStorage.getItem("adminLogged");

  return (
    <Routes>
      {/* LOGIN */}
      <Route
        path="/"
        element={
          isLoggedIn
            ? <Navigate to="products" replace />
            : <AdminLogin />
        }
      />

      {/* ADMIN PANEL */}
      <Route
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path="products"
          element={<ProductsAdmin />}
        />

        <Route
          path="menu"
          element={<MenuAdmin />}
        />

        <Route
          path="testimonials"
          element={<TestimonialsAdmin />}
        />
      </Route>
    </Routes>
  );
}

export default AdminApp;