function BuyerCard({ title, desc, color, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "25px",
        borderRadius: "16px",
        backgroundColor: color,
        color: "white",
        cursor: "pointer",
        boxShadow: "0 6px 15px rgba(0,0,0,0.15)",
        minHeight: "150px",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3 style={{ marginBottom: "8px" }}>{title}</h3>
      <p style={{ fontSize: "14px", opacity: 0.9 }}>{desc}</p>
    </div>
  );
}

export default BuyerCard;
