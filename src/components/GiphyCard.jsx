import React from "react";
import { ClipLoader } from 'react-spinners'
import { connect } from "react-redux";

const GiphyCard= (props) => {

  return (
    <div>
      {props.isLoading ? (
      <ClipLoader/>
      ) : (props.error ? <div style={{color: 'red'}}>{props.error}</div> : 
      <>
      <div>{props.gif.title}</div>
      <img src={props.gif.img} alt="GIF"/>
      </>
      )}

    </div>
  
  )}

const mapStateToProps = ({GR}) => {
  return {
    gif: GR.gif,
    isLoading: GR.isLoading,
    error: GR.error
  }
}

export default connect(mapStateToProps, {})(GiphyCard);
