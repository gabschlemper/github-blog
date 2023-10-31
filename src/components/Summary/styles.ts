import styled from "styled-components";

export const SummaryContainer = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin-top: -6.5rem;
  display: flex;
  gap: 2rem;
`;

export const SummaryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Avatar = styled.img`
  border-radius: 8px;
  width: 148px;
  height: 148px;
`;

export const SummaryInfoHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  span {
    font-size: 2rem;
    color: ${(props) => props.theme["base-title"]};
    font-weight: bold;
    line-height: 130%;
  }

  a {
    color: ${(props) => props.theme["blue"]};
    font-size: 0.75rem;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme["blue"]};
      transition: border-bottom 0.2s;
    }
  }
`;

export const SummaryIcons = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
