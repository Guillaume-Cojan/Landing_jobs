import React from "react";
import Swal from "sweetalert2";
import { withTranslation } from "react-i18next";

import "./Subscribe.css";

class Sweetalertdemo extends React.Component {
  constructor() {
    super();

    this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClickAutoclose() {
    let timerInterval;
    Swal.fire({
      icon: "success",
      title: this.props.t("thank_you"),
      html: this.props.t("sucess_add"),
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
      title: this.props.t("Enter_email"),
      input: "email",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: this.props.t("Subscribe"),
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
        return fetch(`http://localhost:3000/subscribe`, requestOptions).catch(
          (error) => {
            console.log(error);
            Swal.showValidationMessage(
              this.props.t("validation_error_message")
            );
          }
        );
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
          {this.props.t("subscribe-btn")}
        </button>
      </div>
    );
  }
}

export default withTranslation()(Sweetalertdemo);
