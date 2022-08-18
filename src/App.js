/*
Shewale, Kapish(1001870794)
Pagare, Richa(1001873138)
Gutta, Sai Jahnavi(1002011051)
*/ 

import React from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import ResidentLogin from './components/ResidentLogin';
import ApplicationPage from './components/ApplicationPage';
import UserLogin from './components/UserLogin';
import MyProfile from './components/MyProfile';
import AdminLogin from './components/AdminLogin';
import ManageResidents from './components/ManageResidents';
import RegisterService from './components/RegisterService';
import ManageMoveouts from './components/ManageMoveouts';
import RegisterSchool from './components/RegisterSchool';
import RegisterClinic from './components/RegisterClinic';
import RegisterBusiness from './components/RegisterBusiness';
import RegisterFlights from './components/RegisterFlights';
import SuperAdminLogin from './components/SuperAdminLogin';
import ManageAdmin from './components/ManageAdmin';
import ManageCounty from './components/ManageCounty';
import ManageAdminResidents from './components/ManageAdminResidents';
import ViewInsights from './components/ViewInsights';
import EditResidents from './components/EditResidents'
import Blog1 from './components/Blog1'
import Blog2 from './components/Blog2'
import Blog3 from './components/Blog3'
import BlogLanding from './components/BlogLanding'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    
      <Router>
      <div className="container  mb-3">
      <Routes>
            <Route path="/" element={<WelcomePage/>}/>
            <Route exact path="/#master-container" element={<WelcomePage/>}/>
            <Route exact path="/login" element = {<ResidentLogin/>}/>
            <Route exact path="/newreg" element={<ApplicationPage/>}/>
            <Route exact path="/user-login" element={<UserLogin/>}/>
            <Route exact path="/user-profile" element={<MyProfile/>}/>
            <Route exact path="/admin-login" element={<AdminLogin/>}/>
            <Route exact path="/manage-resident" element={<ManageResidents/>}/>  
            <Route exact path="/manage-admin-resident" element={<ManageAdminResidents/>}/>
            <Route exact path="/register-service" element={<RegisterService/>}/>
            <Route exact path="/move-out" element={<ManageMoveouts/>}/>
            <Route exact path="/register-school" element={<RegisterSchool/>}/>
            <Route exact path="/register-clinic" element={<RegisterClinic/>}/>
            <Route exact path="/register-business" element={<RegisterBusiness/>}/>
            <Route exact path="/register-flights" element={<RegisterFlights/>}/>
            <Route exact path="/super-admin-login" element={<SuperAdminLogin/>}/>  
            <Route exact path="/manage-admin" element={<ManageAdmin/>}/>
            <Route exact path="/manage-county" element={<ManageCounty/>}/>
            <Route exact path="/view-insights" element={<ViewInsights/>}/>
            <Route exact path="/edit-residents" element={<EditResidents/>}/>
            <Route exact path="/blog1" element={<Blog1/>}/>
            <Route exact path="/blog2" element={<Blog2/>}/>
            <Route exact path="/blog3" element={<Blog3/>}/>
            <Route exact path="/bloglanding" element={<BlogLanding/>}/>
      </Routes>
      </div>

      </Router>
    </>
  );
}

export default App;