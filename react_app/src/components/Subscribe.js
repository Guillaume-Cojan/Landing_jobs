import "./Subscribe.css";

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
            <button className="subscribe-btn">Subscribe Now</button>
        </div>
    );
}

export default Subscribe;
