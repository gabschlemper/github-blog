import { useEffect, useState } from "react";
import {
  BackgroundHeader,
  CodeBlock,
  Container,
  MarkdownStyle,
  PostContent,
  SummaryBlogDetails,
  SummaryIcons,
  SummaryLinks,
} from "./styles";
import { Link, useParams } from "react-router-dom";
import { githubIssuesApi } from "../../lib/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faBuilding,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";

type userDetails = {
  login: string;
};

type BlogDetailsProps = {
  url: string;
  title: string;
  body: string;
  comments: number;
  html_url: string;
  user: userDetails;
};

function renderCodeBlock({ children }: any) {
  return (
    <CodeBlock language="javascript" style={darcula}>
      {children}
    </CodeBlock>
  );
}

export function Post() {
  const [blogDetails, setBlogDetails] = useState<BlogDetailsProps | null>(null);

  const { id } = useParams();
  const owner = "gabschlemper";
  const repo = "github-blog";

  async function fetchBlogDetails(query?: string) {
    const response = await githubIssuesApi.get(
      `${owner}/${repo}/issues/${id}`,
      {
        params: {
          q: query,
        },
      }
    );
    setBlogDetails(response.data);
  }

  useEffect(() => {
    fetchBlogDetails();
  }, []);

  return (
    <div>
      <BackgroundHeader />
      <Container>
        <SummaryBlogDetails>
          <SummaryLinks>
            <Link to="/">
              <FontAwesomeIcon icon={faArrowLeft} />
              <div>Voltar</div>
            </Link>
            {blogDetails?.html_url && (
              <Link to={blogDetails?.html_url} target="_blank">
                <div>Github</div>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </Link>
            )}
          </SummaryLinks>
          <h1>{blogDetails?.title}</h1>
          <SummaryIcons>
            <span>
              <FontAwesomeIcon icon={faGithub} color="#3A536B" />
              <p>gabschlemper</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} color="#3A536B" />
              <p>Self Employee</p>
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} color="#3A536B" />
              <p>{blogDetails?.comments} comments</p>
            </span>
          </SummaryIcons>
        </SummaryBlogDetails>
        <PostContent>
          <MarkdownStyle
            components={{ code: renderCodeBlock }}
            children={blogDetails?.body}
          />
        </PostContent>
      </Container>
    </div>
  );
}
