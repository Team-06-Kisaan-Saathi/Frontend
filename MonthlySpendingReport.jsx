import React, { useState } from 'react';
import { CreditCard, Calendar, TrendingUp, Wallet, ArrowUpRight, ArrowDownRight, PieChart } from 'lucide-react';
import './kisaan-saathi.css';

const MonthlySpendingReport = () => {
    const [selectedMonth, setSelectedMonth] = useState('March 2026');

    // Dummy data for spending categories
    const spendingCategories = [
        { id: 1, name: 'Seeds & Saplings', amount: 15400, percentage: 35, color: '#10b981' }, // emerald-500
        { id: 2, name: 'Fertilizers & Pesticides', amount: 12000, percentage: 27, color: '#3b82f6' }, // blue-500
        { id: 3, name: 'Machinery Rent', amount: 8500, percentage: 19, color: '#f59e0b' }, // amber-500
        { id: 4, name: 'Labor Costs', amount: 6200, percentage: 14, color: '#ef4444' }, // red-500
        { id: 5, name: 'Others', amount: 2100, percentage: 5, color: '#8b5cf6' } // violet-500
    ];

    const totalSpent = spendingCategories.reduce((acc, curr) => acc + curr.amount, 0);
    const budget = 50000;
    const variance = budget - totalSpent;

    return (
        <div className="ks-dashboard-container">
            <div className="ks-header">
                <div>
                    <h1 className="ks-title">Monthly Spending Report</h1>
                    <p className="ks-subtitle">Track your farming expenses and budget</p>
                </div>
                <div className="ks-month-selector">
                    <Calendar className="ks-icon-small" />
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="ks-select"
                    >
                        <option value="January 2026">January 2026</option>
                        <option value="February 2026">February 2026</option>
                        <option value="March 2026">March 2026</option>
                    </select>
                </div>
            </div>

            <div className="ks-stats-grid">
                <div className="ks-stat-card">
                    <div className="ks-stat-header">
                        <span className="ks-stat-title">Total Spent</span>
                        <div className="ks-icon-container bg-emerald-light">
                            <Wallet className="ks-icon-emerald" />
                        </div>
                    </div>
                    <div className="ks-stat-value">₹{totalSpent.toLocaleString('en-IN')}</div>
                    <div className="ks-stat-footer">
                        <span className="ks-trend positive">
                            <ArrowDownRight className="ks-icon-tiny" /> 12%
                        </span>
                        <span className="ks-stat-caption">from last month</span>
                    </div>
                </div>

                <div className="ks-stat-card">
                    <div className="ks-stat-header">
                        <span className="ks-stat-title">Monthly Budget</span>
                        <div className="ks-icon-container bg-blue-light">
                            <CreditCard className="ks-icon-blue" />
                        </div>
                    </div>
                    <div className="ks-stat-value">₹{budget.toLocaleString('en-IN')}</div>
                    <div className="ks-stat-footer">
                        <div className="ks-progress-bar">
                            <div
                                className="ks-progress-fill bg-blue"
                                style={{ width: `${(totalSpent / budget) * 100}%` }}
                            ></div>
                        </div>
                        <span className="ks-stat-caption">{((totalSpent / budget) * 100).toFixed(1)}% used</span>
                    </div>
                </div>

                <div className="ks-stat-card">
                    <div className="ks-stat-header">
                        <span className="ks-stat-title">Variance</span>
                        <div className="ks-icon-container bg-amber-light">
                            <TrendingUp className="ks-icon-amber" />
                        </div>
                    </div>
                    <div className="ks-stat-value">₹{Math.abs(variance).toLocaleString('en-IN')}</div>
                    <div className="ks-stat-footer">
                        <span className="ks-stat-caption">{variance >= 0 ? 'Under budget' : 'Over budget'} this month</span>
                    </div>
                </div>
            </div>

            <div className="ks-content-grid">
                <div className="ks-panel ks-panel-span-2">
                    <div className="ks-panel-header">
                        <h2 className="ks-panel-title">Expense Breakdown</h2>
                        <PieChart className="ks-icon-muted" />
                    </div>
                    <div className="ks-category-list">
                        {spendingCategories.map(category => (
                            <div key={category.id} className="ks-category-item">
                                <div className="ks-category-info">
                                    <div
                                        className="ks-category-color"
                                        style={{ backgroundColor: category.color }}
                                    ></div>
                                    <span className="ks-category-name">{category.name}</span>
                                </div>
                                <div className="ks-category-bars">
                                    <div className="ks-bar-bg">
                                        <div
                                            className="ks-bar-fill"
                                            style={{
                                                width: `${category.percentage}%`,
                                                backgroundColor: category.color
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className="ks-category-stats">
                                    <span className="ks-category-amount">₹{category.amount.toLocaleString('en-IN')}</span>
                                    <span className="ks-category-percent">{category.percentage}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlySpendingReport;
