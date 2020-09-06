import React, { Component } from "react";
import axios from "axios";

import ContactUsComponent from "../../components/ContactUs/ContactUs";
import Spinner from "../../components/UI/Spinner/Spinner";

class ContactUs extends Component {
  state = {
    isLoading: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  submitForm(data) {
    this.setState({ isLoading: true });
    axios
      .post("/api/contact-us", data)
      .then((res) => {
        alert("We have received your message!");
        window.location.reload(false);
      })
      .catch((err) => {
        alert("There is some error. Please try again later.");
        window.location.reload(false);
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.isLoading ? (
          <Spinner />
        ) : (
          <ContactUsComponent
            onSubmitForm={(values) => this.submitForm(values)}
          />
        )}
      </React.Fragment>
    );
  }
}

export default ContactUs;
