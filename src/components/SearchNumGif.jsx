import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { fetchData } from '../store/actions'

const MainDiv = styled.div`
width: 200px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`

const SearchNumGif = (props) => {

    const [gifNumber, setGifNumber] = useState(4)

  const handleChange = (e) => {
    setGifNumber(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    props.fetchData(gifNumber)
  }

  return (
  <MainDiv>
      <label htmlFor='gif'>How Many Gifs ?</label>
      <input id="gif" value={gifNumber} onChange={handleChange} />
      <button onClick={handleClick}>Click to See Gifs</button>
  </MainDiv>
  );
};
    

export default connect(null, { fetchData })(SearchNumGif);
