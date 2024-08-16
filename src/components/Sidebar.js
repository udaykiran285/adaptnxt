import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveTab }) => {
  const [activeTab, setActiveTabState] = useState('dashboard');
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveTabState(tab);
    if (window.innerWidth <= 768) {
      setIsOpen(false);  // Close sidebar after selecting a tab on small screens
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="btn btn-dark d-md-none"
        onClick={toggleSidebar}
        style={{ margin: '10px' }}
      >
        <i className="fas fa-bars"></i>
      </button>
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        <div
          className={`sidebar-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => handleTabClick('dashboard')}
        >
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'inventory' ? 'active' : ''}`}
          onClick={() => handleTabClick('inventory')}
        >
          <i className="fas fa-warehouse"></i>
          <span>Inventory</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'orders' ? 'active' : ''}`}
          onClick={() => handleTabClick('orders')}
        >
          <i className="fas fa-shopping-cart"></i>
          <span>Orders</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'returns' ? 'active' : ''}`}
          onClick={() => handleTabClick('returns')}
        >
          <i className="fas fa-undo-alt"></i>
          <span>Returns</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'customers' ? 'active' : ''}`}
          onClick={() => handleTabClick('customers')}
        >
          <i className="fas fa-users"></i>
          <span>Customers</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'shipping' ? 'active' : ''}`}
          onClick={() => handleTabClick('shipping')}
        >
          <i className="fas fa-shipping-fast"></i>
          <span>Shipping</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'channel' ? 'active' : ''}`}
          onClick={() => handleTabClick('channel')}
        >
          <i className="fas fa-store"></i>
          <span>Channel</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'integrations' ? 'active' : ''}`}
          onClick={() => handleTabClick('integrations')}
        >
          <i className="fas fa-plug"></i>
          <span>Integrations</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'calculators' ? 'active' : ''}`}
          onClick={() => handleTabClick('calculators')}
        >
          <i className="fas fa-calculator"></i>
          <span>Calculators</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'reports' ? 'active' : ''}`}
          onClick={() => handleTabClick('reports')}
        >
          <i className="fas fa-chart-bar"></i>
          <span>Reports</span>
        </div>
        <div
          className={`sidebar-item ${activeTab === 'account' ? 'active' : ''}`}
          onClick={() => handleTabClick('account')}
        >
          <i className="fas fa-cog"></i>
          <span>Account</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
