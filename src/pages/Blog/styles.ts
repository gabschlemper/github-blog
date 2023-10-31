import styled from "styled-components";
import BackgroundImg from "../../assets/background.png";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const Header = styled.div`
  height: 296px;
  width: 100%;
  background-image: url(${BackgroundImg});
  background-position: center;
  background-size: cover;
`;
