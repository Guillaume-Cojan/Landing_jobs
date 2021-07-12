import "./Subscribe.css";
import SweetAlert from "./SweetAlert";
import { useTranslation } from "react-i18next";

function Subscribe() {
    const { t } = useTranslation()
    return (
        <div className="subscribe-container">
            <div className="subscribe-text">
                <h1 className="subscribe-title">{t("Do you want to receive regular information about salary and &nbsp; career trends?")}
                </h1>
                <p className="subscribe-para">{t("Enter your email and receive.")}</p>
            </div>
            <div className="subscribe-btn-container">
                <SweetAlert />
            </div>
        </div>
    );
}

export default Subscribe;
