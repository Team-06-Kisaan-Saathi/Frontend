import React, { useState } from 'react';
import './SeasonalBuyingTrends.css';

const SeasonalBuyingTrends = () => {
  const [selectedCrop, setSelectedCrop] = useState('Wheat');
  
  // Mock data for seasonal trends
  const trendData = {
    Wheat: [
      { month: 'October', demand: 'High', price: '₹2200/qtl' },
      { month: 'November', demand: 'Very High', price: '₹2400/qtl' },
      { month: 'December', demand: 'Medium', price: '₹2100/qtl' },
      { month: 'January', demand: 'Low', price: '₹1900/qtl' },
      { month: 'February', demand: 'Low', price: '₹1900/qtl' },
      { month: 'March', demand: 'High', price: '₹2300/qtl' },
    ],
    Rice: [
      { month: 'June', demand: 'High', price: '₹2000/qtl' },
      { month: 'July', demand: 'Very High', price: '₹2200/qtl' },
      { month: 'August', demand: 'Medium', price: '₹1900/qtl' },
      { month: 'September', demand: 'Medium', price: '₹1900/qtl' },
      { month: 'October', demand: 'High', price: '₹2100/qtl' },
      { month: 'November', demand: 'High', price: '₹2100/qtl' },
    ]
  };

  return (
    <div className="trends-container">
      <h2>Seasonal Buying Trends</h2>
      <div className="crop-selector">
        <label>Select Crop: </label>
        <select value={selectedCrop} onChange={(e) => setSelectedCrop(e.target.value)}>
          <option value="Wheat">Wheat</option>
          <option value="Rice">Rice</option>
        </select>
      </div>

      <div className="trends-table-wrap">
        <table className="trends-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Market Demand</th>
              <th>Estimated Price</th>
            </tr>
          </thead>
          <tbody>
            {trendData[selectedCrop].map((data, index) => (
              <tr key={index}>
                <td>{data.month}</td>
                <td>
                  <span className={`badge ${data.demand.toLowerCase().replace(' ', '-')}`}>
                    {data.demand}
                  </span>
                </td>
                <td>{data.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeasonalBuyingTrends;
