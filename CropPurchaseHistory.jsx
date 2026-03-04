import React, { useState } from 'react';
import { Search, Filter, Download, ChevronRight, Package, CheckCircle2, Clock } from 'lucide-react';
import './kisaan-saathi.css';

const CropPurchaseHistory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');

    const purchaseHistory = [
        {
            id: "ORD-8923",
            crop: "Wheat (Lok-1)",
            date: "02 Mar 2026",
            quantity: "50 Quintals",
            amount: 112500,
            seller: "Ramesh Kumar",
            status: "Completed",
            mandi: "Sehore Mandi",
            image: "🌾"
        },
        {
            id: "ORD-8915",
            crop: "Soybean (JS-9560)",
            date: "28 Feb 2026",
            quantity: "20 Quintals",
            amount: 85000,
            seller: "Suresh Patel",
            status: "Pending Delivery",
            mandi: "Indore Mandi",
            image: "🌱"
        },
        {
            id: "ORD-8890",
            crop: "Cotton (Bt)",
            date: "15 Feb 2026",
            quantity: "15 Quintals",
            amount: 105000,
            seller: "Anand Singh",
            status: "Completed",
            mandi: "Khandwa Mandi",
            image: "☁️"
        },
        {
            id: "ORD-8854",
            crop: "Mustard",
            date: "10 Feb 2026",
            quantity: "10 Quintals",
            amount: 52000,
            seller: "Dilip Sharma",
            status: "Processing",
            mandi: "Morena Mandi",
            image: "🌼"
        }
    ];

    const filteredPurchases = purchaseHistory.filter(purchase => {
        const matchesSearch = purchase.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
            purchase.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            purchase.seller.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = statusFilter === 'All' || purchase.status === statusFilter;
        return matchesSearch && matchesStatus;
    });

    const getStatusBadge = (status) => {
        switch (status) {
            case 'Completed':
                return <span className="ks-badge ks-badge-success"><CheckCircle2 className="ks-icon-micro" /> Completed</span>;
            case 'Pending Delivery':
                return <span className="ks-badge ks-badge-warning"><Clock className="ks-icon-micro" /> Pending</span>;
            case 'Processing':
                return <span className="ks-badge ks-badge-info"><Package className="ks-icon-micro" /> Processing</span>;
            default:
                return <span className="ks-badge ks-badge-neutral">{status}</span>;
        }
    };

    return (
        <div className="ks-dashboard-container">
            <div className="ks-header">
                <div>
                    <h1 className="ks-title">Crop Purchase History</h1>
                    <p className="ks-subtitle">View and manage your recent crop purchases</p>
                </div>
                <button className="ks-btn-outline ks-btn-icon">
                    <Download className="ks-icon-small" /> Export PDF
                </button>
            </div>

            <div className="ks-panel">
                <div className="ks-table-controls">
                    <div className="ks-search-box">
                        <Search className="ks-icon-muted" />
                        <input
                            type="text"
                            placeholder="Search by crop, ID, or seller..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="ks-search-input"
                        />
                    </div>
                    <div className="ks-filter-box">
                        <Filter className="ks-icon-muted" />
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="ks-select"
                        >
                            <option value="All">All Statuses</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending Delivery">Pending Delivery</option>
                            <option value="Processing">Processing</option>
                        </select>
                    </div>
                </div>

                <div className="ks-table-container">
                    <table className="ks-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Crop Details</th>
                                <th>Seller & Mandi</th>
                                <th>Amount & Qty</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPurchases.length > 0 ? (
                                filteredPurchases.map(purchase => (
                                    <tr key={purchase.id}>
                                        <td className="ks-font-medium text-slate-700">{purchase.id}</td>
                                        <td>
                                            <div className="ks-flex-center">
                                                <span className="ks-crop-emoji">{purchase.image}</span>
                                                <div>
                                                    <div className="ks-font-medium text-slate-900">{purchase.crop}</div>
                                                    <div className="ks-text-sm text-slate-500">{purchase.date}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="text-slate-900">{purchase.seller}</div>
                                            <div className="ks-text-sm text-slate-500">{purchase.mandi}</div>
                                        </td>
                                        <td>
                                            <div className="ks-font-semibold text-slate-900">₹{purchase.amount.toLocaleString('en-IN')}</div>
                                            <div className="ks-text-sm text-slate-500">{purchase.quantity}</div>
                                        </td>
                                        <td>{getStatusBadge(purchase.status)}</td>
                                        <td>
                                            <button className="ks-btn-icon-only" title="View Details">
                                                <ChevronRight className="ks-icon-small" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="ks-text-center ks-py-8 text-slate-500">
                                        No purchases found matching your criteria.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CropPurchaseHistory;
