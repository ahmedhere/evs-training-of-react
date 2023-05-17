import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="container-fluid bg-secondary p-5 text-light footer">
        <div className="row">
          <div className="col-6 offset-3 text-center">
            <footer className="capital">
              This project is made to check the routing of the page &copy;
              Muhammad Ahmed
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
