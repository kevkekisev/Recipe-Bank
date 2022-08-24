import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaSearch, faSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <SearchBar>
        <div>
          <FaSearch></FaSearch>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
          />
        </div>
      </SearchBar>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem auto;

  div {
    position: relative;
    margin: 0 auto;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 700px !important;
    min-width: 250px;
    margin: 0 auto;
  }

  svg {
    position: absolute;
    top: 38%;
    left: 1%;
    transform: trasnlate(100%, -50%);
    color: white;
  }
`;
const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;

export default Search;
