import React, { Component } from "react";

export default class ListRow extends Component {
  render() {
    return (
      <div className="row p-3">
        <div className="col-12">
          <div className="row">
            <div className="col-md-2 col-12">
              {this.props.name ? this.props.name : "none"}
            </div>
            <div className="col">
              {this.props.parent ? this.props.parent : "none"}
            </div>
            <div className="col-md-2 col-12">
              <button className="btn btn-warning mx-2">Edit</button>
              <button className="btn btn-danger mx-2">Delete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
