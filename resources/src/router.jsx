import { createBrowserRouter } from "react-router";
import PagesURL from "./constants/PagesURL";
import IndexPage from "./pages/guest/IndexPage";
import DashboardPage from "./pages/auth/DashboardPage";
import RegisterPage from "./pages/guest/RegisterPage";
import GuestLayout from "./layouts/GuestLayout";
import AuthLayout from "./layouts/AuthLayout";
import TermsPage from "./pages/guest/TermsPage";
import PrivacyPage from "./pages/guest/PrivacyPage";
import DocsPage from "./pages/DocsPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./pages/guest/LoginPage";
import BlankLayout from "./layouts/BlankLayout";
import SupportTicketsPage from "./pages/auth/SupportTicketsPage";
import ContactPage from "./pages/guest/ContactPage";

const router = createBrowserRouter([
    {
        path: PagesURL.ROOT.URL,
        element: <GuestLayout />,
        children: [
            {
                path: PagesURL.ROOT.URL,
                element: <IndexPage />,
            },
            {
                path: PagesURL.LOGIN.URL,
                element: <LoginPage />,
            },
            {
                path: PagesURL.REGISTER.URL,
                element: <RegisterPage />,
            },
            {
                path: PagesURL.CONTACT_PAGE.URL,
                element: <ContactPage />,
            },
        ],
    },
    {
        path: PagesURL.ROOT.URL,
        element: <BlankLayout />,
        children: [
            {
                path: PagesURL.TERMS.URL,
                element: <TermsPage />,
            },
            {
                path: PagesURL.PRIVACY.URL,
                element: <PrivacyPage />,
            },
        ],
    },
    {
        path: PagesURL.ROOT.URL,
        element: <AuthLayout />,
        children: [
            {
                path: PagesURL.DASHBOARD.URL,
                element: <DashboardPage />,
            },
            {
                path: PagesURL.SUPPORT_TICKETS.URL,
                element: <SupportTicketsPage />,
            },
        ],
    },
    {
        path: PagesURL.DOCS.URL,
        element: <DocsPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default router;
