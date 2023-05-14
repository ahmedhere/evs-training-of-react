import React, { Component } from "react";
import Row from "./Rows";

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this._Advertisement = [
      { id: 1, Title: "Iphone 14", PostedBy: "Sherry", PostedOn: "05/01/2023" },
      {
        id: 2,
        Title: "Samsung S20",
        PostedBy: "Ahmed",
        PostedOn: "05/01/2023",
      },
      {
        id: 3,
        Title: "Office Table",
        PostedBy: "Yousuf",
        PostedOn: "05/01/2023",
      },
      {
        id: 4,
        Title: "Suzuki Mehran (The Boss)",
        PostedBy: "Hamza",
        PostedOn: "05/01/2023",
      },
    ];
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex bg-primary text-light justify-content-center p-3">
            <h2 className="flex-grow-1 capital">Advertisment Management</h2>
            <button className="btn btn-light mx-2">Approve/Reject</button>
          </div>
        </div>
        <div className="row bg-light p-3">
          <div className="col-12">
            <div className="row p-2">
              <div className="col">
                <h6>Title</h6>
              </div>
              <div className="col-2">
                <h6>Posted on</h6>
              </div>
              <div className="col-2">
                <h6>Posted by</h6>
              </div>
              <div className="col-2">
                <h6>Approve/Reject</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {this._Advertisement.map((ad) => (
                  <Row {...ad} key={ad.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
