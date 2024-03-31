import styled from "styled-components";
export const EditTodoContainer = styled.div`
  background-color: #f3f3f3;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 70vw;

  .editheader {
    background-color: #3556ab;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 30px;
    height: 123px;
    font-weight: 500;
    font-size: 24px;
    line-height: 28.13px;
    color: #ffffff;
  }

  .editbody {
    padding: 20px 30px;
  }

  .inputlabel {
    font-weight: 400;
    font-size: 16px;
    line-height: 19.44px;
    letter-spacing: 2px;
    color: #000000;
  }

  .input {
    border: 2px solid #cbcbcb;
    padding: 15px 30px;
    width: 95%;
    margin-top: 5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 24.3px;
    color: #0d2972;
    outline: none;
    border-radius: 9px;
  }

  .bottombuttons {
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    width: 90%;
  }

  .delete {
    width: 20%;
    background-color: #ab3535;
    color: #ffffff;
    padding: 15px 20px;
    border-radius: 6px;
    border: 2px solid #720d0d;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.09px;
    margin-right: 15px;
    cursor: pointer;
    box-shadow: 0 4px 2px 2px #bfbfbf;
  }

  .save {
    width: 95%;
    background-color: #3556ab;
    border-radius: 6px;
    border: 2px solid #0d2972;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-weight: 400;
    font-size: 18px;
    line-height: 21.09px;
    cursor: pointer;
    box-shadow: 0 4px 2px 2px #bfbfbf;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    .input {
      width: 75%;
    }

    .bottombuttons {
      padding: 20px 30px;
      display: flex;
      justify-content: space-between;
      width: 80%;
    }
  }
`;
