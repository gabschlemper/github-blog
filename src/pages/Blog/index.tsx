import { Summary } from "../../components/Summary";
import { Container, Header } from "./styles";

export function Blog() {
  return (
    <div>
      <Header />
      <Container>
        <Summary />
      </Container>
    </div>
  );
}
