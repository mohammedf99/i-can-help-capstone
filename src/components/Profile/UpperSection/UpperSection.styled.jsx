import styled from "styled-components";

export const UpperSectionCont = styled.section`
  width: 70%;
  display: flex;
  flex-direction: row;

  .left-section,
  .right-section {
    display: flex;
    flex-direction: row;
  }

  .left-section,
  .right-section {
    width: 50%;
  }

  .img-div {
    height: 150px;
    background-color: #1c1250;
  }

  img {
    object-fit: cover;
  }

  .img-div,
  img {
    width: 150px;
    border-radius: 50%;
  }

  .user-info-div {
    padding-left: 2rem;
  }

  .name {
    font-size: 2rem;
    font-weight: 800;
  }

  .job {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .location {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .name,
  .job,
  .location {
    color: #1c1259;
  }

  .location-icon {
    padding-right: 0.5rem;
    color: #ee4266;
  }

  @media (max-width: 768px) {
    width: 80%;
    flex-direction: column;

    .left-section,
    .right-section {
      width: 100%;
    }

    .left-section {
      justify-content: center;
    }

    .right-section {
      flex-direction: column;
    }
  }
`;

export const MyPostsCard = styled.div`
  box-sizing: border-box;
  width: 45%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1c1259;
  border-radius: 5px;
  padding: 0.25rem;

  .card-upper,
  .card-lower {
    display: flex;
    align-items: center;
  }

  .card-upper {
    height: 60%;
  }

  .card-lower {
    height: 40%;
  }

  .post-number,
  .post-title {
    color: #fafaff;
    font-weight: 700;
    margin: 0;
  }

  .post-number {
    font-size: 4rem;
    justify-self: end;
  }

  .post-title {
    font-size: 1.75rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0.5rem auto;
  }
`;

export const PinnedPostCard = styled.div`
  box-sizing: border-box;
  width: 45%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ff9b00;
  border-radius: 5px;
  padding: 0.25rem;

  .card-upper,
  .card-lower {
    display: flex;
    align-items: center;
  }

  .card-upper {
    height: 60%;
  }

  .card-lower {
    height: 40%;
  }

  .post-number,
  .post-title {
    color: #fafaff;
    font-weight: 700;
    margin: 0;
  }

  .post-number {
    font-size: 4rem;
    justify-self: end;
  }

  .post-title {
    font-size: 1.75rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0.5rem auto;
  }
`;
