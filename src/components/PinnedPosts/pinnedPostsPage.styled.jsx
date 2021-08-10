import styled from "styled-components";

export const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 2rem 0 4rem 0;
  padding: 0 15rem;

  .my-post-title {
    color: #1c1259;
    font-weight: 700;
    font-size: 2rem;
  }

  .posts {
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    flex: 1 1 auto;
  }

  @media only screen and (max-width: 976px) {
    padding: 0 6.5rem;
    .posts {
      justify-content: center;
    }
  }
`;
