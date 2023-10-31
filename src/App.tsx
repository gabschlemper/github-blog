import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { Blog } from "./pages/Blog";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Blog />
    </ThemeProvider>
  );
}

export default App;
