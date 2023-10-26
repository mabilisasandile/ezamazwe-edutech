import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './user_pages/Login';
import LoginCMS from './cms_pages/LoginCMS';
import ResetPasswordCMS from './cms_pages/ResetPasswordCMS';
import { Home } from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginCMS" element={<LoginCMS />} />
        <Route path="/ResetPassword" element={<ResetPasswordCMS />} />
      </Routes>
    </Router>
  );
}

export default App;
