import React, { Component } from "react";
import Swal from "sweetalert2";
import "./Subscribe.css";

export default class Sweetalertdemo extends Component {
    constructor() {
        super();
        this.HandleClick = this.HandleClick.bind(this);
    }

    HandleClickAutoclose() {
        let timerInterval;
        Swal.fire({
            icon: "success",
            title: "Thank You!",
            html: "You were succesfully added to our mailing list.",
            timer: 2500,
            timerProgressBar: true,
            onBeforeOpen: () => {
                Swal.showLoading();
                timerInterval = setInterval(() => {
                    const content = Swal.getContent();
                    if (content) {
                        const b = content.querySelector("b");
                        if (b) {
                            b.textContent = Swal.getTimerLeft();
                        }
                    }
                }, 100);
            },
            onClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
            }
        });
    }

    HandleClick() {
        Swal.fire({
            title: "Enter your email address",
            input: "email",
            inputAttributes: {
                autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Subscribe",
            confirmButtonColor: "#3bbcb0",
            showLoaderOnConfirm: false,
            preConfirm: (emailInput) => {
                const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: emailInput,
                    }),
                };
                return fetch(
                    `http://localhost:3000/subscribe`,
                    requestOptions
                ).catch((error) => {
                    console.log(error);
                    Swal.showValidationMessage(
                        `Unable to subscribe now. Please try again later.`
                    );
                });
            },
            allowOutsideClick: () => !Swal.isLoading(),
        }).then((result) => {
            if (result.isConfirmed) {
                this.HandleClickAutoclose();
            }
        });
    }

    render() {
        return (
            <div>
                <button className="subscribe-btn" onClick={this.HandleClick}>
                    Subscribe Now
                </button>
            </div>
        );
    }
}
