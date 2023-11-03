import { useContext } from "react";
import { Summary } from "../../components/Summary";
import { Container, BackgroundHeader, Posts, Title } from "./styles";
import { SearchForm } from "./components/SearchForm";
import { BlogContext } from "../../contexts/BlogContext";

export function Blog() {
  const { blogData } = useContext(BlogContext);
  console.log(blogData);

  return (
    <div>
      <BackgroundHeader />
      <Container>
        <Summary />
        <SearchForm />
        <main>
          {blogData?.map((item) => {
            return (
              <Posts key={item.id} to={`post/${item.number}`}>
                <Title>
                  <h1>{item?.title}</h1>
                  <span>Há 1 dia</span>
                </Title>
                <p>{item?.body}</p>
              </Posts>
            );
          })}
        </main>
      </Container>
    </div>
  );
}
