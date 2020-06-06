import React, { Component } from "react";
import axios from "axios";

import ContactUsComponent from "../../components/ContactUs/ContactUs";

class ContactUs extends Component {
  submitForm(data) {
    axios
      .post("/api/contact-us", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <ContactUsComponent
          onSubmitForm={(values) => this.submitForm(values)}
        />
      </React.Fragment>
    );
  }
}

export default ContactUs;
