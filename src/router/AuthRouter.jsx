import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

import '../css/login-register.css';

export const AuthRouter = () => {
    return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100 p-t-50 p-b-90">
          <Routes>
            <Route exact path="/auth/login" element={ <LoginPage /> } />
            <Route exact path="/auth/register" element={ <RegisterPage /> } />
            {/* <Redirect to="/auth/login" /> */}
          </Routes>
        </div>
      </div>
    </div>
    )
}
