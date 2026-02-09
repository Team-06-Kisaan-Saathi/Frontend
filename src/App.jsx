import Login from "./components/Login";
import Roleselection from "./components/Roleselection";
import Signup from "./components/Signup";
import Verify from "./components/Verify";
import FarmerDashboard from "./components/Farmerdashboard";
import CropListingForm from "./components/CropListingForm";
import FarmerPreferences from "./components/FarmerPreferences";
import BuyerDashboard from "./components/BuyerDashboard";
import VoiceNav from "./components/VoiceNav";
import Accessibility from "./components/Accessibility";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <VoiceNav />
      <Accessibility />

      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />

        {/* Farmer Routes */}
        <Route path="/farmer-preferences" element={<FarmerPreferences />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
        <Route path="/add-crop" element={<CropListingForm />} />

        {/* Buyer Route */}
        <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
        {/* Buyer Routes */}
<Route path="/buyer-dashboard" element={<BuyerDashboard />} />

<Route path="/marketplace" element={<div>Marketplace Page</div>} />
<Route path="/buyer-live-auctions" element={<div>Buyer Live Auctions</div>} />
<Route path="/buyer-bids" element={<div>My Bids Page</div>} />
<Route path="/market-insights" element={<div>Market Insights</div>} />
<Route path="/trusted-farmers" element={<div>Trusted Farmers</div>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
