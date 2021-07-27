import { useTranslation } from "react-i18next";
import "./Subscribe.css";
import SweetAlert from "./SweetAlert";

function Subscribe({showLJ, showJobs}) {
    const { t } = useTranslation(); 

    return (
        <div className={showLJ ? "subscribe-container-lj" : "subscribe-container"}>
            <div className="subscribe-text">
                <h1 className="subscribe-title">{t("subscribe-title")}
                </h1>
                <p className="subscribe-para">{t("subscribe_para")}</p>
            </div>
            <div className="subscribe-btn-container">
                <SweetAlert showLJ={showLJ} showJobs={showJobs}/>
            </div>
        </div>
    );
}

export default Subscribe;
