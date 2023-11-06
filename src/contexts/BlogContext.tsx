import { createContext, useEffect, useState } from "react";
import { githubSearchApi } from "../lib/axios";

interface BlogDataProps {
  id: number;
  title: string;
  body: string;
  created_at: string;
  html_url: string;
  number: number;
}
interface BlogContextType {
  fetchBlogData: (query?: string) => Promise<void>;
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

  async function fetchBlogData(query: string = "") {
    const response = await githubSearchApi.get(
      `/search/issues?q=${encodeURIComponent(query)}+repo:${owner}/${repo}`
    );
    setBlogData(response.data.items);
  }
  // }

  useEffect(() => {
    fetchBlogData();
  }, []);

  return (
    <BlogContext.Provider value={{ blogData, fetchBlogData }}>
      {children}
    </BlogContext.Provider>
  );
}
