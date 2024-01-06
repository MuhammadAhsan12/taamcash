import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React ,{useState} from 'react';
import './fonts/font.css';
import SignIn from './screens/Auth/Signin/Signin';
import ForgetPassword from './screens/Auth/ForgetPassword/forgotpassword';
import ForgetPasswordEmail from './screens/Auth/ForgetPasswordEmail/forgetEmail';
import ForgetPasswordPhone from './screens/Auth/ForgetPasswordPhone/forgotPhone';
import Otp from './screens/Auth/Otp/verification';
import NewPasswordField from './screens/Auth/NewPasswordField/newpassword';
import Success from './screens/Auth/Success/success';
import Dashboard from './screens/Dashboard/Dashboard';
import UserManagement from './screens/UserManagement/UserManagement';
import UserManagementView from './screens/UserManagement/UserManagementView';
import TransactionManagement from './screens/TransactionManagement/TransactionManagement';
import TransactionManagementView from './screens/TransactionManagement/TransactionManagementView';
import CardManagement from './screens/CardManagement/CardManagement';
import RequestManagement from './screens/RequestManagement/RequestManagement';
import RequestManagementView from './screens/RequestManagement/RequestManagementView';
import FeeManagement from './screens/FeeManagement/FeeManagement';
import FeeManagementView from './screens/FeeManagement/FeeManagementView';
import ComplainManagement from './screens/ComplainManagement/ComplainManagement';
import NotificationManagement from './screens/NotificationManagement/NotificationManagement';
import PrivacyPolicy from './screens/PrivacyPolicy/PrivacyPolicy';
import PrivacyScreenAdd from "./screens/PrivacyPolicy/PrivacyScreenAdd";
import TermsCondition from './screens/TermsCondition/TermsCondition';
import TermsConditionAdd from './screens/TermsCondition/TermsConditionAdd';
import ComplainManagementView from './screens/ComplainManagement/ComplainManagementView';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
function App() {
  const [closeMenu,setCloseMenu]=useState();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn  />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/forgetpassword/email" element={<ForgetPasswordEmail />} />
        <Route path="/forgetpassword/phone" element={<ForgetPasswordPhone />} />
        <Route path="/otpcode" element={<Otp />} />
        <Route path="/newpassword" element={<NewPasswordField />} />
        <Route path="/success" element={<Success />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/usermanagement" element={<UserManagement />} />
        <Route path="/dashboard/usermanagementview" element={<UserManagementView />} />
        <Route path="/dashboard/transactionmanagement" element={<TransactionManagement />} />
        <Route path="/dashboard/transactionmanagementview" element={<TransactionManagementView />} />
        <Route path="/dashboard/cardmanagement" element={<CardManagement />} />
        <Route path="/dashboard/requestmanagement" element={<RequestManagement />} />
        <Route path="/dashboard/requestmanagementview" element={<RequestManagementView />} />
        <Route path="/dashboard/feemanagement" element={<FeeManagement />} />
        <Route path="/dashboard/feemanagementview" element={<FeeManagementView />} />
        <Route path="/dashboard/complainmanagement" element={<ComplainManagement />} />
        <Route path="/dashboard/complainmanagementview" element={<ComplainManagementView />} />
        <Route path="/dashboard/notificationManagement" element={<NotificationManagement />} />
        <Route path="/dashboard/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/dashboard/privacypolicy/add" element={<PrivacyScreenAdd />} />
        <Route path="/dashboard/termscondition" element={<TermsCondition />} />
        <Route path="/dashboard/termscondition/add" element={<TermsConditionAdd />} />
        <Route path="/dashboard/profile" element={<ProfileScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
