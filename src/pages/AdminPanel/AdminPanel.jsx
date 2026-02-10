// import { useState } from "react";



// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "#f5f5f5",
//   },
//   form: {
//     backgroundColor: "#fff",
//     padding: "30px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//     width: "350px",
//     textAlign: "center",
//     fontFamily: "Arial, sans-serif",
//   },
//   heading: {
//     marginBottom: "20px",
//     color: "#333",
//   },
//   input: {
//     width: "100%",
//     padding: "10px 15px",
//     margin: "10px 0",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//     fontSize: "14px",
//     outline: "none",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     marginTop: "15px",
//     borderRadius: "5px",
//     border: "none",
//     backgroundColor: "#800000", // maroon (tumhara favorite 😉)
//     color: "#fff",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
//   switchText: {
//     marginTop: "15px",
//     fontSize: "14px",
//   },
//   switchLink: {
//     color: "#800000",
//     cursor: "pointer",
//     fontWeight: "bold",
//   },
// };


// const AdminAuth = () => {
//   const [isRegister, setIsRegister] = useState(false);

//   const [loginForm, setLoginForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [registerForm, setRegisterForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleLoginChange = (e) => {
//     setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
//   };

//   const handleRegisterChange = (e) => {
//     setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
//   };

//   const handleLoginSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login:", loginForm);
//   };

//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/admin/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(registerForm),
//       });

//       const data = await res.json();
//       alert(data.message);
//       setIsRegister(false); // register ke baad login dikhao
//     } catch (err) {
//       alert("Server error");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form
//         style={styles.form}
//         onSubmit={isRegister ? handleRegisterSubmit : handleLoginSubmit}
//       >
//         <h2 style={styles.heading}>
//           {isRegister ? "Admin Register" : "Admin Login"}
//         </h2>

//         {isRegister && (
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={registerForm.name}
//             onChange={handleRegisterChange}
//             style={styles.input}
//           />
//         )}

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={isRegister ? registerForm.email : loginForm.email}
//           onChange={isRegister ? handleRegisterChange : handleLoginChange}
//           style={styles.input}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={isRegister ? registerForm.password : loginForm.password}
//           onChange={isRegister ? handleRegisterChange : handleLoginChange}
//           style={styles.input}
//         />

//         <button type="submit" style={styles.button}>
//           {isRegister ? "Register" : "Login"}
//         </button>

//         <p style={styles.switchText}>
//           {isRegister ? "Already have an account?" : "Don’t have an account?"}{" "}
//           <span
//             style={styles.switchLink}
//             onClick={() => setIsRegister(!isRegister)}
//           >
//             {isRegister ? "Login here" : "Register here"}
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default AdminAuth;
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "350px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px 15px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#800000",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
  switchText: {
    marginTop: "15px",
    fontSize: "14px",
  },
  switchLink: {
    color: "#800000",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

const AdminAuth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dashboardData, setDashboardData] = useState(null);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
  });
const navigate = useNavigate();

  // ---------------- LOGIN ----------------
  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

 const handleLoginSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      return;
    }

    // ✅ token save
    localStorage.setItem("adminToken", data.token);

    alert("Admin Login Successful ✅");

    navigate("/dashboard");

  } catch (err) {
    alert("Server error");
  }
};


  // ---------------- REGISTER ----------------
  const handleRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerForm),
      });

      const data = await res.json();
      alert(data.message);
      setIsRegister(false);

    } catch (err) {
      alert("Server error");
    }
  };

  // ---------------- DASHBOARD ----------------
  const fetchDashboard = async () => {
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch("http://localhost:5000/api/admin/dashboard", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Unauthorized ❌");
        return;
      }

      setDashboardData(data);

    } catch (err) {
      console.log(err);
    }
  };

  // ---------------- LOGOUT ----------------
  const logout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
    setDashboardData(null);
  };

  // ---------------- UI ----------------
  if (isLoggedIn && dashboardData) {
    return (
      <div style={styles.container}>
        <div style={styles.form}>
          <h2 style={styles.heading}>Admin Dashboard</h2>
          <p>{dashboardData.message}</p>

          <button style={styles.button} onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <form
        style={styles.form}
        onSubmit={isRegister ? handleRegisterSubmit : handleLoginSubmit}
      >
        <h2 style={styles.heading}>
          {isRegister ? "Admin Register" : "Admin Login"}
        </h2>

        {isRegister && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={registerForm.name}
            onChange={handleRegisterChange}
            style={styles.input}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={isRegister ? registerForm.email : loginForm.email}
          onChange={isRegister ? handleRegisterChange : handleLoginChange}
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={isRegister ? registerForm.password : loginForm.password}
          onChange={isRegister ? handleRegisterChange : handleLoginChange}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          {isRegister ? "Register" : "Login"}
        </button>

        <p style={styles.switchText}>
          {isRegister ? "Already have an account?" : "Don’t have an account?"}{" "}
          <span
            style={styles.switchLink}
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login here" : "Register here"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default AdminAuth;
