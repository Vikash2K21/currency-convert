// src/components/RateDisplay.jsx
function RateDisplay({ rate, from, to, date }) {
  if (!rate) return null;

  return (
    <div
      style={{
        marginTop: 20,
        padding: "18px 22px",
        borderRadius: 14,
        background: "linear-gradient(135deg, #4F46E5, #3B82F6)", // violet → blue
        color: "#fff",
        boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <p style={{ margin: "10px 0", fontSize: 20, fontWeight: "bold" }}>
        💱 1{" "}
        <span style={{ color: "#FBBF24", fontWeight: "bold" }}>{from}</span> ={" "}
        <span style={{ color: "#34D399", fontWeight: "bold" }}>
          {rate.toFixed(4)}
        </span>{" "}
        <span style={{ color: "#FBBF24", fontWeight: "bold" }}>{to}</span>
      </p>

      <small
        style={{
          display: "block",
          marginTop: 8,
          fontSize: 14,
          color: "#E0E7FF", // light lavender
          fontWeight: "500",
        }}
      >
        📅 Date: {date}
      </small>
    </div>
  );
}

export default RateDisplay;
