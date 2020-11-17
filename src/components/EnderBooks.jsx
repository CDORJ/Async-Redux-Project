import React from "react";
import { connect } from "react-redux";

const EnderBooks = () => {
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    book: state.EGR.book,
    author: state.EGR.author,
    is_loading_data: state.EGR.is_loading_data,
    error: state.EGR.error
  };
};

export default connect(mapStateToProps, {})(EnderBooks);
