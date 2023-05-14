import React, { Component } from "react";

export default class ListRow extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="col-12">
          <div className="row">
            <div className="col-2">
              {this.props.name ? this.props.name : "none"}
            </div>
            <div className="col">
              {this.props.parent ? this.props.parent : "none"}
            </div>
            <div className="col-2">
              <button className="btn btn-warning">Edit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
