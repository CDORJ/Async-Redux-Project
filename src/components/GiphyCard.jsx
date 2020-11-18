import React from "react";
import { ClipLoader } from "react-spinners";
import { connect } from "react-redux";

const GiphyCard = (props) => {
  console.log("props from GiphyCard", props);

  return (
    <div>
      {props.isLoading ? (
        <ClipLoader />
      ) : props.error ? (
        <div style={{ color: "red" }}>{props.error}</div>
      ) : (
        <>
          {props.gif.map((item) => {
            return (
              <div>
                {item.title}
                <img src={item.images["480w_still"]["url"]} alt="GIF" />
              </div>
            );
          })}

          {/*  */}
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ GR }) => {
  return {
    gif: GR.gif,
    isLoading: GR.isLoading,
    error: GR.error,
  };
};

export default connect(mapStateToProps, {})(GiphyCard);
