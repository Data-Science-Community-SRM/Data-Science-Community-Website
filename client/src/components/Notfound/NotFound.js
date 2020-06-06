import React from "react";

import "./NotFound.css";

const NotFound = () => {
  return (
    <React.Fragment>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page can't be found</h2>
          </div>
          <a href="/">Go TO Homepage</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
