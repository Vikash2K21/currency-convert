// src/components/CurrencySelector.jsx
function CurrencySelector({ label, value, onChange, currencies }) {
  return (
    <div style={{ flex: 1, margin: "0 8px" }}>
      <label
        style={{
          display: "block",
          marginBottom: 6,
          fontWeight: "bold",
          color: "#1E3A8A", // deep blue
          fontSize: 15,
        }}
      >
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: "10px 12px",
          width: "100%",
          borderRadius: 10,
          border: "2px solid #3B82F6", // bright blue border
          fontSize: 15,
          fontWeight: "500",
          background:
            "linear-gradient(135deg, #E0F2FE, #DBEAFE)", // light blue gradient
          color: "#1E3A8A", // dark blue text
          outline: "none",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          transition: "all 0.2s ease-in-out",
        }}
        onMouseOver={(e) =>
          (e.target.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)")
        }
        onMouseOut={(e) =>
          (e.target.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)")
        }
      >
        <option value="">-- Select Currency --</option>
        {currencies &&
          Object.keys(currencies).map((code) => (
            <option key={code} value={code}>
              {code} — {currencies[code]}
            </option>
          ))}
      </select>
    </div>
  );
}

export default CurrencySelector;
