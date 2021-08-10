import styled from "styled-components";

export const FilterContainer = styled.div`
  background-color: #fafaff;
  width: 100%;
  height: auto;
  padding: 1.25rem;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: sans-serif;

  .salary-title {
    width: 100%;
    color: #4e4e9f;
    font-size: 1.25rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
  }

  .salary-input {
    width: 100%;
    padding-left: 10px;
    font-size: 1rem;
    background-color: transparent;
    color: #1c1259;
  }

  input::-webkit-input-placeholder {
    color: #1c1259;
  }

  .salary-title,
  .salary-input {
    border: 2px solid #cacaea;
  }

  .salary-row,
  .salary-input {
    height: 40px;
  }

  .from-to-title {
    background-color: #cacaea;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
  }

  .salary-title,
  .salary-input,
  .from-to-title {
    border-radius: 5px;
  }

  .select-row {
    margin-top: 0.5rem;
  }

  .filter-select {
    width: 100%;
    height: 40px;
    border: 2px solid #cacaea;
    border-radius: 5px;
    background-color: transparent;
    color: #4e4e9f;
    font-size: 1rem;
    font-weight: 600;
  }
`;
