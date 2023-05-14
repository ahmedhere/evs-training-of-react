import React, { Component } from "react";

export default class Row extends Component {
  render() {
    return (
      <div className="row mt-3 d-flex justify-content-center align-items-center">
        <div className="col-12">
          <div className="row">
            <div className="col">
              {this.props.Title ? this.props.Title : "none"}
            </div>
            <div className="col-md-2 col-12 ">
              {this.props.PostedOn ? this.props.PostedOn : "none"}
            </div>
            <div className="col-md-2 col-12 ">
              {this.props.PostedBy ? this.props.PostedBy : "none"}
            </div>
            <div className="col-md-2 col-12">
              <button className="btn btn-success">Approve</button>
              <button className="btn btn-danger mx-2">Reject</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
