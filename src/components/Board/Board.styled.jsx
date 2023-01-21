import styled from "styled-components";

export const BoardStyled = styled.div``;

export const List = styled.ul`
  height: 60vh;
  width: 60vh;
  display: flex;
  flex-wrap: wrap;
  gap: 2.2%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  width: 8%;
  height: 8%;
  border-radius: 0.4vw;
`;

export const Button = styled.button`
  border: 0.14vw solid #bebebe;
  border-radius: 0.4vw;
  width: 100%;
  height: 100%;
  cursor: pointer;
  box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
  transition: 0.3s;
  background-color: transparent;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
    transform: scale(1.1);
  }
`;
