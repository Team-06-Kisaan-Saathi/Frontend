function BuyerStats() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        margin: "20px 0",
      }}
    >
      <div style={statBox("#2563eb")}>📈 Active Markets</div>
      <div style={statBox("#dc2626")}>🔴 Live Auctions</div>
      <div style={statBox("#059669")}>💰 Total Bids</div>
    </div>
  );
}

const statBox = (color) => ({
  padding: "10px 16px",
  background: color,
  color: "white",
  borderRadius: "10px",
  fontSize: "14px",
  fontWeight: "500",
});

export default BuyerStats;
