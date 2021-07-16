import "./Subscribe.css";
import SweetAlert from "./SweetAlert";

function Subscribe({showLJ}) {
    return (
        <div className={showLJ ? "subscribe-container-lj" : "subscribe-container"}>
            <div className="subscribe-text">
                <h1>
                    Do you want to receive regular information about salary and
                    career trends?
                </h1>
                <p>Enter your email and receive.</p>
            </div>
            <div className="subscribe-btn-container">
                <SweetAlert />
            </div>
        </div>
    );
}

export default Subscribe;
