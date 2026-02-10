import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) navigate("/");
  }, []);

  const uploadImage = async () => {
    if (!image) {
      alert("Please select image");
      return;
    }

    const token = localStorage.getItem("adminToken");

    const formData = new FormData();
    formData.append("image", image);

    try {
      const res = await fetch(
        "http://localhost:5000/api/admin/upload-image",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await res.json();
      setMsg(data.message);
      setImage(null); // clear file after upload
    } catch (err) {
      alert("Upload failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Admin Dashboard</h2>

        {image && (
          <div style={styles.previewContainer}>
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              style={styles.preview}
            />
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          style={styles.fileInput}
        />

        <button style={styles.uploadBtn} onClick={uploadImage}>
          Upload Image
        </button>

        {msg && <p style={styles.msg}>{msg}</p>}

        <button
          style={styles.logoutBtn}
          onClick={() => {
            localStorage.removeItem("adminToken");
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

// Inline styling
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100vh",
    padding: "50px 20px",
    backgroundColor: "#f4f6f8",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px 40px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "450px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "30px",
    color: "#333",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  fileInput: {
    display: "block",
    margin: "20px auto",
    cursor: "pointer",
  },
  uploadBtn: {
    backgroundColor: "#6c63ff",
    color: "#fff",
    border: "none",
    padding: "12px 25px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "15px",
    transition: "background-color 0.3s",
  },
  logoutBtn: {
    backgroundColor: "#ff4d4f",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "10px",
    transition: "background-color 0.3s",
  },
  previewContainer: {
    marginBottom: "15px",
  },
  preview: {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  msg: {
    color: "#28a745",
    fontWeight: "500",
    marginTop: "10px",
  },
};

export default Dashboard;
