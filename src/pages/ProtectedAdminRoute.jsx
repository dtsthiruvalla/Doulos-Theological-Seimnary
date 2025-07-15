import React, { useState, useEffect } from 'react';
import AdminLogin from '../components/AdminLogin';
import AdminPanel from './AdminPanel';

const ProtectedAdminRoute = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user is already authenticated (stored in localStorage)
        const authStatus = localStorage.getItem('admin_authenticated');
        if (authStatus === 'true') {
            setIsAuthenticated(true);
        }
        setIsLoading(false);
    }, []);

    const handleLogin = (authenticated) => {
        setIsAuthenticated(authenticated);
        if (authenticated) {
            localStorage.setItem('admin_authenticated', 'true');
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('admin_authenticated');
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 dark:text-gray-300">Loading...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    return <AdminPanel onLogout={handleLogout} />;
};

export default ProtectedAdminRoute;
