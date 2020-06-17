import React from "react";

import "./Redirecting.css";

const Redirecting = () => {
  return (
    <React.Fragment>
      <div id="redirecting">
        <div className="redirecting">
          <div className="redirecting-sub">
            <h1>rest!</h1>
            <h2>We are redirecting you...</h2>
          </div>
          <a href="/">Go TO Homepage</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Redirecting;
