import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { Blog } from "./pages/Blog";
import { BlogProvider } from "./contexts/BlogContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Post } from "./pages/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Blog />,
  },
  {
    path: "post/:id",
    element: <Post />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BlogProvider>
        <RouterProvider router={router} />
      </BlogProvider>
    </ThemeProvider>
  );
}

export default App;
