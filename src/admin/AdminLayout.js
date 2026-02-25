import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import ConfirmModal from "./components/ConfirmModal";
import "./admin.css";

function AdminLayout() {

  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Verify user is still logged in on mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("adminLogged");
    if (!isLoggedIn) {
      navigate("/admin", { replace: true });
    }
  }, [navigate]);

  const logout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("adminLogged");
    window.location.href = "/admin";
  };

  return (
    <div className="admin">

      {/* Sidebar */}
      <div className="admin-sidebar">

        <h2>Boutique Admin</h2>

        <button onClick={() => navigate("/admin/products")}>
          Products
        </button>

        <button onClick={() => navigate("/admin/menu")}>
          Menu
        </button>

        <button onClick={() => navigate("/admin/testimonials")}>
          Testimonials
        </button>

        <button onClick={logout}>
          Logout
        </button>

      </div>

      {/* CONTENT AREA */}
      <div className="admin-content">

        {/* 🔥 THIS WAS MISSING */}
        <Outlet />

      </div>

      {/* LOGOUT MODAL */}
      <ConfirmModal
        isOpen={showLogoutModal}
        title="Logout"
        message="Are you sure you want to logout from admin?"
        confirmText="Logout"
        cancelText="Cancel"
        isDanger={true}
        onConfirm={confirmLogout}
        onCancel={() => setShowLogoutModal(false)}
      />

    </div>
  );
}

export default AdminLayout;