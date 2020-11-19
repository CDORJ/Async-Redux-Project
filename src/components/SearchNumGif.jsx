import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux';

import { fetchData } from '../store/actions'

const MainDiv = styled.div`
width: 300px;
display: inline-flex;
flex-direction: column;
justify-content: center;
text-align: center;
`

const SearchNumGif = (props) => {

    const [gifNumber, setGifNumber] = useState()

  const handleChange = (e) => {
    setGifNumber(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.fetchData(gifNumber)
  }

  return (
  <MainDiv>
      <label htmlFor='gif'>How Many Gifs Would You Like to See ?</label>
      <input id="gif" value={gifNumber} onChange={handleChange} />
      <Button onClick={handleClick}>Click to See Gifs</Button>
  </MainDiv>
  );
};
    

export default connect(null, { fetchData })(SearchNumGif);
