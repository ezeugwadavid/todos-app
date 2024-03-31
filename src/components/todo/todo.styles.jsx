import styled from "styled-components";
export const TodoContainer = styled.div`
  background-color: #f3f3f3;
  height: 100vh; 
  width: 30vw;
  display: flex;
  justify-content: space-between;
  box-shadow: 10px 0 5px -2px #dcdcdc !important;
  flex-direction: column;
  position: relative;
  z-index: 1;
  .todocontainer {
  }

  .todoheader {
    background-color: #3556ab;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    height: 123px;
    box-shadow: 10px 0 5px -2px #2d4991;
  }

  .usercontent {
    margin-left: 25px;
    width: 50%;
  }

  .welcome {
    font-weight: 500;
    font-size: 16px;
    line-height: 18.75px;
    color: #ffffff;
    margin-bottom: 5px;
  }

  .question {
    font-weight: 100;
    font-size: 25px;
    line-height: 26.46px;
    font-style: italic;
    color: #ffffff;
  }

  .todonotification {
    border: 2px solid #9eb031;
    background: #cde53d;
    display: flex;
    justify-content: space-between;
    padding: 0px 30px;
    box-shadow: 0 4px 2px 2px #dcdcdc;
  }

  .leftnotification {
    display: flex;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .notificationtext {
    font-weight: 700;
    font-size: 18px;
    line-height: 19.05px;
    margin-left: 25px;
  }

  .rightbadge {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 66.11px;
    height: 71px;
    background: #071d55;
    color: #f2c94c;
    position: relative;
    bottom: 2px;
    margin-bottom: 30px;
  }

  .todobody {
    padding: 20px 30px;
  }

  .todocard {
    background: #ffffff;
    padding: 20px;
  }

  .todocard {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #e7e7e7;
    border-radius: 6px;
    margin-bottom: 20px;
    box-shadow: 0 4px 2px 2px #e7e7e7;
  }

  .tododetails {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .todotext {
    margin-left: 15px;
    color: #8d8d8d;
    font-weight: 500;
    font-size: 16px;
    line-height: 16.08px;
  }

  .todotextblue {
    margin-left: 15px;
    color: #071d55;
    font-weight: 500;
    font-size: 16px;
    line-height: 16.08px;
  }

  .editbutton {
    border: 1px solid #071d55;
    padding: 10px;
    font-weight: 500;
    font-size: 16px;
    line-height: 18.75px;
    border-radius: 4px;
    color: #071d55;
    cursor: pointer;
  }

  .bottomsection {
    display: flex;
    justify-content: end;
  }

  .actionbutton {
    margin-bottom: 20px;
    margin-right: 30px;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
