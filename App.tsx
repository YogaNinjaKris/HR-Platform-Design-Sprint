import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import EmployeeDashboard from './pages/EmployeeDashboard';
import SkillsPage from './pages/SkillsPage';
import SocialClub from './pages/SocialClub';
import ManagerDashboard from './pages/ManagerDashboard';
import { currentUser, recommendedCourses } from './mockData';
import { UserRole } from './types';

const App: React.FC = () => {
  // State to simulate persona switching for the prototype
  const [role, setRole] = useState<UserRole>(UserRole.EMPLOYEE);
  const user = { ...currentUser, role };

  const toggleRole = () => {
    setRole(prev => prev === UserRole.EMPLOYEE ? UserRole.MANAGER : UserRole.EMPLOYEE);
  };

  return (
    <HashRouter>
      <Layout user={user} currentRole={role} onToggleRole={toggleRole}>
        <Routes>
          {/* Employee Routes */}
          <Route path="/" element={
            role === UserRole.EMPLOYEE 
              ? <EmployeeDashboard user={user} courses={recommendedCourses} />
              : <Navigate to="/manager" replace />
          } />
          <Route path="/skills" element={<SkillsPage user={user} />} />
          <Route path="/social-club" element={<SocialClub />} />
          <Route path="/learning" element={<div className="p-8 text-center text-slate-500">Learning Path Module (Coming Soon)</div>} />

          {/* Manager Routes */}
          <Route path="/manager" element={
            role === UserRole.MANAGER 
              ? <ManagerDashboard />
              : <Navigate to="/" replace />
          } />
          <Route path="/approvals" element={<div className="p-8 text-center text-slate-500">Approvals Module (Coming Soon)</div>} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;