import { createContext, useEffect, useState } from "react";
import { githubIssuesApi, githubSearchApi } from "../lib/axios";

interface BlogDataProps {
  id: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  number: number;
}

interface BlogContextType {
  filterBlogData: (query?: string) => Promise<void>;
  blogData: BlogDataProps[];
}

interface BlogProviderProps {
  children: React.ReactNode;
}

export const BlogContext = createContext({} as BlogContextType);

export function BlogProvider({ children }: BlogProviderProps) {
  const [blogData, setBlogData] = useState<BlogDataProps[]>([]);

  const owner = "gabschlemper";
  const repo = "github-blog";

  async function filterBlogData(query?: string) {
    const response = await githubSearchApi.get(
      `https://api.github.com/search/issues?q=${"javascript"}%20repo:gabschlemper/github-blog`,
      {
        params: {
          q: query,
        },
      }
    );
    console.log(response.data);
  }

  async function fetchBlogData(query?: string) {
    const response = await githubIssuesApi.get(`/${owner}/${repo}/issues`, {
      params: {
        q: query,
      },
    });
    setBlogData(response.data);
  }

  useEffect(() => {
    fetchBlogData();
    filterBlogData();
  }, []);

  return (
    <BlogContext.Provider value={{ blogData, filterBlogData }}>
      {children}
    </BlogContext.Provider>
  );
}
