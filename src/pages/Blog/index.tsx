import { useContext } from "react";
import { Summary } from "../../components/Summary";
import { Container, BackgroundHeader, Posts, Title } from "./styles";
import { SearchForm } from "./components/SearchForm";
import { BlogContext } from "../../contexts/BlogContext";

export function Blog() {
  const { blogData } = useContext(BlogContext);

  const dateFormatter = new Intl.DateTimeFormat("en-GB");

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
                  <span>
                    {dateFormatter.format(new Date(item?.created_at))}
                  </span>
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
