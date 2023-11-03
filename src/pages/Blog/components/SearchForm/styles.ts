import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.125rem;
    font-weight: bold;
  }

  input {
    border-radius: 6px;
    padding: 0.75rem 1rem;
    background-color: ${(props) => props.theme["base-input"]};
    border: 1px solid ${(props) => props.theme["base-border"]};
    color: ${(props) => props.theme["base-text"]};
  }
`;
