import AppENV from "../../constants/AppENV";
import PagesURL from "../../constants/PagesURL";
import { useEffect } from "react";
import TermsComponent from "../../components/TermsComponent";

const TermsPage = () => {
    // Page Title
    useEffect(() => {
        document.title = `${AppENV.APP_NAME} - ${PagesURL.TERMS.TITLE}`;
    }, []);

    return <TermsComponent />;
};

export default TermsPage;
