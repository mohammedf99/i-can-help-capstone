import styled from "styled-components";

export const HomePageCont = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2rem 0;

  .left-section {
    width: 22%;
  }

  .profile-div {
    box-sizing: border-box;
    width: 90%;
    margin: 3.25rem auto;
    border: 1px solid #4e4e9f;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    color: #4e4e9f;
    font-size: 1.25rem;
  }

  .profile-icon {
    margin-right: 1rem;
  }

  .profile-title {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    opacity: 0.8;
  }

  .right-section {
    display: flex;
    flex-direction: column;
    width: 63%;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #4e4e9f;
  }

  #latest-title {
    margin-top: 2rem;
  }
`;
