import styled from "styled-components";

export const MainViewContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  background-color: #f3f3f3;

  .todo {
  }
  .edittodo {
  }

  @media screen and (max-width: 1000px) {
  flex-direction: column;
  width: 100%;
  }
`;
