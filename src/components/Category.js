import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink to={"/cuisine/italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={"/cuisine/american"}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={"/cuisine/thai"}>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to={"/cuisine/korean"}>
        <GiChopsticks />
        <h4>Korean</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  margin: 2rem 1rem;
`;

const SLink = styled(NavLink)`
  display: flex;

  flex-direction: column;
  justify-content: center;

  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);

  width: 6.5rem;
  height: 6.5rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 1rem;
  }

  svg {
    color: white;
    font-size: 1.8rem;
  }

  &.active {
    background: white;
    border: 4px solid black;
    svg {
      color: black;
    }
    h4 {
      color: black;
    }
  }
`;

export default Category;
