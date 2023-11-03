import styled from "styled-components";
import BackgroundImg from "../../assets/background.png";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  padding-bottom: 13rem;

  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 3rem;
  }
`;

export const BackgroundHeader = styled.div`
  height: 296px;
  width: 100%;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-size: cover;
`;

export const Posts = styled(Link)`
  border-radius: 10px;
  padding: 2rem;
  background-color: ${(props) => props.theme["base-post"]};
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 260px;
  text-decoration: none;
  color: ${(props) => props.theme["base-text"]};
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
    opacity: 0.8;
  }

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme["base-title"]};
    font-weight: bold;
  }

  span {
    white-space: nowrap;
  }

  p {
    display: inline-block;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
`;
