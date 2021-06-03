import "./Subscribe.css";
import ModalBtn from "./Modal";

function Subscribe() {
    return (
        <div className="subscribe-container">
            <div className="subscribe-text">
                <h1>
                    Do you want to receive regular information about your
                    salary?
                </h1>
                <p>Enter an email to send your salary comparison quarterly.</p>
            </div>
            <div className="subscribe-btn-container">
                <ModalBtn />
            </div>
        </div>
    );
}

export default Subscribe;
