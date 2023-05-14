import React, { Component } from "react";
import ListRow from "./ListRow";

export default class List extends Component {
  constructor(props) {
    super(props);
    this._categories = [
      { id: 1, name: "Mobile" },
      { id: 2, name: "Iphone", parent: "Mobile" },
      { id: 3, name: "Samsung", parent: "Mobile" },
      { id: 4, name: "Laptop" },
      { id: 5, name: "HP", parent: "Laptop" },
      { id: 6, name: "DELL", parent: "Laptop" },
      { id: 7, name: "Apple", parent: "Laptop" },
      { id: 8, name: "Lenovo", parent: "Laptop" },
    ];
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row p-3 bg-primary text-light">
          <div className="col-12 d-flex justify-content-center">
            <h3 className="flex-grow-1">Manage Categories</h3>
            <button
              className="btn btn-light"
              data-bs-toggle="modal"
              data-bs-target="#modalId"
            >
              Add Category
            </button>
          </div>
        </div>
        <div className="row bg-light p-3">
          <div className="col-12">
            <div className="row m-2">
              <div className="col-2">
                <h6>Name</h6>
              </div>
              <div className="col">
                <h6>Parent</h6>
              </div>
              <div className="col-2">
                <h6>Action</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {this._categories.map((c) => (
                  <ListRow {...c} key={c.id} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal to add the new category */}
        <div
          className="modal fade"
          style={{
            textAlign: "left",
          }}
          id="modalId"
          tabIndex="-1"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  Add new Category
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              {/* Modal Body section where form will be created */}
              <div className="modal-body">
                <form action="#">
                  <div className="row">
                    <div className="col-12">
                      <label htmlFor="name">
                        Enter the name of the product
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
