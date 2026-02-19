import React from "react";

const Home = () => {
  return (
    
    <div style={styles.container}>

      <nav style={styles.navbar}>
        <h2 style={styles.logo}>MyApp</h2>
        <ul style={styles.navLinks}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section style={styles.hero}>
        <h1>Welcome to MyApp</h1>
        <p>
          Build fast, scalable, and modern web applications with ease.
        </p>
        <button style={styles.button}>Get Started</button>
      </section>
    
      <section style={styles.features}>
        <div style={styles.card}>
          <h3>Fast</h3>
          <p>Optimized performance and quick load times.</p>
        </div>
        <div style={styles.card}>
          <h3>Secure</h3>
          <p>Best practices to keep your data safe.</p>
        </div>
        <div style={styles.card}>
          <h3>Scalable</h3>
          <p>Grow your app without rewriting everything.</p>
        </div>
      </section>

      <footer style={styles.footer}>
        <p>© 2026 MyApp. All rights reserved.</p>
      </footer>
    
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 40px",
    backgroundColor: "#222",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
    cursor: "pointer",
  },
  hero: {
    textAlign: "center",
    padding: "80px 20px",
    backgroundColor: "#f5f5f5",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  features: {
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    padding: "60px 20px",
  },
  card: {
    width: "250px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#222",
    color: "#fff",
  },
};

export default Home;
