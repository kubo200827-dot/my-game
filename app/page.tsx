export default function Home() {
  return (
    <main style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom, #7c3aed, #2563eb)",
      color: "white",
      fontFamily: "sans-serif"
    }}>
      <div style={{
        background: "rgba(255,255,255,0.15)",
        padding: "30px",
        borderRadius: "20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "32px", fontWeight: "bold" }}>
          Game Lobby
        </h1>

        <p style={{ opacity: 0.8 }}>
          Your first working version 🎮
        </p>

        <button style={{
          marginTop: "20px",
          padding: "12px 20px",
          borderRadius: "12px",
          background: "yellow",
          color: "black",
          fontWeight: "bold",
          border: "none"
        }}>
          Play
        </button>
      </div>
    </main>
  );
}
