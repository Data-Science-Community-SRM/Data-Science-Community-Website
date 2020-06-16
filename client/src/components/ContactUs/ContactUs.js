import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "reactstrap";

import classes from "./ContactUs.module.css";

const phoneRegExp = /^[0-9]{1}[0-9]{9}$/;

const ContactUs = (props) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("We know you have a Name")
        .min(2, "It's got to be longer"),
      email: Yup.string()
        .email()
        .required("Our owl will get lost without this"),
      number: Yup.string().matches(
        phoneRegExp,
        "Make it 10 characters long using only Numbers"
      ),
      message: Yup.string().required("Why are you filling the form then"),
    }),

    onSubmit: (values) => {
      props.onSubmitForm(values);
    },
  });

  return (
    <React.Fragment>
      <div className="col-12 col-lg-9 mx-auto">
        <h1 data-aos="zoom-in-up" style={{ marginTop: "120px" }}>
          Send Us A Message
        </h1>
        <p style={{ margin: "30px auto" }}>
          We would be pleased to respond for collaborations, enquiries and more.
        </p>
        <hr />
        <Form
          onSubmit={formik.handleSubmit}
          className="mx-auto col-12 col-lg-9 mt-5"
          encType="multipart/form-data"
        >
          <div>
            <input
              id="name"
              name="name"
              type="text"
              data-aos="flip-down"
              placeholder="Full Name"
              className={classes.name + " col-11"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />

            {formik.touched.name && formik.errors.name ? (
              <div className={classes.error + " col-12"}>
                {formik.errors.name}
              </div>
            ) : null}

            <input
              id="email"
              name="email"
              type="email"
              data-aos="flip-down"
              placeholder="Email Address"
              className={classes.email + " col-11"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <div className={classes.error + " col-12"}>
                {formik.errors.email}
              </div>
            ) : null}

            <input
              id="number"
              name="number"
              type="tel"
              data-aos="flip-down"
              placeholder="Phone Number"
              className={classes.number + " col-11"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.number}
            />

            {formik.touched.number && formik.errors.number ? (
              <div className={classes.error + " col-12"}>
                {formik.errors.number}
              </div>
            ) : null}

            <textarea
              id="message"
              name="message"
              type="text"
              data-aos="flip-down"
              placeholder="Your Message"
              className={classes.message + " col-11"}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            />

            {formik.touched.message && formik.errors.message ? (
              <div className={classes.error + " col-12"}>
                {formik.errors.message}
              </div>
            ) : null}

            <div className="col-12 text-center">
              <Button
                className={classes.btn + " col-8 col-md-3 mt-5"}
                type="submit"
                onClick={() => {
                  if (
                    formik.errors.name ||
                    formik.errors.email ||
                    formik.errors.message
                  ) {
                    alert("Please check the inputs for errors");
                  }
                }}
              >
                send
              </Button>
            </div>
          </div>
        </Form>
        <hr style={{ marginTop: "0" }} />
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
