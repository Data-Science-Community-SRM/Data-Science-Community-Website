import React, { Component } from "react";

import ContactUsComponent from "../../components/ContactUs/ContactUs";

class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <ContactUsComponent onSubmitForm={(values) => console.log(values)} />
      </React.Fragment>
    );
  }
}

export default ContactUs;
