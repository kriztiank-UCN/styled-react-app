import Header from "./components/Header";
import Box from "./components/Box";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    {/* application elements */}
    <Header fontFamily="Helvetica" fontSize={3}>
      Hello!
    </Header>
    <Box ml={64} color="white" bg="navy">
      Blue Box
    </Box>
  </ThemeProvider>
);

export default App;
