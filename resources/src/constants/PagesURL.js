import { AiFillBank } from "react-icons/ai";
import { IoLogInOutline } from "react-icons/io5";
import { FaTerminal } from "react-icons/fa";
import { GiStrikingDiamonds } from "react-icons/gi";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdOutlineErrorOutline } from "react-icons/md";
import { IoIosHelpBuoy } from "react-icons/io";

const PagesURL = {
    ROOT: {
        TITLE: "Earn Money Online",
        URL: "/",
        ICON: AiFillBank,
    },
    LOGIN: {
        TITLE: "Login",
        URL: "/login",
        ICON: IoLogInOutline,
    },
    DISCORD_DASHBOARD: {
        TITLE: "Discord Dashboard",
        URL: "/discord/dashboard",
        ICON: IoLogInOutline,
    },
    SUPPORT_TICKETS: {
        TITLE: "Support Tickets",
        URL: "/support-tickets",
        ICON: IoLogInOutline,
    },
    CONTACT_PAGE: {
        TITLE: "Contact Us",
        URL: "/contact",
        ICON: IoLogInOutline,
    },
    REGISTER: {
        TITLE: "Register",
        URL: "/register",
        ICON: IoLogInOutline,
    },
    TERMS: {
        TITLE: "Terms and Conditions",
        URL: "/terms",
        ICON: FaTerminal,
    },
    PRIVACY: {
        TITLE: "Privacy Policy",
        URL: "/privacy",
        ICON: GiStrikingDiamonds,
    },
    DASHBOARD: {
        TITLE: "Dashboard",
        URL: "/dashboard",
        ICON: HiMiniSquares2X2,
    },
    DOCS: {
        TITLE: "Documentation",
        URL: "/docs",
        ICON: IoIosHelpBuoy,
    },
    NOT_FOUND: {
        TITLE: "404 Not Found",
        URL: "/404",
        ICON: MdOutlineErrorOutline,
    },
};

export default PagesURL;
