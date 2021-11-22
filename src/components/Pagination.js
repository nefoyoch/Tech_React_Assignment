import React, { Component } from "react";
import "../index.css";
import Data from "../assets/library/Data";
import BuildTable from "../layout/BuildTable";
import DropDown from "./DropDown";
import Buttons from "./Buttons";
export default class Pagination extends Component {
  state = {
    currentPage: 1,
    limit: 10,
    data: Data(),
  };

  handleChange = (e) => {
    this.setState({
      limit: e.target.value,
      currentPage: 1,
    });
  };

  firstPageFunc = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: 1,
      });
    }
  };

  prevPageFunc = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };

  nextPageFunc = () => {
    if (this.state.currentPage < this.state.data.length / this.state.limit) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };

  lastPageFunc = () => {
    this.setState({
      currentPage: this.state.data.length / this.state.limit,
    });
  };

  render() {
    let { limit, data, currentPage } = this.state;
    let filteredArray = data;
    // let noOfPage = Math.ceil(filteredArray.length / limit);
    let start = (currentPage - 1) * limit;
    let end = parseInt(start) + parseInt(limit);
    filteredArray = filteredArray.slice(start, end);

    return (
      <>
        <BuildTable filterData={filteredArray} />
        <DropDown dropDown={this.handleChange} />

        <section
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Buttons
            firstBtn={this.firstPageFunc}
            lastBtn={this.lastPageFunc}
            nextBtn={this.nextPageFunc}
            prevBtn={this.prevPageFunc}
            pageViewBtn={this.state.currentPage}
          />
        </section>
      </>
    );
  }
}
