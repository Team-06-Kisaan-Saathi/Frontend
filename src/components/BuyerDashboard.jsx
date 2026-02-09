import BuyerCard from "./BuyerCard";
import BuyerStats from "./BuyerStats";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function BuyerDashboard() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px" }}>
      {/* HEADER */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2>{t("buyer.buyerDashboard")}</h2>
          <p>{t("buyer.buyerDesc")}</p>
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {/* ALERT ICON */}
          <div style={{ position: "relative", cursor: "pointer" }}>
            🔔
            <span
              style={{
                position: "absolute",
                top: "-4px",
                right: "-4px",
                height: "8px",
                width: "8px",
                backgroundColor: "red",
                borderRadius: "50%",
              }}
            ></span>
          </div>

          {/* LOGOUT */}
          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            style={{
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* STATS */}
      <BuyerStats />

      {/* CARDS GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {/* TOP ROW (3) */}
        <BuyerCard
          title={t("buyer.marketplace")}
          desc={t("buyer.marketplaceDesc")}
          color="#2563eb"
          onClick={() => navigate("/marketplace")}
        />

        <BuyerCard
          title={t("buyer.liveAuctions")}
          desc={t("buyer.liveAuctionsDesc")}
          color="#dc2626"
          onClick={() => navigate("/buyer-live-auctions")}
        />

        <BuyerCard
          title={t("buyer.myBids")}
          desc={t("buyer.myBidsDesc")}
          color="#059669"
          onClick={() => navigate("/buyer-bids")}
        />

        {/* BOTTOM ROW (2) */}
        <BuyerCard
          title={t("buyer.marketInsights")}
          desc={t("buyer.marketInsightsDesc")}
          color="#7c3aed"
          onClick={() => navigate("/market-insights")}
        />

        <BuyerCard
          title={t("buyer.trustedFarmers")}
          desc={t("buyer.trustedFarmersDesc")}
          color="#1e40af"
          onClick={() => navigate("/trusted-farmers")}
        />
      </div>
    </div>
  );
}

export default BuyerDashboard;
