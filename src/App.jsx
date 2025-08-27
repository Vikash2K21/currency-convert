import { useEffect, useState } from "react";
import CurrencySelector from "./components/CurrencySelector";
import RateDisplay from "./components/RateDisplay";

function App() {
  const [currencies, setCurrencies] = useState({});
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [convertError, setConvertError] = useState(null);
  const [history, setHistory] = useState([]);

  // Load currencies
  useEffect(() => {
    fetch("https://api.frankfurter.app/currencies")
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          setCurrencies(json);
        } else {
          setError("Failed to load currencies");
        }
      })
      .catch((err) => {
        console.error("Symbols API error:", err);
        setError("Failed to load currencies");
      });
  }, []);

  // Convert currency
  const convertCurrency = () => {
    if (!amount) {
      setConvertError("Enter an amount to convert");
      return;
    }
    setConvertError(null);

    fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json && json.rates && json.rates[to]) {
          const result = json.rates[to];
          const unitRate = result / amount;

          setRate(unitRate);
          setData({
            date: json.date,
            result: result,
          });

          // Add to history (state only)
          const newEntry = {
            amount,
            from,
            to,
            result,
            rate: unitRate,
            date: json.date,
          };
          setHistory([newEntry, ...history]);

          // Clear input after conversion
          setAmount("");
        } else {
          console.error("API response:", json);
          setConvertError("Invalid response from API");
        }
      })
      .catch((err) => {
        console.error("Conversion error:", err);
        setConvertError("Failed to convert");
      });
  };

  // Clear history
  const clearHistory = () => setHistory([]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        background: "linear-gradient(135deg, #6EE7B7, #3B82F6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: 50,
      }}
    >
      <div
        style={{
          width: 420,
          background: "white",
          padding: 30,
          borderRadius: 16,
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 20, color: "#333" }}>
          💱 Currency Converter
        </h2>

        {/* Amount input */}
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          style={{
            padding: "12px 14px",
            width: "100%",
            borderRadius: 10,
            border: "2px solid #3B82F6",
            fontSize: 16,
            fontWeight: "500",
            background: "linear-gradient(135deg, #F0F9FF, #E0F2FE)",
            color: "#1E3A8A",
            outline: "none",
            marginBottom: 15,
            boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
          }}
        />

        {/* From selector */}
        <CurrencySelector
          label="From:"
          value={from}
          onChange={setFrom}
          currencies={currencies}
        />

        {/* To selector */}
        <CurrencySelector
          label="To:"
          value={to}
          onChange={setTo}
          currencies={currencies}
        />

        {/* Convert button */}
        <button
          onClick={convertCurrency}
          style={{
            width: "100%",
            padding: 12,
            marginTop: 15,
            background: "#3B82F6",
            color: "white",
            border: "none",
            borderRadius: 8,
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          Convert
        </button>

        {/* Error messages */}
        {error && <p style={{ color: "red", marginTop: 12 }}>{error}</p>}
        {convertError && (
          <p style={{ color: "red", marginTop: 12 }}>{convertError}</p>
        )}

        {/* Conversion result */}
        {data && (
          <div
            style={{
              marginTop: 20,
              padding: 15,
              borderRadius: 12,
              background: "#f0f4ff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ margin: 0, color: "#222" }}>
              {currencies[from] || from} = {data.result} {currencies[to] || to}
            </h3>
            <RateDisplay rate={rate} from={from} to={to} date={data.date} />
          </div>
        )}

        {/* Conversion History */}
        {history.length > 0 && (
          <div style={{ marginTop: 30, textAlign: "left" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  color: "#222",
                  borderBottom: "2px solid #3B82F6",
                  paddingBottom: 5,
                }}
              >
                📜 Conversion History
              </h3>
              <button
                onClick={clearHistory}
                style={{
                  background: "#ef4444",
                  color: "white",
                  border: "none",
                  borderRadius: 6,
                  padding: "5px 10px",
                  cursor: "pointer",
                  fontSize: 13,
                }}
              >
                Clear All
              </button>
            </div>

            {history.map((item, index) => (
              <div
                key={index}
                style={{
                  marginTop: 12,
                  padding: 12,
                  borderRadius: 10,
                  background: "linear-gradient(135deg, #4c5d9b, #7992a3)",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                  color: "white",
                }}
              >
                <strong style={{ display: "block", marginBottom: 4 }}>
                  {item.amount} {currencies[item.from] || item.from} ➝{" "}
                  {item.result} {currencies[item.to] || item.to}
                </strong>
                <p style={{ margin: 0, fontSize: 13 }}>
                  1 {item.from} = {item.rate.toFixed(4)} {item.to} | Date:{" "}
                  {item.date}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
