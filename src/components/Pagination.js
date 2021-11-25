import React, { Component } from "react";
import "../index.css";
import Data from "../assets/library/Data";
import Table from "../layout/Table";
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
    let start = (currentPage - 1) * limit;
    let end = parseInt(start) + parseInt(limit);
    filteredArray = filteredArray.slice(start, end);

    return (
      <>
        <Table filterData={filteredArray} />
        <DropDown dropDown={this.handleChange} />
        <section>
          <Buttons text="last" btnState={this.lastPageFunc} />
          <Buttons text="next" btnState={this.nextPageFunc} />
          <Buttons text={this.state.currentPage} />
          <Buttons text="prev" btnState={this.prevPageFunc} />
          <Buttons text="first" btnState={this.firstPageFunc} />
        </section>
      </>
    );
  }
}
