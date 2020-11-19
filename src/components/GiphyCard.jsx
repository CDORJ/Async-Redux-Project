import React from "react";
import { ClipLoader } from "react-spinners";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import styled from 'styled-components'

const MainDiv = styled.div`
width: 600px;
flex-direction: column;
display: inline-flex;
margin: 20px;
justify-content: center;
justify-content: space-between;
text-align: center;
`

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
              <MainDiv key={item.id}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                <Card.Img src={item.images["480w_still"]["url"]} alt="GIF" />
              </MainDiv>
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
