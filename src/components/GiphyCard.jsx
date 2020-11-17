import React from "react";
import { connect } from "react-redux";

const GiphyCard= () => {
  return <div></div>;
};

const mapStateToProps = ({GR}) => {
  return {
    img: GR.img,
    title: GR.title,
    isLoading: GR.isLoading,
    error: GR.error
  };
};

export default connect(mapStateToProps, {})(GiphyCard);
