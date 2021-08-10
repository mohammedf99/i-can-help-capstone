import styled from "styled-components";

export const JobPostingContainer = styled.div`
  border: 2px solid #1c1259;
  padding: 0.5rem;
  border-radius: 5px;
  background-color: #fafaff;
  color: #1c1259;
  width: 99%;

  #title {
    border: none;
    outline: none;
    width: 300px;
    background-color: inherit;
    font-size: 1rem;
    border-bottom: 2px solid #cacaea;
    margin-bottom: 1rem;
  }

  textarea {
    resize: none;
    width: 100%;
    height: auto;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1rem;
    font-weight: 500;
  }

  #title::placeholder,
  textarea::placeholder {
    color: #cacaea;
  }

  #salary,
  .post-select {
    font-size: 1rem;
    color: #1c1259;
    background-color: #cacaea;
    border-radius: 5px;
    padding-left: 10px;
    border: 0;
    height: 40px;
    outline: none;
    width: 95%;
  }

  #salary::placeholder {
    color: #1c1259;
  }

  .post-btn {
    color: #fafaff;
    background-color: #1c1259;
    width: 15%;
    height: 40px;
    margin-top: 1rem;
    margin-right: 1rem;
    border: none;
    border-radius: 25px;
  }

  .post-btn:hover {
    opacity: 0.8;
  }

  .upload-btn {
    background-color: #cacaea;
    color: #1c1259;
    border: 2px solid #cacaea;
    width: 185px;
    height: 40px;
  }

  .btn-row {
    margin-top: 1.5rem;
  }
`;
