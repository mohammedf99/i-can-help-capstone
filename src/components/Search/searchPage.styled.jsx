import styled from "styled-components";

export const SearchContainer = styled.div`
  box-sizing: border-box;
  padding: 0.5rem;
  margin: 4rem 0rem 4rem 0rem;

  display: flex;
  flex-direction: row;

  .filter-section {
    width: 30%;
    margin-right: 1rem;
  }

  .post-section {
    width: 70%;
  }

  .title {
    color: #1c1259;
    font-weight: 700;
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 2rem 0 2rem 0;

    .filter-section,
    .post-section {
      width: 90%;
      margin: 0 auto;
    }

    .post-section {
      margin-top: 2rem;
    }
  }
`;
