import React from "react";
import { Navigate, Outlet } from "react-router";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import Background from "../components/Background";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import PagesURL from "../constants/PagesURL";
import LoadingComponent from "../components/LoadingComponent";

const GuestLayout = () => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const status = useSelector((state) => state.auth.status);

    if (status == "loading") return <LoadingComponent />;

    // Check User unAuthenticated
    if (status == "succeeded" && isAuthenticated) {
        return <Navigate to={PagesURL.DASHBOARD.URL} replace />;
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden relative">
            <Toaster position="top-center" reverseOrder={false} />
            {/* Background Layer - Fixed position with all effects */}
            <Background />

            {/* Header Layer - Fixed navigation */}
            <HeaderComponent />

            {/* Main Content Layer */}
            <main className="relative z-20">
                <Outlet />
            </main>

            {/* Footer Layer */}
            <FooterComponent />
        </div>
    );
};

export default GuestLayout;
