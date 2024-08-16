import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Orders from './components/Orders';
import Returns from './components/Returns';
import Customers from './components/Customers';
import Shipping from './components/Shipping';
import Channel from './components/Channel';
import Integrations from './components/Integrations';
import Calculators from './components/Calculators';
import Reports from './components/Reports';
import Account from './components/Account';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'inventory':
        return <Inventory />;
      case 'orders':
        return <Orders />;
      case 'returns':
        return <Returns />;
      case 'customers':
        return <Customers />;
      case 'shipping':
        return <Shipping />;
      case 'channel':
        return <Channel />;
      case 'integrations':
        return <Integrations />;
      case 'calculators':
        return <Calculators />;
      case 'reports':
        return <Reports />;
      case 'account':
        return <Account />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="content-area">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
