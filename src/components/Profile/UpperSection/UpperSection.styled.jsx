import styled from "styled-components";

export const ProImgDiv = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url("https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png");
  background-color: #1c1259;

  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ProUserName = styled.h2`
  color: #1c1259;
  font-size: 28px;
  font-weight: 800;
  margin: 0;
`;

export const WorkTitle = styled.h3`
  color: #1c1259;
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

export const LocationText = styled.h4`
  color: #1c1259;
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  display: inline-block;
  padding-left: 10px;
`;

export const MyPostsDiv = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 140px;
  background-color: #1c1259;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  .card-upper {
    height: 60%;
  }

  h2 {
    font-size: 4rem;
    color: #fafaff;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }

  .card-lower {
    height: 40%;
  }

  h3 {
    font-size: 2rem;
    color: #fafaff;
    font-weight: 700;
  }

  .card-upper,
  .card-lower {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export const PinnedPostsDiv = styled.div`
  box-sizing: border-box;
  width: 90%;
  height: 140px;
  background-color: #FF9B00;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  .card-upper {
    height: 60%;
  }

  h2 {
    font-size: 4rem;
    color: #fafaff;
    font-weight: 700;
    padding: 0;
    margin: 0;
  }

  .card-lower {
    height: 40%;
  }

  h3 {
    font-size: 2rem;
    color: #fafaff;
    font-weight: 700;
  }

  .card-upper,
  .card-lower {
    display: flex;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export const numOfPosts = styled.span`
  color: #red;
`;