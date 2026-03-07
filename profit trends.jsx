import React, { useState } from 'react';
import './ProfitEstimationTool.css';

const ProfitEstimationTool = () => {
  const [formData, setFormData] = useState({
    cropName: '',
    landArea: 1, // in acres
    estimatedYieldPerAcre: 0, // in quintals
    expectedMarketPrice: 0, // per quintal
    seedCost: 0,
    fertilizerCost: 0,
    laborCost: 0,
    transportCost: 0,
    otherCosts: 0
  });

  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      // Parse to float to safely perform math operations
      [name]: parseFloat(value) || value
    }));
  };

  const calculateProfit = (e) => {
    e.preventDefault();
    const totalYield = formData.landArea * formData.estimatedYieldPerAcre;
    const totalRevenue = totalYield * formData.expectedMarketPrice;
    
    // Expenses scale with the amount of land area
    const totalExpenses = formData.landArea * (
      formData.seedCost + 
      formData.fertilizerCost + 
      formData.laborCost + 
      formData.transportCost + 
      formData.otherCosts
    );

    const netProfit = totalRevenue - totalExpenses;

    setResult({
      totalRevenue,
      totalExpenses,
      netProfit,
      profitMargin: totalRevenue > 0 ? ((netProfit / totalRevenue) * 100).toFixed(2) : 0
    });
  };

  return (
    <div className="profit-estimator-container">
      <h2>Profit Estimation Tool</h2>
      <p className="subtitle">Calculate your estimated expenses and potential profit for the season.</p>
      
      <form onSubmit={calculateProfit} className="estimator-form">
        <div className="form-group-full">
          <label>Crop Name</label>
          <input type="text" name="cropName" placeholder="e.g. Wheat, Sugarcane" value={formData.cropName} onChange={handleInputChange} required />
        </div>
        
        <div className="form-group-full">
          <label>Total Land Area (Acres)</label>
          <input type="number" name="landArea" min="0.1" step="0.1" value={formData.landArea} onChange={handleInputChange} required />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Expected Yield / Acre (Quintals)</label>
            <input type="number" name="estimatedYieldPerAcre" value={formData.estimatedYieldPerAcre} onChange={handleInputChange} required />
          </div>
          <div className="form-group">
            <label>Market Price / Quintal (₹)</label>
            <input type="number" name="expectedMarketPrice" value={formData.expectedMarketPrice} onChange={handleInputChange} required />
          </div>
        </div>

        <div className="expenses-section">
          <h3>Estimated Expenses (Per Acre)</h3>
          <div className="form-row">
            <div className="form-group">
              <label>Seeds Cost (₹)</label>
              <input type="number" name="seedCost" value={formData.seedCost} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Fertilizers & Pesticides (₹)</label>
              <input type="number" name="fertilizerCost" value={formData.fertilizerCost} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Labor & Machinery (₹)</label>
              <input type="number" name="laborCost" value={formData.laborCost} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label>Transport Cost (₹)</label>
              <input type="number" name="transportCost" value={formData.transportCost} onChange={handleInputChange} />
            </div>
          </div>
          <div className="form-group-full">
            <label>Other Costs (₹)</label>
            <input type="number" name="otherCosts" value={formData.otherCosts} onChange={handleInputChange} />
          </div>
        </div>

        <button type="submit" className="calculate-btn">Calculate Profit</button>
      </form>

      {result && (
        <div className={`result-card ${result.netProfit >= 0 ? 'profit-positive' : 'profit-negative'}`}>
          <h3>Estimation Results</h3>
          <div className="result-grid">
            <div className="result-item">
              <span>Total Revenue:</span>
              <strong>₹{result.totalRevenue.toLocaleString()}</strong>
            </div>
            <div className="result-item">
              <span>Total Expenses:</span>
              <strong>₹{result.totalExpenses.toLocaleString()}</strong>
            </div>
            <div className="result-item highlight">
              <span>Estimated Net Profit:</span>
              <strong>₹{result.netProfit.toLocaleString()}</strong>
            </div>
            <div className="result-item">
              <span>Profit Margin:</span>
              <strong>{result.profitMargin}%</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfitEstimationTool;
