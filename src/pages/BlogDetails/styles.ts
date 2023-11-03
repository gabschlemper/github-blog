import styled from "styled-components";
import BackgroundImg from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  padding-bottom: 13rem;
`;

export const BackgroundHeader = styled.div`
  height: 296px;
  width: 100%;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-size: cover;
`;

export const SummaryBlogDetails = styled.div`
  background-color: ${(props) => props.theme["base-profile"]};
  padding: 2rem 2.5rem;
  border-radius: 10px;
  margin-top: -6.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

export const SummaryLinks = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

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
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const PostContent = styled.section`
  padding: 2.5rem 2rem;
`;
