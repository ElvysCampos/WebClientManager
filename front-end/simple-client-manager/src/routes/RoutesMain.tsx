import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import SignupPage from "../pages/Login/SignupPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import { ProtectedRoutes } from "./ProtectedRoutes";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    );
};

export default RoutesMain;