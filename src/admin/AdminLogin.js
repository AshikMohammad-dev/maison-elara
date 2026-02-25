import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import ConfirmModal from "./components/ConfirmModal";

import "./admin.css";

function AdminLogin() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState("");

  const login = async () => {

    try{

      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      localStorage.setItem(
        "adminLogged",
        "true"
      );

      window.location.href="/admin/products";

    }
    catch(err){

      setErrorModal("Invalid email or password. Please try again.");

    }
    finally{
      setLoading(false);
    }

  };

  return (

    <div className="admin-login">

      <div className="login-card">

        <h2>Boutique Admin</h2>

        <input
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={login}>

          {loading ? "Signing in..." : "Login"}

        </button>

      </div>

      {/* ERROR MODAL */}
      <ConfirmModal
        isOpen={!!errorModal}
        title="Login Failed"
        message={errorModal}
        confirmText="OK"
        cancelText=""
        isDanger={true}
        onConfirm={() => setErrorModal("")}
        onCancel={() => setErrorModal("")}
      />

    </div>

  );

}

export default AdminLogin;