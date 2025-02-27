import React, { useState } from "react";
import { FaArrowUp, FaExchangeAlt, FaChartLine } from "react-icons/fa"; // Icons for feature cards

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "http://localhost:3001/dashboard"; // ✅ Directly redirects to dashboard
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.brand}>TradeNova</h1>
      <p style={styles.subtitle}>Start Your Trading Journey</p>
      <p style={styles.description}>Join the next generation of smart traders</p>

      {/* Sign-up Form with Glow Effect */}
      <div style={styles.formContainer}>
        <h3 style={styles.formTitle}>Create your account</h3>
        <p style={styles.formSubtitle}>Enter your details to begin trading</p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label style={styles.label}>First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="col-md-6">
              <label style={styles.label}>Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mt-3">
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-3">
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mt-3">
            <label style={styles.label}>Trading Experience</label>
            <select
              name="experience"
              className="form-control"
              value={formData.experience}
              onChange={handleChange}
              required
            >
              <option value="">Select your experience level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100 mt-4" style={styles.submitBtn}>
            Create Account
          </button>
        </form>

        <p className="mt-3 text-center" style={styles.signInText}>
          Already have an account? <a href="/signin" style={styles.signInLink}>Sign in</a>
        </p>
      </div>

      {/* Feature Cards Section */}
      <div style={styles.featureContainer}>
        <FeatureCard title="Pro Trading Tools" icon={<FaArrowUp />} />
        <FeatureCard title="Market Analysis" icon={<FaExchangeAlt />} />
        <FeatureCard title="Live Charts" icon={<FaChartLine />} />
      </div>
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({ title, icon }) => {
  return (
    <div style={styles.featureCard}>
      <div style={styles.icon}>{icon}</div>
      <p style={styles.featureTitle}>{title}</p>
    </div>
  );
};

// Styles Object
const styles = {
  container: {
    backgroundColor: "#000",
    color: "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
  brand: {
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#fff",
  },
  description: {
    fontSize: "1rem",
    color: "#ccc",
    marginBottom: "20px",
  },
  formContainer: {
    backgroundColor: "#111",
    padding: "30px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "450px",
    boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.5)", // White glow effect
  },
  formTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  formSubtitle: {
    fontSize: "0.9rem",
    color: "#bbb",
    marginBottom: "15px",
  },
  label: {
    fontSize: "0.9rem",
    color: "#ccc",
    marginBottom: "5px",
  },
  submitBtn: {
    backgroundColor: "#fff",
    color: "#000",
    borderColor: "#fff",
    fontSize: "1rem",
    fontWeight: "bold",
    padding: "10px",
    transition: "0.3s",
  },
  signInText: {
    fontSize: "0.9rem",
    color: "#bbb",
  },
  signInLink: {
    color: "#fff",
    textDecoration: "none",
  },
  featureContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "30px",
  },
  featureCard: {
    backgroundColor: "#111",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    minWidth: "140px",
    maxWidth: "180px",
    transition: "0.3s",
    cursor: "pointer",
    boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)", // White glow effect
  },
  featureTitle: {
    fontSize: "0.9rem",
    marginTop: "5px",
    color: "#fff",
  },
  icon: {
    fontSize: "24px",
    color: "#fff",
  },
};

export default Signup;
