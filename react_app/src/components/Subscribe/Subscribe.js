import { useTranslation } from "react-i18next";
import "./Subscribe.css";
import SweetAlert from "./SweetAlert";

function Subscribe() {
    const { t } = useTranslation(); 

    return (
        <div className="subscribe-container">
            <div className="subscribe-text">
                <h1 className="subscribe-title">{t("subscribe-title")}
                </h1>
                <p className="subscribe-para">{t("subscribe_para")}</p>
            </div>
            <div className="subscribe-btn-container">
                <SweetAlert />
            </div>
        </div>
    );
}

export default Subscribe;
