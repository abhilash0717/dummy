import { Component } from "react";
import Filter from "./Filter";
import Footer from "./Footer";
import Navbar from "./Navbar";
export default class StandardCollection extends Component {
  state = {
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: true,
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="row">
          <div className="col-md-3">
            <Filter data={this.state} />
          </div>
          <div className="col-md-9">
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <img
                    style={{ width: "100%" }}
                    src="https://www.booksbykilo.in/media/staticimages/Homepage-informative-activity-Books.jpg"
                  />
                  <h5 style={{ textAlign: "left" }}>Title</h5>
                  <br />
                  <div className="row">
                    <div className="col-md-8">
                      <p style={{ textAlign: "left" }}>220 gm</p>
                      <p style={{ textAlign: "left" }}>220 Rs</p>
                    </div>
                    <div className="col-md-4">
                      <div className="button5">
                        <button
                          className="btn button5"
                          onClick={() => this.newBooks()}
                        >
                          {" "}
                          <i className="fa fa-shopping-cart fa-xl"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
