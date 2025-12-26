
import React, { useState, useEffect } from 'react';
import LoginScreen from './screens/LoginScreen';
import DashboardHome from './screens/DashboardHome';
import UsersList from './screens/UsersList';
import UserDetail from './screens/UserDetail';
import MarketplaceAnalytics from './screens/MarketplaceAnalytics';
import BillingAnalytics from './screens/BillingAnalytics';
import SettingsScreen from './screens/SettingsScreen';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import { User } from './types';

type Screen = 'login' | 'dashboard' | 'users' | 'user-detail' | 'analytics' | 'billing' | 'settings';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen('login');
  };

  const navigateToUser = (user: User) => {
    setSelectedUser(user);
    setCurrentScreen('user-detail');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'dashboard':
        return <DashboardHome />;
      case 'users':
        return <UsersList onSelectUser={navigateToUser} />;
      case 'user-detail':
        return selectedUser ? (
          <UserDetail user={selectedUser} onBack={() => setCurrentScreen('users')} />
        ) : (
          <UsersList onSelectUser={navigateToUser} />
        );
      case 'analytics':
        return <MarketplaceAnalytics />;
      case 'billing':
        return <BillingAnalytics />;
      case 'settings':
        return <SettingsScreen onLogout={handleLogout} />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {isAuthenticated && (
        <Header 
          onProfileClick={() => setCurrentScreen('settings')} 
          onLogoClick={() => setCurrentScreen('dashboard')}
        />
      )}
      
      <main className={`flex-grow pb-24 ${!isAuthenticated ? 'flex items-center justify-center' : 'pt-4'}`}>
        {renderScreen()}
      </main>

      {isAuthenticated && (
        <BottomNav 
          activeTab={currentScreen === 'user-detail' ? 'users' : currentScreen} 
          setActiveTab={(tab) => setCurrentScreen(tab as Screen)} 
        />
      )}
    </div>
  );
};

export default App;
